import React, { ElementType, forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface ViewProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: React.ReactNode;
}

export const View = forwardRef<HTMLElement, ViewProps>(({ 
  as: Component = 'div', 
  className, 
  children, 
  ...props 
}, ref) => {
  return (
    <Component 
      ref={ref as any} 
      className={cn("flex flex-col relative box-border min-w-0", className)} 
      {...props}
    >
      {children}
    </Component>
  );
});

View.displayName = 'View';
