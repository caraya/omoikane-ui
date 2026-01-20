import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DashboardCardGrid from '../DashboardCardGrid';
import { describe, it, expect } from 'vitest';

const sample = [
  { id: 'a', title: 'A' },
  { id: 'b', title: 'B' },
  { id: 'c', title: 'C' },
];

describe('DashboardCardGrid keyboard navigation', () => {
  it('moves focus with arrow keys', () => {
    const { getAllByTestId, getByText, container } = render(
      <div>
        <DashboardCardGrid cards={sample as any} columns={3} gap={8} rowHeight={40} />
      </div>
    );

    // find dashboard cards
    const cards = container.querySelectorAll('[data-dashboard-card]');
    expect(cards.length).toBeGreaterThanOrEqual(3);

    // focus first card
    (cards[0] as HTMLElement).focus();
    expect(document.activeElement).toBe(cards[0]);

    // dispatch ArrowRight on the dashboard grid element so keyboard handler sees it
    const grid = container.querySelector('.dashboard-card-grid') as Element;
    fireEvent.keyDown(grid, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(cards[1]);
  });
});
