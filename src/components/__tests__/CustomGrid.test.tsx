import React from 'react';
import { render } from '@testing-library/react';
import CustomGrid, { GridItem } from '../CustomGrid';
import { describe, it, expect } from 'vitest';

describe('CustomGrid / GridItem', () => {
  it('applies gridColumn and gridRow styles when col/row provided', () => {
    const { getByText } = render(
      <CustomGrid columns={4} gap={8} rowHeight={40}>
        <GridItem col={2} row={3} colSpan={2} rowSpan={1}>Cell</GridItem>
      </CustomGrid>
    );

    const el = getByText('Cell');
    // find the closest element that has the inline style (the GridItem wrapper)
    const wrapper = el.closest('div');
    expect(wrapper).toBeTruthy();
    const styleAttr = wrapper!.getAttribute('style') || '';
    expect(styleAttr.includes('grid-column')).toBe(true);
    expect(styleAttr.includes('2 / span 2')).toBe(true);
    expect(styleAttr.includes('grid-row')).toBe(true);
    expect(styleAttr.includes('3 / span 1')).toBe(true);
  });
});
