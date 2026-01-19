import React, { Children, cloneElement, isValidElement } from 'react';
import { cn } from '../utils/cn';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Spacing between buttons. 
   * If 0 (default), buttons are attached (grouped).
   * If > 0 or a string, controls the gap.
   * Numbers are treated as Tailwind units (1 = 0.25rem).
   */
  spacing?: number | string;
  /**
   * Override the variant for all buttons in the group.
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  /**
   * Override the size for all buttons in the group.
   */
  size?: 'sm' | 'md' | 'lg';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ 
  children, 
  className, 
  spacing = 0,
  variant,
  size,
  style,
  ...props 
}) => {
  const isJoined = spacing === 0 || spacing === '0';
  
  // Resolve gap style if spaced
  const gapStyle = !isJoined ? { gap: typeof spacing === 'number' ? `${spacing * 0.25}rem` : spacing } : {};

  return (
    <div 
      className={cn(
        "inline-flex", 
        isJoined && "rounded shadow-sm",
        className
      )} 
      role="group"
      style={{ ...gapStyle, ...style }}
      {...props}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const isFirst = index === 0;
        const isLast = index === Children.count(children) - 1;

        // Logic for joined buttons styles
        const joinedClasses = isJoined ? cn(
           // Reset rounded corners for all
           "rounded-none",
           // Restore corners for ends
           isFirst && "rounded-l", 
           isLast && "rounded-r",
           // Handle borders overlapping (margin-left -1px)
           !isFirst && "-ml-px",
           // Ensure focus ring is on top of siblings
           "focus:relative focus:z-10"
        ) : "";

        // Prepare props to pass down
        const childProps: any = {
           className: cn(child.props.className, joinedClasses),
        };

        if (variant) childProps.variant = variant;
        if (size) childProps.size = size;

        return cloneElement(child as React.ReactElement<any>, childProps);
      })}
    </div>
  );
};
