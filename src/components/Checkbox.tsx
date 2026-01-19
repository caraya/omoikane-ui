import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { Label, Caption } from './Typography';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ 
  className, 
  label, 
  error, 
  id,
  ...props 
}, ref) => {
  const inputId = id || React.useId();

  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id={inputId}
          ref={ref}
          className={cn(
            "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500",
            "mt-1", // Align with text similar to Wonder Blocks
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {label && (
          <Label htmlFor={inputId} className="cursor-pointer select-none">
            {label}
          </Label>
        )}
      </div>
      {error && <Caption className="text-red-600 mt-1">{error}</Caption>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
