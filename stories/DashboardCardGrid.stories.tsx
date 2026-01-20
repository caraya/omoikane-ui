import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DashboardCardGrid, { DashboardCard } from '../src/components/DashboardCardGrid';

const sampleCards: DashboardCard[] = [
  { id: 'c1', title: 'Sales', subtitle: 'Today', content: <div>Revenue: $12,300</div>, col: 1, colSpan: 2, actions: [{ id: 'refresh', label: 'Refresh' }] },
  { id: 'c2', title: 'Active Users', subtitle: '1h', content: <div>342</div>, col: 3, actions: [{ id: 'view', label: 'View' }] },
  { id: 'c3', title: 'Errors', subtitle: 'Last 24h', content: <div>4 critical</div>, col: 1, row: 2, colSpan: 1, actions: [{ id: 'details', label: 'Details' }] },
  { id: 'c4', title: 'Tasks', subtitle: 'Backlog', content: <div>12 items</div>, col: 2, row: 2, colSpan: 2 },
];

const meta: Meta<typeof DashboardCardGrid> = {
  title: 'Molecules/DashboardCardGrid',
  component: DashboardCardGrid,
  argTypes: {
    columns: { control: { type: 'number', min: 1, max: 12, step: 1 } },
    gap: { control: 'text' },
    rowHeight: { control: 'text' },
    showToolbar: { control: 'boolean' },
    cards: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof DashboardCardGrid>;

export const Playground: Story = {
  args: {
    cards: sampleCards,
    columns: 4,
    gap: 12,
    rowHeight: 80,
    showToolbar: true,
  },
  render: (args) => {
    return (
      <div style={{ padding: 24 }}>
        <a href="#dashboard-grid" style={{ position: 'absolute', left: -9999 }}>Skip to dashboard</a>
        <div id="dashboard-grid">
          <DashboardCardGrid cards={args.cards as DashboardCard[]} columns={args.columns} gap={args.gap} rowHeight={args.rowHeight} showToolbar={args.showToolbar} />
        </div>
      </div>
    );
  },
};
