import React, { useState } from 'react';
import CustomGrid, { GridItem } from './CustomGrid';
import { Card } from './Card';
import { Toolbar } from './Toolbar';
import { Popover } from './Popover';
import { cn } from '../utils/cn';

export type DashboardCard = {
  id: string;
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  col?: number;
  row?: number;
  colSpan?: number;
  rowSpan?: number;
  actions?: { id: string; label: string }[];
};

export type DashboardCardGridProps = {
  cards: DashboardCard[];
  columns?: number;
  gap?: number | string;
  rowHeight?: number | string;
  className?: string;
  showToolbar?: boolean;
};

export const DashboardCardGrid: React.FC<DashboardCardGridProps> = ({
  cards,
  columns = 4,
  gap = 12,
  rowHeight = 72,
  className,
  showToolbar = true,
}) => {
  const [popover, setPopover] = useState<{
    openId?: string;
    anchorRef?: React.RefObject<HTMLElement> | null;
    content?: React.ReactNode;
    placement?: 'bottom' | 'top' | 'left' | 'right';
  }>({});

  const handleAction = (cardId: string, actionId: string, anchorRef?: React.RefObject<HTMLElement>) => {
    setPopover({ openId: `${cardId}:${actionId}`, anchorRef, content: `Card ${cardId} action ${actionId}`, placement: 'bottom' });
  };

  const gridClass = `dashboard-grid-cols-${columns}`;

  const onKeyGrid = (e: React.KeyboardEvent<HTMLElement>) => {
    const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (!keys.includes(e.key)) return;
    const root = e.currentTarget as HTMLElement;
    const cardsEls = Array.from(root.querySelectorAll<HTMLElement>('[data-dashboard-card]'));
    if (cardsEls.length === 0) return;

    const getCurrentCardIndex = (): number => {
      const active = document.activeElement as HTMLElement | null;
      if (!active) return -1;
      const card = active.closest('[data-dashboard-card]') as HTMLElement | null;
      if (!card) return -1;
      return cardsEls.indexOf(card);
    };

    const colsComputed = () => {
      const gridEl = root.querySelector('.omoikane-custom-grid') as Element | null;
      if (!gridEl) return columns;
      const cs = window.getComputedStyle(gridEl as Element);
      const cols = (cs && (cs as any).gridTemplateColumns) as string | undefined;
      if (!cols) return columns;
      return cols.split(' ').length;
    };

    const idx = getCurrentCardIndex();
    if (idx < 0) return;
    const cols = colsComputed();
    let target = idx;

    if (e.key === 'ArrowRight') target = Math.min(cardsEls.length - 1, idx + 1);
    else if (e.key === 'ArrowLeft') target = Math.max(0, idx - 1);
    else if (e.key === 'ArrowDown') target = Math.min(cardsEls.length - 1, idx + cols);
    else if (e.key === 'ArrowUp') target = Math.max(0, idx - cols);

    if (target !== idx && target >= 0 && target < cardsEls.length) {
      e.preventDefault();
      (cardsEls[target] as HTMLElement).focus();
    }
  };

  return (
    <div className={cn('dashboard-card-grid', className)} onKeyDown={onKeyGrid}>
      {showToolbar && (
        <div style={{ marginBottom: 12 }}>
          <Toolbar>
            <div style={{ fontWeight: 600 }}>Dashboard</div>
          </Toolbar>
        </div>
      )}

      <a href="#dashboard-grid" style={{ position: 'absolute', left: -9999, top: 'auto' }} id="skip-dashboard">
        Skip to dashboard
      </a>

      {/* scoped responsive CSS for this grid instance */}
      <style>{`
        .${gridClass} { --grid-columns: ${columns}; }
        @media (max-width: 639px) { .${gridClass} { --grid-columns: 1; } }
        @media (min-width: 640px) and (max-width: 1023px) { .${gridClass} { --grid-columns: 2; } }
        /* Focus styles for keyboard navigation */
        .${gridClass} [data-dashboard-card]:focus { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.18); border-radius: 8px; }
        .${gridClass} [data-dashboard-card]:focus-visible { box-shadow: 0 0 0 3px rgba(59,130,246,0.36); }
      `}</style>

      <div className={gridClass}>
        <CustomGrid
          columns={columns}
          gap={gap}
          rowHeight={rowHeight}
          style={{ alignItems: 'start', gridTemplateColumns: `repeat(var(--grid-columns, ${columns}), minmax(0, 1fr))` }}
        >
          {cards.map((c) => (
            <GridItem key={c.id} col={c.col ?? 1} row={c.row} colSpan={c.colSpan ?? 1} rowSpan={c.rowSpan ?? 1}>
              <div data-dashboard-card tabIndex={0} style={{ outline: 'none' }}>
                <Card shadow className="h-full">
                  <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 600 }}>{c.title}</div>
                        {c.subtitle && <div style={{ fontSize: 12, color: '#6b7280' }}>{c.subtitle}</div>}
                      </div>
                    </div>

                    <div style={{ flex: 1 }}>{c.content ?? null}</div>

                    {c.actions && c.actions.length > 0 && (
                      <div style={{ display: 'flex', gap: 8 }}>
                        {c.actions.map((a) => {
                          const ref = React.createRef<HTMLButtonElement>();
                          return (
                            <button
                              key={a.id}
                              ref={ref}
                              onClick={() => handleAction(c.id, a.id, ref)}
                              className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                              aria-haspopup="dialog"
                              aria-controls={`popover-${c.id}-${a.id}`}
                            >
                              {a.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </GridItem>
          ))}
        </CustomGrid>
      </div>

      {/* Popover rendered anchored to clicked action (non-modal tooltip behavior) */}
      <Popover
        isOpen={!!popover.openId}
        anchorRef={popover.anchorRef as any}
        onClose={() => setPopover({})}
        placement={popover.placement}
        className="min-w-[160px]"
        trapFocus={false}
      >
        <div id={popover.openId ? `popover-${popover.openId.replace(':', '-')}` : undefined}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>Action</div>
          <div style={{ fontSize: 13 }}>{popover.content}</div>
        </div>
      </Popover>
    </div>
  );
};

export default DashboardCardGrid;
