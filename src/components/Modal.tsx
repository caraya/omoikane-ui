import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils/cn';
import { Heading } from './Typography';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  /** size variants for modal width */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(isOpen);
  const [exiting, setExiting] = useState<boolean>(false);

  const ANIMATION_DURATION = 200; // ms

  const titleId = title ? `${title.replace(/\s+/g, '-')}-title` : undefined;

  const focusFirst = () => {
    const panel = modalRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) {
      (focusable[0] as HTMLElement).focus();
    } else {
      panel.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key === 'Tab') {
      const panel = modalRef.current;
      if (!panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(
        'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"])'
      )).filter(Boolean);

      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  };

  useEffect(() => {
    let focusTimer: number | undefined;

    if (isOpen) {
      setMounted(true);
      setExiting(false);
      previousActiveRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';
      focusTimer = window.setTimeout(focusFirst, 0);
      document.addEventListener('keydown', handleKeyDown);
    } else if (mounted) {
      // start exit animation then unmount
      setExiting(true);
      const t = window.setTimeout(() => {
        setMounted(false);
        setExiting(false);
        document.body.style.overflow = '';
        try {
          previousActiveRef.current?.focus();
        } catch (e) {
          // ignore
        }
      }, ANIMATION_DURATION);
      return () => clearTimeout(t);
    }

    return () => {
      if (typeof focusTimer !== 'undefined') clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted) return null;

  const sizeMap: Record<string, string> = {
    sm: 'sm:max-w-md',
    md: 'sm:max-w-lg',
    lg: 'sm:max-w-2xl',
    xl: 'sm:max-w-4xl'
  };

  const panelBase = cn(
    'relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all flex flex-col max-h-[90vh]',
    sizeMap[size],
    className
  );

  const backdropClass = exiting ? 'opacity-0' : 'opacity-100';
  const panelEnterClass = exiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100';

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" aria-modal="true">
      {/* Backdrop */}
      <div
        className={cn('fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-200', backdropClass)}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(panelBase, 'transition duration-200 ease-out', panelEnterClass)}
        style={{ transitionDuration: `${ANIMATION_DURATION}ms` }}
      >
        {title && (
          <div className="px-4 pt-4 pb-2">
            <Heading as="h2" className="text-lg font-semibold" id={titleId}>
              {title}
            </Heading>
          </div>
        )}

        <div className="px-4 py-2 overflow-auto">{children}</div>

        {footer && <div className="px-4 py-3 border-t">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};
