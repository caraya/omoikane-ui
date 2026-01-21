import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DataTable from '../../src/components/molecules/DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Molecules/DataTable',
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const sample = [
  { id: 'a', title: 'Task A', subtitle: 'Backlog', column: 1 },
  { id: 'b', title: 'Task B', subtitle: 'In progress', column: 2 },
  { id: 'c', title: 'Task C', subtitle: 'Done', column: 3 },
  { id: 'd', title: 'Task D', subtitle: 'Backlog', column: 1 },
  { id: 'e', title: 'Task E', subtitle: 'In progress', column: 2 },
];

export const Playground: Story = {
  args: {
    columns: 3,
    items: sample,
    draggable: true,
  },
};
