import React from 'react';
import { cn } from '../utils/cn';

export interface GridItemProps {
  children?: React.ReactNode;
  col?: number; // 1-based
  row?: number; // 1-based
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const GridItem: React.FC<GridItemProps> = ({ children, col = 1, row, colSpan = 1, rowSpan = 1, className, style }) => {
  const placement: React.CSSProperties = {};
  if (col) placement.gridColumn = `${col} / span ${colSpan}`;
  if (typeof row === 'number') placement.gridRow = `${row} / span ${rowSpan}`;
  return (
    <div className={cn('relative', className)} style={{ ...placement, ...style }}>
      {children}
    </div>
  );
};

export type CustomGridProps = {
  children?: React.ReactNode;
  columns?: number;
  gap?: number | string;
  className?: string;
  /** if true, this grid will use CSS subgrid for columns (browser support experimental) */
  subgrid?: boolean;
  rowHeight?: string | number;
  style?: React.CSSProperties;
};

export const CustomGrid: React.FC<CustomGridProps> = ({ children, columns = 4, gap = 8, className, subgrid = false, rowHeight = 'auto', style }) => {
  const gridTemplateColumns = subgrid ? 'subgrid' : `repeat(${columns}, minmax(0, 1fr))`;
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    gridAutoRows: typeof rowHeight === 'number' ? `${rowHeight}px` : rowHeight,
    position: 'relative',
    ...style,
  };

  return (
    <div className={cn('omoikane-custom-grid', className)} style={gridStyle}>
      {children}
    </div>
  );
};

export default CustomGrid;
