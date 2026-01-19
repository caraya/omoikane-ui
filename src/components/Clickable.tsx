import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface ClickableState {
  hovered: boolean;
  focused: boolean;
  pressed: boolean;
  disabled: boolean;
}

export interface ClickableProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'children'> {
  /**
   * Children can be a React Node or a function that receives the component's state
   * (hovered, focused, pressed, disabled).
   */
  children?: React.ReactNode | ((state: ClickableState) => React.ReactNode);
  /**
   * URL to navigate to. If provided, renders an anchor tag.
   */
  href?: string;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Role of the element.
   */
  role?: string;
  /**
   * Whether to hide the default browser outline.
   */
  hideDefaultFocusRing?: boolean;
}

export const Clickable = React.forwardRef<HTMLElement, ClickableProps>(({
  children,
  href,
  disabled = false,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  role,
  hideDefaultFocusRing,
  type = "button",
  ...props
}, ref) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  const Component = href ? 'a' : 'button';
  const isButton = Component === 'button';

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    setHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    setHovered(false);
    setPressed(false);
    onMouseLeave?.(e);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    setPressed(true);
    onMouseDown?.(e);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    setPressed(false);
    onMouseUp?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    if (disabled) return;
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (disabled) return;
    setFocused(false);
    setPressed(false);
    onBlur?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      setPressed(true);
    }
    onKeyDown?.(e);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      setPressed(false);
    }
    onKeyUp?.(e);
  };

  const computedState: ClickableState = {
    hovered,
    focused,
    pressed,
    disabled
  };

  const renderedChildren = typeof children === 'function' 
    ? (children as (state: ClickableState) => React.ReactNode)(computedState)
    : children;

  return (
    <Component
      ref={ref as any}
      href={href}
      disabled={isButton ? disabled : undefined}
      aria-disabled={!isButton ? disabled : undefined}
      role={role}
      type={isButton ? type as "button" | "submit" | "reset" : undefined}
      className={cn(
        "inline-flex items-center justify-center transition-colors relative cursor-pointer touch-none",
        "focus:outline-none", // We handle focus styles via state or custom classes usually
        disabled && "cursor-not-allowed opacity-50",
        hideDefaultFocusRing ? "outline-none" : "focus-visible:ring-2 focus-visible:ring-blue-500",
        className
      )}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...props}
    >
      {renderedChildren}
    </Component>
  );
});

Clickable.displayName = 'Clickable';
