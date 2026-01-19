import React, { useId, cloneElement, ReactElement } from 'react';
import { cn } from '../utils/cn';
import { Icon } from './Icon';
import { WarningCircleIcon } from '@phosphor-icons/react';

export interface LabeledFieldProps {
    /**
     * The input field to wrap. Must be a single valid React Element.
     * The component clones this element to inject `id` and accessibility props.
     */
    field: ReactElement;

    /**
     * The content for the label.
     */
    label: React.ReactNode;

    /**
     * Optional text to appear separately from the label, typically indicating
     * if the field is required or optional.
     */
    labelAccessory?: React.ReactNode;

    /**
     * Helper text to display below the label but above the field.
     */
    description?: React.ReactNode;

    /**
     * Error message text. 
     * If provided, the field is marked as invalid and this message is displayed below.
     */
    errorMessage?: React.ReactNode;

    /**
     * Helper text to display below the field (bottom slot).
     */
    footer?: React.ReactNode;

    /**
     * Unique base ID. If not provided, one is auto-generated.
     * Used to link label, description, and error message to the input.
     */
    id?: string;

    /**
     * Container class name.
     */
    className?: string;
    
    /**
     * If true, adds a red asterisk typically used to denote required fields.
     * Use this OR labelAccessory="Required".
     */
    required?: boolean;
}

/**
 * LabeledField provides a standardized wrapper for form inputs, handling:
 * - Labeling (connecting label to input via ID)
 * - Descriptions (aria-describedby)
 * - Error messaging (aria-invalid + aria-describedby)
 * - Layout (spacing)
 */
export const LabeledField = ({
    field,
    label,
    labelAccessory,
    description,
    errorMessage,
    footer,
    id: providedId,
    className,
    required,
}: LabeledFieldProps) => {
    const autoId = useId();
    const baseId = providedId || autoId;
    
    const fieldId = `${baseId}-field`;
    const errorId = `${baseId}-error`;
    const descId = `${baseId}-desc`;
    const footerId = `${baseId}-footer`;

    // Determine which elements describe the field for ARIA
    const describedBy = [
        description ? descId : null,
        errorMessage ? errorId : null,
        footer ? footerId : null
    ].filter(Boolean).join(" ");

    return (
        <div className={cn("flex flex-col w-full text-left", className)}>
            {/* Header: Label + Accessory */}
            <div className="flex flex-row justify-between items-baseline mb-1">
                <label 
                    htmlFor={fieldId}
                    className={cn(
                        "text-sm font-semibold text-gray-900 flex items-center gap-1",
                        !!errorMessage && "text-red-700"
                    )}
                >
                    {label}
                    {required && <span className="text-red-600" aria-hidden="true">*</span>}
                </label>
                {labelAccessory && (
                    <span className="text-xs text-gray-500">
                        {labelAccessory}
                    </span>
                )}
            </div>

            {/* Description (Top) */}
            {description && (
                <div id={descId} className="text-xs text-gray-600 mb-1.5">
                    {description}
                </div>
            )}

            {/* Field Injection */}
            {cloneElement(field, {
                id: fieldId, // Force the ID so the label matches
                'aria-describedby': describedBy || undefined,
                'aria-invalid': !!errorMessage,
                // Note: We don't force classNames here because the child might be a complex component
                // or a simple input. The child is responsible for visual error state if it supports it,
                // otherwise the wrapper provides the error message context.
            })}

            {/* Error Message */}
            {errorMessage && (
                <div 
                    id={errorId} 
                    className="flex flex-row items-start mt-1.5 text-sm text-red-700 animate-in fade-in slide-in-from-top-1 duration-200"
                >
                    <div className="shrink-0 pt-0.5 mr-1.5">
                         <Icon icon={WarningCircleIcon} size="small" color="currentColor" />
                    </div>
                    <span>{errorMessage}</span>
                </div>
            )}

            {/* Footer / Bottom Helper */}
            {footer && !errorMessage && (
                <div id={footerId} className="text-xs text-gray-500 mt-1.5">
                    {footer}
                </div>
            )}
        </div>
    );
};
