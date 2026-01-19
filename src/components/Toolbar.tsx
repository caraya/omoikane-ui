import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface ToolbarProps {
  children?: React.ReactNode;
  className?: string;
  /** horizontal (default) or vertical */
  orientation?: 'horizontal' | 'vertical';
  /** compact density */
  dense?: boolean;
}

export const Toolbar: React.FC<ToolbarProps> & {
  Group: React.FC<{ children?: React.ReactNode; className?: string }>;
  Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
} = ({ children, className, orientation = 'horizontal', dense = false }) => {
  const base = 'inline-flex items-center';
  const orient = orientation === 'vertical' ? 'flex-col' : 'flex-row';
  const gap = dense ? 'gap-1' : 'gap-2';

  return (
    <div role="toolbar" aria-orientation={orientation} className={cn(base, orient, gap, className)}>
      {children}
    </div>
  );
};

export const ToolbarGroup: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div role="group" className={cn('inline-flex items-center gap-2', className)}>
      {children}
    </div>
  );
};

export const ToolbarButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={props.type ?? 'button'}
        className={cn('inline-flex items-center justify-center px-2 py-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500', className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Toolbar.Group = ToolbarGroup;
Toolbar.Button = ToolbarButton as any;

export default Toolbar;
