import React from 'react';
import { cn } from '../utils/cn';
import { InfoIcon, SmileyIcon, WarningIcon, WarningCircleIcon, XIcon } from '@phosphor-icons/react';

export type BannerVariant = 'info' | 'success' | 'warning' | 'critical';

export interface BannerProps {
  variant?: BannerVariant;
  children: React.ReactNode;
  actions?: React.ReactNode; 
  onDismiss?: () => void;
  className?: string;
  icon?: React.ReactNode; // Allow custom icon override
}

const variantStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    textColor: 'text-blue-800',
  },
  success: {
    container: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    textColor: 'text-green-800',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200',
    iconColor: 'text-yellow-600',
    textColor: 'text-yellow-800',
  },
  critical: {
    container: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
    textColor: 'text-red-800',
  },
};

const Icons = {
  info: <InfoIcon size={20} weight="bold" />,
  success: <SmileyIcon size={20} weight="bold" />,
  warning: <WarningIcon size={20} weight="bold" />,
  critical: <WarningCircleIcon size={20} weight="bold" />,
};

export const Banner: React.FC<BannerProps> = ({
  variant = 'info',
  children,
  actions,
  onDismiss,
  className,
  icon,
}) => {
  const styles = variantStyles[variant];
  const Icon = icon || Icons[variant];

  return (
    <div className={cn(
      "rounded-md border p-4",
      styles.container,
      className
    )} role="alert">
      <div className="flex">
        <div className={cn("flex-shrink-0", styles.iconColor)}>
          {Icon}
        </div>
        <div className={cn("ml-3 flex-1 md:flex md:justify-between")}>
          <div className={cn("text-sm", styles.textColor)}>
             {/* Wrap string children in a paragraph for better spacing, otherwise render as is */}
             {typeof children === 'string' ? <p>{children}</p> : children}
          </div>
          {actions && (
            <div className="mt-2 text-sm md:ml-6 md:mt-0 flex shrink-0">
               {actions}
            </div>
          )}
        </div>
        {onDismiss && (
            <div className="ml-3 flex-shrink-0 pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={onDismiss}
                  className={cn(
                    "inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2",
                    styles.textColor,
                    styles.container, // Match background
                    "hover:bg-opacity-75"
                  )}
                  aria-label="Dismiss"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon size={20} weight="bold" />
                </button>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};
