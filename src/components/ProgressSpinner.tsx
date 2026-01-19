import React from 'react';
import { cn } from '../utils/cn';

export type SpinnerVariant = 'default' | 'neutral' | 'positive' | 'negative' | 'info';

interface ProgressSpinnerProps extends React.HTMLAttributes<SVGElement> {
  /** size in pixels */
  size?: number;
  /** stroke width */
  thickness?: number;
  /** color variant */
  variant?: SpinnerVariant;
  /** determinate mode */
  value?: number; // 0-100; if undefined -> indeterminate
  'aria-label'?: string;
}

const variantMap: Record<SpinnerVariant, string> = {
  default: 'stroke-blue-600',
  neutral: 'stroke-gray-600',
  positive: 'stroke-green-600',
  negative: 'stroke-red-600',
  info: 'stroke-indigo-600',
};

export const ProgressSpinner: React.FC<ProgressSpinnerProps> = ({
  size = 24,
  thickness = 3.5,
  variant = 'default',
  value,
  className,
  'aria-label': ariaLabel = 'Loading',
  ...rest
}) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const dash = typeof value === 'number'
    ? `${(value / 100) * circumference} ${circumference}`
    : `${0.75 * circumference} ${circumference}`;

  const dashOffset = typeof value === 'number'
    ? `${circumference - (value / 100) * circumference}`
    : undefined;

  const svgClass = cn('inline-block align-middle', className, !('value' in ({} as ProgressSpinnerProps)) && '');

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={svgClass}
      {...rest}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={thickness}
        className="stroke-gray-200"
        fill="none"
      />

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={thickness}
        strokeLinecap="round"
        fill="none"
        className={cn(variantMap[variant], typeof value === 'number' ? '' : 'animate-spin')}
        strokeDasharray={dash}
        strokeDashoffset={dashOffset}
        style={typeof value === 'number' ? { transition: 'stroke-dashoffset 200ms linear' } : undefined}
      />
    </svg>
  );
};

export default ProgressSpinner;
