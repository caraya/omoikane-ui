import React, { ReactNode, CSSProperties } from 'react';
import { cn } from '../utils/cn';

export interface SpringProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

/**
 * Spring: Flexible spacer that expands to fill available space in a flex container.
 */
export const Spring = ({ className, style, children }: SpringProps) => (
    <div className={cn('flex-1', className)} style={style}>
        {children}
    </div>
);

export interface StrutProps {
    size?: number | string; // px, rem, etc.
    className?: string;
    style?: CSSProperties;
}

/**
 * Strut: Fixed-size spacer for consistent gaps in flex layouts.
 */
export const Strut = ({ size = 16, className, style }: StrutProps) => (
    <div
        className={cn('flex-shrink-0', className)}
        style={{ width: typeof size === 'number' ? `${size}px` : size, height: '1px', ...style }}
        aria-hidden="true"
    />
);

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

/**
 * Row: Horizontal flex container.
 */
export const Row = ({ children, className, style, ...props }: RowProps) => (
    <div className={cn('flex flex-row items-center', className)} style={style} {...props}>
        {children}
    </div>
);

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

/**
 * Column: Vertical flex container.
 */
export const Column = ({ children, className, style, ...props }: ColumnProps) => (
    <div className={cn('flex flex-col', className)} style={style} {...props}>
        {children}
    </div>
);
