import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DataTable from '../molecules/DataTable';

const sample = [
  { id: 'a', title: 'Task A', subtitle: 'Backlog', column: 1 },
  { id: 'b', title: 'Task B', subtitle: 'In progress', column: 2 },
];

describe('DataTable snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<DataTable columns={3} items={sample} draggable={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
