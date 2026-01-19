import React, { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils/cn';

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopoverAlign = 'start' | 'center' | 'end';

interface PopoverProps {
  isOpen: boolean;
  anchorEl?: HTMLElement | null;
  anchorRef?: React.RefObject<HTMLElement>;
  onClose?: () => void;
  children?: React.ReactNode;
  placement?: PopoverPlacement;
  align?: PopoverAlign;
  offset?: number;
  showArrow?: boolean;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  isOpen,
  anchorEl,
  anchorRef,
  onClose,
  children,
  placement = 'bottom',
  align = 'center',
  offset = 8,
  showArrow = true,
  className,
}) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const getAnchorRect = () => {
    const el = anchorEl ?? anchorRef?.current;
    if (!el) return null;
    return el.getBoundingClientRect();
  };

  useLayoutEffect(() => {
    if (!isOpen) return;

    const calculate = () => {
      const anchor = getAnchorRect();
      const panel = panelRef.current;
      if (!panel) return;

      const pr = panel.getBoundingClientRect();
      const ar = anchor ?? { top: window.innerHeight / 2, left: window.innerWidth / 2, width: 0, height: 0, right: window.innerWidth / 2, bottom: window.innerHeight / 2 } as any;

      let top = 0;
      let left = 0;

      if (placement === 'bottom') {
        top = ar.bottom + offset;
        if (align === 'start') left = ar.left;
        else if (align === 'center') left = ar.left + ar.width / 2 - pr.width / 2;
        else left = ar.right - pr.width;
      } else if (placement === 'top') {
        top = ar.top - pr.height - offset;
        if (align === 'start') left = ar.left;
        else if (align === 'center') left = ar.left + ar.width / 2 - pr.width / 2;
        else left = ar.right - pr.width;
      } else if (placement === 'left') {
        left = ar.left - pr.width - offset;
        if (align === 'start') top = ar.top;
        else if (align === 'center') top = ar.top + ar.height / 2 - pr.height / 2;
        else top = ar.bottom - pr.height;
      } else {
        // right
        left = ar.right + offset;
        if (align === 'start') top = ar.top;
        else if (align === 'center') top = ar.top + ar.height / 2 - pr.height / 2;
        else top = ar.bottom - pr.height;
      }

      // clamp to viewport
      top = Math.max(8, Math.min(top, window.innerHeight - pr.height - 8));
      left = Math.max(8, Math.min(left, window.innerWidth - pr.width - 8));

      setPos({ top, left });
    };

    calculate();
    const ro = new ResizeObserver(calculate);
    ro.observe(document.body);
    window.addEventListener('scroll', calculate, true);
    window.addEventListener('resize', calculate);

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', calculate, true);
      window.removeEventListener('resize', calculate);
    };
  }, [isOpen, anchorEl, anchorRef, placement, align, offset]);

  // click outside & escape handling
  React.useEffect(() => {
    if (!isOpen) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node | null;
      const panel = panelRef.current;
      const anchor = anchorEl ?? anchorRef?.current;
      if (panel && !panel.contains(target) && anchor && !anchor.contains(target)) {
        onClose?.();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, anchorEl, anchorRef, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div aria-hidden={false}>
      <div
        ref={panelRef}
        role="dialog"
        className={cn('bg-white rounded shadow-md ring-1 ring-black/5 p-2', className)}
        style={{ position: 'absolute', top: pos?.top ?? 0, left: pos?.left ?? 0, zIndex: 60 }}
      >
        {showArrow && (
          <div
            data-placement={placement}
            className={cn(
              'absolute w-3 h-3 bg-white rotate-45 shadow-sm',
              placement === 'top' && '-translate-y-1 bottom-0 left-1/2 -translate-x-1/2',
              placement === 'bottom' && '-translate-y-1 top-0 left-1/2 -translate-x-1/2',
              placement === 'left' && 'right-0 top-1/2 -translate-y-1/2 -translate-x-1',
              placement === 'right' && 'left-0 top-1/2 -translate-y-1/2 translate-x-1'
            )}
          />
        )}

        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Popover;
