import React from 'react';
import { cn } from '../utils/cn';

export type PillVariant = 'default' | 'neutral' | 'positive' | 'negative' | 'info';
export type PillSize = 'sm' | 'md' | 'lg';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: PillVariant;
  size?: PillSize;
  rounded?: boolean;
}

const variantMap: Record<PillVariant, string> = {
  default: 'bg-blue-100 text-blue-800',
  neutral: 'bg-gray-100 text-gray-800',
  positive: 'bg-green-100 text-green-800',
  negative: 'bg-red-100 text-red-800',
  info: 'bg-indigo-100 text-indigo-800'
};

const sizeMap: Record<PillSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-0.5',
  lg: 'text-base px-3.5 py-1'
};

export const Pill: React.FC<PillProps> = ({
  children,
  variant = 'default',
  size = 'md',
  rounded = true,
  className,
  ...rest
}) => {
  return (
    <span
      role="status"
      className={cn(
        'inline-flex items-center gap-2 font-medium leading-none',
        variantMap[variant],
        sizeMap[size],
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Pill;
