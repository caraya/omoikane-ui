import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { Label, Caption } from './Typography';

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ 
  className, 
  label, 
  error, 
  id,
  ...props 
}, ref) => {
  const inputId = id || React.useId();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id={inputId}
          ref={ref}
          className={cn(
            "h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500",
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

Radio.displayName = 'Radio';
