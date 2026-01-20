import React, { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastProps {
  children?: React.ReactNode;
  position?: ToastPosition;
  className?: string;
  /** Controlled visibility */
  visible?: boolean;
  /** Uncontrolled default */
  defaultVisible?: boolean;
  onClose?: () => void;
  
}

const positionStyles: Record<ToastPosition, React.CSSProperties> = {
  'top-left': { top: 16, left: 16, right: 'auto', bottom: 'auto' },
  'top-center': { top: 16, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 16, right: 16, left: 'auto', bottom: 'auto' },
  'bottom-left': { bottom: 16, left: 16, right: 'auto', top: 'auto' },
  'bottom-center': { bottom: 16, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 16, right: 16, left: 'auto', top: 'auto' },
};

export const Toast: React.FC<ToastProps> = ({
  children,
  position = 'top-right',
  className,
  visible: visibleProp,
  defaultVisible = false,
  onClose,
}) => {
  const isControlled = typeof visibleProp === 'boolean';
  const [visibleInternal, setVisibleInternal] = useState<boolean>(defaultVisible);
  const visible = isControlled ? (visibleProp as boolean) : visibleInternal;

  // No auto-hide behavior: visibility is controlled via `visible` or internal state and
  // dismissed by clicking the toast (handleClose).
  useEffect(() => {
    return () => {};
  }, [visible, isControlled, onClose]);

  const handleClose = () => {
    if (!isControlled) setVisibleInternal(false);
    onClose?.();
  };

  if (!visible) return null;

  const base = 'fixed z-50 max-w-xs rounded shadow-lg p-3 text-sm text-white cursor-pointer';

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={handleClose}
      className={cn(base, 'bg-gray-900', className)}
      style={{ ...positionStyles[position] }}
    >
      {children}
    </div>
  );
};

export default Toast;
