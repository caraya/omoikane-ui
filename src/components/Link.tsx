import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';

export type LinkSize = 'sm' | 'md' | 'lg';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  /** If true, opens in a new tab */
  external?: boolean;
  /** Text color override (CSS color string) */
  color?: string;
  /** Whether the link should show an underline */
  underline?: boolean;
  /** Size variant */
  size?: LinkSize;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  href,
  children,
  external = false,
  color,
  underline = true,
  size = 'md',
  className,
  ...props
}, ref) => {
  const sizeMap: Record<LinkSize, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const base = cn(
    'inline-flex items-center gap-1',
    sizeMap[size],
    underline ? 'underline underline-offset-2' : 'no-underline',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
    className
  );

  const style = color ? { color } : undefined;

  return (
    <a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={base}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
});

Link.displayName = 'Link';
