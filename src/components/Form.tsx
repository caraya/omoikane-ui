import React from 'react';
import { cn } from '../utils/cn';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * Spacing between form fields.
   * Default is 6 (1.5rem).
   */
  gap?: number | string;
}

interface FormSectionProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  title?: string;
  description?: string;
  gap?: number | string;
}

/**
 * Form: A standard container for form elements that handles spacing and layout.
 * Modeled to encourage simple vertical stacking of labeled fields.
 */
export const Form: React.FC<FormProps> = ({ 
  children, 
  className, 
  gap = 6, 
  ...props 
}) => {
  // Convert standard Tailwind spacing numbers to rem if number provided
  const gapStyle = typeof gap === 'number' ? `${gap * 0.25}rem` : gap;

  return (
    <form 
      className={cn("flex flex-col", className)} 
      style={{ gap: gapStyle }}
      {...props}
    >
      {children}
    </form>
  );
};

/**
 * FormSection: A logical group of form fields (fieldset).
 * Useful for grouping radios, checkboxes, or related text inputs.
 */
export const FormSection: React.FC<FormSectionProps> = ({ 
    children, 
    className, 
    title,
    description,
    gap = 4,
    ...props 
}) => {
    const gapStyle = typeof gap === 'number' ? `${gap * 0.25}rem` : gap;

    return (
        <fieldset className={cn("flex flex-col border-none p-0 m-0 min-w-0", className)} style={{ gap: gapStyle }} {...props}>
            {(title || description) && (
                <div className="mb-1">
                    {title && <legend className="text-lg font-bold text-gray-900 leading-tight block mb-1">{title}</legend>}
                    {description && <div className="text-sm text-gray-500">{description}</div>}
                </div>
            )}
            {children}
        </fieldset>
    );
};
