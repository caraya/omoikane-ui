import React, { useState } from 'react';
import CustomGrid, { GridItem } from '../CustomGrid';
import { DetailCell } from '../Cell';
import Pill from '../Pill';
import { cn } from '../../utils/cn';
import { TextField } from '../TextField';

export interface DataItem {
  id: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  body?: string;
  column?: number; // 1-based
}

export interface DataTableProps {
  columns?: number;
  items: DataItem[];
  draggable?: boolean;
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ columns = 3, items, draggable = false, className }) => {
  const initialTitles = Array.from({ length: columns }, (_, i) => `Column ${i + 1}`);
  const [columnsCount, setColumnsCount] = useState<number>(columns);
  const [titles, setTitles] = useState<string[]>(initialTitles);
  const [stateItems, setStateItems] = useState<DataItem[]>(() =>
    items.map((it) => ({ ...it, subtitle: initialTitles[(it.column ?? 1) - 1] }))
  );
  const [newCardTitle, setNewCardTitle] = useState<string>('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftTitle, setDraftTitle] = useState<string>('');
  const [draftBody, setDraftBody] = useState<string>('');

  const addCardToColumn1 = () => {
    if (!newCardTitle.trim()) return;
    const id = `${Date.now()}`;
    const newItem: DataItem = {
      id,
      title: newCardTitle,
      subtitle: titles[0] ?? `Column 1`,
      column: 1,
    };
    setStateItems((prev) => [newItem, ...prev]);
    setNewCardTitle('');
  };

  const startEdit = (it: DataItem) => {
    setEditingId(it.id);
    setDraftTitle(typeof it.title === 'string' ? it.title : String(it.title ?? ''));
    setDraftBody(typeof it.body === 'string' ? it.body : '');
  };

  const saveEdit = (id: string) => {
    setStateItems((prev) => prev.map((it) => (it.id === id ? { ...it, title: draftTitle, body: draftBody } : it)));
    setEditingId(null);
    setDraftTitle('');
    setDraftBody('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftTitle('');
    setDraftBody('');
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDropOnColumn = (e: React.DragEvent, columnIndex: number) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (!id) return;
    setStateItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? { ...it, column: columnIndex, subtitle: titles[columnIndex - 1] ?? it.subtitle }
          : it
      )
    );
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const columnsArray = Array.from({ length: columnsCount }, (_, i) => i + 1);

  const addColumn = () => {
    const next = columnsCount + 1;
    setColumnsCount(next);
    setTitles((prev) => [...prev, `Column ${next}`]);
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2">
          <TextField
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            placeholder="New card title"
            className="w-64"
          />
          <button
            type="button"
            onClick={() => addCardToColumn1()}
            className="inline-flex items-center px-3 py-1.5 rounded bg-green-600 text-white text-sm hover:bg-green-700"
          >
            + Add card
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={addColumn}
            className="inline-flex items-center px-3 py-1.5 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            + Add column
          </button>
        </div>
      </div>

      <CustomGrid columns={columnsCount} gap={12}>
        {columnsArray.map((col) => (
          <GridItem key={col} col={col}>
            <div className="bg-gray-50 border rounded-md overflow-hidden h-full flex flex-col">
              <div className="px-3 py-2 border-b flex items-center justify-between">
                <div className="w-full">
                  <TextField
                    value={titles[col - 1]}
                    onChange={(e) => {
                      const v = e.target.value;
                      setTitles((prev) => {
                        const next = [...prev];
                        next[col - 1] = v;
                        return next;
                      });
                      // Update existing items in this column to reflect new column title
                      setStateItems((prev) => prev.map((it) => (it.column === col ? { ...it, subtitle: v } : it)));
                    }}
                    className="w-full"
                  />
                </div>
                <Pill className="ml-2">{stateItems.filter((s) => (s.column ?? 1) === col).length}</Pill>
              </div>
              <div
                className="p-2 overflow-auto flex-1 space-y-2"
                onDragOver={draggable ? allowDrop : undefined}
                onDrop={draggable ? (e) => handleDropOnColumn(e, col) : undefined}
              >
                {stateItems
                  .filter((it) => (it.column ?? 1) === col)
                  .map((it) => (
                    <div
                      key={it.id}
                      draggable={draggable}
                      onDragStart={draggable ? (e) => handleDragStart(e, it.id) : undefined}
                    >
                      {editingId === it.id ? (
                        <div className="bg-white p-3 border rounded">
                          <div className="mb-2">
                            <TextField value={draftTitle} onChange={(e) => setDraftTitle(e.target.value)} />
                          </div>
                          <div className="mb-2">
                            <textarea
                              value={draftBody}
                              onChange={(e) => setDraftBody(e.target.value)}
                              className="w-full border rounded p-2 min-h-[80px]"
                              placeholder="Card body"
                            />
                          </div>
                          <div className="flex gap-2 justify-end">
                            <button
                              type="button"
                              onClick={() => saveEdit(it.id)}
                              className="px-3 py-1 rounded bg-green-600 text-white text-sm"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={cancelEdit}
                              className="px-3 py-1 rounded bg-gray-200 text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div onDoubleClick={() => startEdit(it)}>
                          <DetailCell title={it.title} subtitle1={it.subtitle} className="bg-white" />
                          {it.body ? <div className="text-sm text-gray-600 mt-1 px-2">{it.body}</div> : null}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </GridItem>
        ))}
      </CustomGrid>
    </div>
  );
};

export default DataTable;
