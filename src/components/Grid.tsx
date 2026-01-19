import React from 'react';
import { cn } from '../utils/cn';

// Mapping for small breakpoint (4 columns total)
const smallMap: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
};

// Mapping for medium breakpoint (8 columns total)
const mediumMap: Record<number, string> = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
    7: 'md:col-span-7',
    8: 'md:col-span-8',
};

// Mapping for large breakpoint (12 columns total)
const largeMap: Record<number, string> = {
    1: 'lg:col-span-1',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
    4: 'lg:col-span-4',
    5: 'lg:col-span-5',
    6: 'lg:col-span-6',
    7: 'lg:col-span-7',
    8: 'lg:col-span-8',
    9: 'lg:col-span-9',
    10: 'lg:col-span-10',
    11: 'lg:col-span-11',
    12: 'lg:col-span-12',
};

export interface GridCellProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Number of columns to span on small screens (Phone: < 768px). Total cols: 4 */
    small?: 1 | 2 | 3 | 4;
    /** Number of columns to span on medium screens (Tablet: 768px - 1023px). Total cols: 8 */
    medium?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    /** Number of columns to span on large screens (Desktop: >= 1024px). Total cols: 12 */
    large?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children?: React.ReactNode;
}

/**
 * Cell component for the Grid system.
 * Handles responsive column spanning.
 */
export const Cell = ({ small, medium, large, className, children, ...props }: GridCellProps) => {
    // If a size is missing, it creates a gap in the grid logic unless we define defaults.
    // CSS Grid auto-placement handles undefined spans by defaulting to span-1 usually or filling gaps.
    // Explicit undefined check is unnecessary if we trust the maps.
    
    // Fallback: If 'small' is not defined, we might default to full width (span-4) for mobile?
    // Or just let it be auto (span-1).
    // WB usually forces you to specify or picks reasonable defaults.
    // We will apply classes only if props are defined.

    return (
        <div 
            className={cn(
                // Base behavior?
                // By default, a grid item spans 1 column if not specified.
                small && smallMap[small],
                medium && mediumMap[medium],
                large && largeMap[large],
                className
            )} 
            {...props}
        >
            {children}
        </div>
    );
};

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /**
     * If true, uses CSS Subgrid (inherits columns from parent grid).
     * Note: This element must be a direct child of a Grid or Cell that spans columns.
     * When using subgrid, the gap is also inherited.
     */
    asSubgrid?: boolean;
}

/**
 * Grid Layout component modeled after Wonder Blocks (but implemented with CSS Grid).
 * 
 * - Small (<768px): 4 Columns, 16px Gutter
 * - Medium (768-1023px): 8 Columns, 24px Gutter
 * - Large (>=1024px): 12 Columns, 32px Gutter
 */
export const Grid = ({ children, asSubgrid, className, ...props }: GridProps) => {
    return (
        <div 
            className={cn(
                "grid",
                // Columns: If subgrid, use subgrid, else use standard responsive columns
                asSubgrid ? "grid-cols-subgrid" : "grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
                // Gap (Gutters): If subgrid, usually we don't define gap (it inherits), or we can redefine it.
                // It's safer to only set gaps if this is a root grid.
                !asSubgrid && "gap-4 md:gap-6 lg:gap-8",
                className
            )} 
            {...props}
        >
          {children}
        </div>
    );
};
