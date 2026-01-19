import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { Button } from './Button';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  isOpen, 
  onToggle, 
  className 
}) => {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  
  const isControlled = isOpen !== undefined;
  const isExpanded = isControlled ? isOpen : localIsOpen;
  const handleToggle = onToggle || (() => setLocalIsOpen(!localIsOpen));

  return (
    <div className={cn("border-b border-gray-200 last:border-b-0", className)}>
      <Button
        variant="tertiary"
        type="button"
        className="flex w-full items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-2 hover:no-underline text-gray-900"
        onClick={handleToggle}
        aria-expanded={isExpanded ? "true" : "false"}
      >
        <span className="text-base font-medium">{title}</span>
        <span className={cn("ml-6 flex items-center transition-transform duration-200", isExpanded ? "rotate-180" : "")}>
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </Button>
      
      <div 
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pb-4 pt-0 text-sm text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  children, 
  className, 
  allowMultiple = false 
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index) 
          : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={cn("border border-gray-200 rounded-md bg-white", className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            isOpen: openIndexes.includes(index),
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
};

