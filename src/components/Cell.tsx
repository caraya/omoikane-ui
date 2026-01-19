import React from 'react';
import { cn } from '../utils/cn';

export interface CellProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The title of the cell */
  title: React.ReactNode;
  /** Content to display on the left side */
  leftAccessory?: React.ReactNode;
  /** Content to display on the right side */
  rightAccessory?: React.ReactNode;
  /** Whether the cell is disabled */
  disabled?: boolean;
  /** Whether the cell is active/selected */
  active?: boolean;
  /** Optional href to render as an anchor */
  href?: string;
}

const CellCore: React.FC<CellProps & { children?: React.ReactNode }> = ({
  title,
  leftAccessory,
  rightAccessory,
  disabled,
  active,
  href,
  className,
  children,
  onClick,
  ...props
}) => {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component
      href={href}
      onClick={disabled ? undefined : (onClick as any)}
      className={cn(
        "group flex items-center w-full min-h-[48px] px-4 py-3 bg-white border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer",
        disabled && "opacity-50 pointer-events-none cursor-not-allowed",
        active && "bg-blue-50 hover:bg-blue-50",
        className
      )}
      {...(props as any)}
    >
      {leftAccessory && (
        <div className={cn("flex-shrink-0 mr-3 text-gray-500", active && "text-blue-600")}>
          {leftAccessory}
        </div>
      )}
      
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        {children}
      </div>

      {rightAccessory && (
        <div className={cn("flex-shrink-0 ml-3 text-gray-400 group-hover:text-gray-600", active && "text-blue-600")}>
          {rightAccessory}
        </div>
      )}
    </Component>
  );
};

export const CompactCell: React.FC<CellProps> = ({ 
  title, 
  leftAccessory, 
  rightAccessory, 
  ...props 
}) => {
  return (
    <CellCore 
      {...props} 
      title={title}
      leftAccessory={leftAccessory}
      rightAccessory={rightAccessory}
    >
      {typeof title === 'string' || typeof title === 'number' ? (
        <span className="text-base font-medium text-gray-900 truncate">
          {title}
        </span>
      ) : (
        title
      )}
    </CellCore>
  );
};

export interface DetailCellProps extends CellProps {
  subtitle1?: React.ReactNode;
  subtitle2?: React.ReactNode;
}

export const DetailCell: React.FC<DetailCellProps> = ({ 
  title, 
  subtitle1, 
  subtitle2, 
  leftAccessory, 
  rightAccessory,
  className, 
  ...props 
}) => {
  return (
    <CellCore 
      {...props} 
      title={title} 
      leftAccessory={leftAccessory}
      rightAccessory={rightAccessory}
      className={cn("py-4", className)} // More vertical padding for detail cell by default
    >
        {subtitle1 && (typeof subtitle1 === 'string' || typeof subtitle1 === 'number' ? (
            <span className="text-xs text-gray-500 mb-0.5 truncate order-first">
            {subtitle1}
            </span>
        ) : subtitle1)}
        
        {typeof title === 'string' || typeof title === 'number' ? (
            <span className="text-base font-semibold text-gray-900 truncate">
            {title}
            </span>
        ) : (
            title
        )}

        {subtitle2 && (typeof subtitle2 === 'string' || typeof subtitle2 === 'number' ? (
            <span className="text-sm text-gray-500 mt-0.5 truncate">
            {subtitle2}
            </span>
        ) : subtitle2)}
    </CellCore>
  );
};
