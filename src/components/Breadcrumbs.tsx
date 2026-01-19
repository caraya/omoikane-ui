import React from 'react';
import { CaretRightIcon } from '@phosphor-icons/react';
import { cn } from '../utils/cn';

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  active?: boolean;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  onClick,
  active,
  className,
  ...props
}) => {
  const Component = href ? 'a' : 'span';
  
  return (
    <li className={cn("inline-flex items-center", className)} {...props}>
      <Component
        href={href}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
        className={cn(
          "text-sm font-medium transition-colors",
          active 
            ? "text-gray-900 font-semibold cursor-default pointer-events-none" 
            : "text-gray-500 hover:text-gray-900 cursor-pointer"
        )}
      >
        {children}
      </Component>
    </li>
  );
};

export interface BreadcrumbsProps extends React.ComponentPropsWithoutRef<'nav'> {
  separator?: React.ReactNode;
  children?: React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  separator = <CaretRightIcon className="h-4 w-4 text-gray-400 mx-2" weight="bold" />,
  className,
  alignment = 'left',
  style,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);

  const alignmentClass = {
    left: 'breadcrumbs-left',
    center: 'breadcrumbs-center',
    right: 'breadcrumbs-right',
  }[alignment] || 'breadcrumbs-left';

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex breadcrumbs-container", alignmentClass, className)} 
      style={style}
      {...props}
    >
      <ol className="flex items-center">
        {childrenArray.map((child, index) => {
          const isLast = index === childrenArray.length - 1;
          
          return (
            <React.Fragment key={index}>
              {child}
              {!isLast && (
                <li aria-hidden="true" className="flex items-center select-none">
                  {separator}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
