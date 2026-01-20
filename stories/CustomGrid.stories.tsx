import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CustomGrid, { GridItem, GridItemProps } from '../src/components/CustomGrid';

type Item = GridItemProps & { id?: string; label?: string };

const meta: Meta<typeof CustomGrid> = {
  title: 'Layout/CustomGrid',
  component: CustomGrid,
  argTypes: {
    columns: { control: { type: 'number', min: 1, max: 12, step: 1 } },
    gap: { control: 'text' },
    rowHeight: { control: 'text' },
    subgrid: { control: 'boolean' },
    items: { control: 'object' },
  },
  parameters: {
    docs: {
      description: {
        component:
          '`CustomGrid` is a flexible CSS Grid wrapper that allows explicit placement of children using `GridItem` props (`col`, `row`, `colSpan`, `rowSpan`). It supports nested grids and experimental `subgrid` usage. Use `GridItem` without a `row` to let the item flow into available grid auto-placed rows, or specify a `row` that does not yet exist — the grid will create rows as needed.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof CustomGrid>;

const sampleItems: Item[] = [
  { id: 'a', col: 1, row: 1, colSpan: 1, rowSpan: 1, label: 'A' },
  { id: 'b', col: 2, row: 1, colSpan: 2, rowSpan: 1, label: 'B' },
  { id: 'c', col: 1, row: 2, colSpan: 3, rowSpan: 1, label: 'C' },
  { id: 'd', col: 4, row: 1, colSpan: 1, rowSpan: 2, label: 'D' },
];

export const Playground: Story = {
  args: {
    columns: 4,
    gap: 12,
    rowHeight: 80,
    subgrid: false,
    items: sampleItems,
  },
  render: (args) => {
    const items: Item[] = (args.items as Item[]) || [];

    return (
      <div style={{ padding: 24 }}>
        <CustomGrid columns={args.columns} gap={args.gap} rowHeight={args.rowHeight} subgrid={args.subgrid} style={{ border: '1px dashed #e5e7eb', padding: 8 }}>
          {items.map((it, idx) => (
            <GridItem
              key={it.id ?? idx}
              col={it.col}
              row={it.row}
              colSpan={it.colSpan}
              rowSpan={it.rowSpan}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 6,
                padding: 8,
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}
            >
              {it.label ?? `Item ${idx + 1}`}
            </GridItem>
          ))}
        </CustomGrid>
      </div>
    );
  },
};

export const NestedWithSubgrid: Story = {
  args: {
    columns: 4,
    gap: 8,
    rowHeight: 60,
    subgrid: false,
    items: sampleItems,
  },
  render: (args) => {
    return (
      <div style={{ padding: 24 }}>
        <CustomGrid columns={4} gap={8} rowHeight={60} style={{ border: '1px dashed #d1d5db', padding: 8 }}>
          <GridItem col={1} row={1} colSpan={2} style={{ background: '#f8fafc', padding: 8 }}>
            <div style={{ padding: 8 }}>
              Parent cell with nested grid
              <CustomGrid columns={2} gap={6} rowHeight={40} subgrid={true} style={{ marginTop: 8 }}>
                <GridItem col={1} label="nested-1">Nested 1</GridItem>
                <GridItem col={2} label="nested-2">Nested 2</GridItem>
                <GridItem col={1} row={3} label="nested-3">Nested 3 (row 3 explicit)</GridItem>
              </CustomGrid>
            </div>
          </GridItem>
          <GridItem col={3} row={1} label="side">Side</GridItem>
          <GridItem col={4} row={1} label="side2">Side 2</GridItem>
        </CustomGrid>
      </div>
    );
  },
};

export const Examples: Story = {
  args: {
    columns: 6,
    gap: 8,
    rowHeight: 64,
    subgrid: false,
  },
  render: (args) => {
    const Box: React.FC<{ children?: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: 6,
        padding: 8,
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        fontSize: 13,
        ...style
      }}>{children}</div>
    );

    return (
      <div style={{ padding: 20, display: 'grid', gap: 24 }}>
        <section>
          <h4 style={{ margin: '0 0 8px' }}>Sparse placement (place into a later row)</h4>
          <CustomGrid columns={6} gap={8} rowHeight={48} style={{ border: '1px dashed #e5e7eb', padding: 8 }}>
            <GridItem col={1} row={1}><Box>1,1</Box></GridItem>
            <GridItem col={2} row={1}><Box>2,1</Box></GridItem>
            <GridItem col={1} row={5}><Box>1,5 (row 5 created)</Box></GridItem>
            <GridItem col={4} row={2} colSpan={2}><Box>4-5,2 (span 2)</Box></GridItem>
          </CustomGrid>
        </section>

        <section>
          <h4 style={{ margin: '0 0 8px' }}>Auto-placement (no explicit rows)</h4>
          <CustomGrid columns={4} gap={10} rowHeight={56} style={{ border: '1px dashed #e5e7eb', padding: 8 }}>
            <GridItem col={1}><Box>flow 1</Box></GridItem>
            <GridItem col={2}><Box>flow 2</Box></GridItem>
            <GridItem col={3}><Box>flow 3</Box></GridItem>
            <GridItem col={4}><Box>flow 4</Box></GridItem>
            <GridItem col={1}><Box>next row 1</Box></GridItem>
          </CustomGrid>
        </section>

        <section>
          <h4 style={{ margin: '0 0 8px' }}>Nested grids and experimental `subgrid`</h4>
          <CustomGrid columns={3} gap={10} rowHeight={50} style={{ border: '1px dashed #e5e7eb', padding: 8 }}>
            <GridItem col={1} colSpan={2}>
              <Box style={{ padding: 6 }}>
                Parent cell
                <CustomGrid columns={2} gap={6} rowHeight={36} subgrid={true} style={{ marginTop: 8 }}>
                  <GridItem col={1}><Box>sub 1</Box></GridItem>
                  <GridItem col={2}><Box>sub 2</Box></GridItem>
                </CustomGrid>
              </Box>
            </GridItem>
            <GridItem col={3}><Box>Side</Box></GridItem>
          </CustomGrid>
        </section>
      </div>
    );
  }
};
