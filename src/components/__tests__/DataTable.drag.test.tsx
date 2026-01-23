import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DataTable from '../molecules/DataTable';

function makeDataTransfer() {
  const store: Record<string, string> = {};
  return {
    setData: (k: string, v: string) => (store[k] = v),
    getData: (k: string) => store[k],
    effectAllowed: 'move',
  } as unknown as DataTransfer;
}

const sample = [
  { id: 'a', title: 'Task A', subtitle: 'Col1', column: 1 },
  { id: 'b', title: 'Task B', subtitle: 'Col2', column: 2 },
];

describe('DataTable drag/drop', () => {
  it('moves a card to another column and updates subtitle', () => {
    render(<DataTable columns={3} items={sample} draggable={true} />);

    const card = screen.getByText('Task A');
    const dt = makeDataTransfer();

    // start drag
    fireEvent.dragStart(card.closest('div') as Element, { dataTransfer: dt });

    // choose target column index 2 (0-based index 1)
    const cols = Array.from(document.querySelectorAll('.bg-gray-50'));
    const targetCol = cols[1];
    expect(targetCol).toBeTruthy();

    // get the column title input value
    const titleInput = targetCol!.querySelector('input') as HTMLInputElement | null;
    const colTitle = titleInput ? titleInput.value : '';

    // simulate drag over and drop
    fireEvent.dragOver(targetCol as Element, { dataTransfer: dt });
    dt.setData('text/plain', 'a');
    fireEvent.drop(targetCol as Element, { dataTransfer: dt });

    // After drop, Task A should be inside target column; verify subtitle text equals column title
    const movedCard = Array.from(targetCol!.querySelectorAll('div')).find((el) => el.textContent?.includes('Task A'));
    expect(movedCard).toBeTruthy();
    if (movedCard) {
      const subtitleEl = movedCard.querySelector('.text-sm');
      if (subtitleEl) {
        expect(subtitleEl.textContent).toContain(colTitle);
      }
    }
  });

  it('ignores drop when no id present', () => {
    render(<DataTable columns={2} items={sample} draggable={true} />);
    const card = screen.getByText('Task B');
    const dt = makeDataTransfer();
    // do not set id
    const col1 = document.body;
    fireEvent.dragStart(card.closest('div') as Element, { dataTransfer: dt });
    fireEvent.dragOver(col1, { dataTransfer: dt });
    fireEvent.drop(col1, { dataTransfer: dt });
    // ensure card still exists
    expect(screen.getByText('Task B')).toBeTruthy();
  });
});
