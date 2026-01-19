import React, { useEffect, useRef, forwardRef } from 'react';

// Declare standard JSX elements for the web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-picker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        space?: string;
        color?: string; 
      };
    }
  }
}

export interface ColorPickerProps {
    /**
     * The color value (e.g., "red", "oklch(70% 0.25 138)").
     */
    color?: string;
    /**
     * The initial color space (e.g., "oklch", "srgb").
     */
    space?: string;
    /**
     * Callback when color changes.
     */
    onChange?: (color: string) => void;
    className?: string;
}

/**
 * ColorPicker: A React wrapper around the colorjs.io web component.
 * Source: https://elements.colorjs.io/src/color-picker/
 */
export const ColorPicker = forwardRef<HTMLElement, ColorPickerProps>(({ color, space, onChange, className }, ref) => {
    const elementRef = useRef<HTMLElement>(null);
    const loadedRef = useRef(false);

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;
        
        // Dynamically load the web component source
        // @ts-ignore
        import("https://elements.colorjs.io/src/color-picker/color-picker.js")
            .then(() => {
                // Success
            })
            .catch(e => {
                console.error("Failed to load color-picker web component. Ensure you have internet access and CORS is allowed.", e);
            });
    }, []);

    // Sync forwarded ref
    useEffect(() => {
        if (typeof ref === 'function') {
             ref(elementRef.current);
        } else if (ref) {
            ref.current = elementRef.current;
        }
    }, [ref]);

    // Handle Events
    useEffect(() => {
        const el = elementRef.current;
        if(!el) return;

        const handleInput = () => {
             // The web component emits standard events but we can access the color property
             const colorObj = (el as any).color;
             if (onChange && colorObj) {
                 // Converts to string using the colorjs.io toString()
                 onChange(colorObj.toString());
             }
        };

        // 'colorchange' is fired effectively when committed, 'input' when dragging sliders 
        el.addEventListener('input', handleInput);
        el.addEventListener('colorchange', handleInput);

        return () => {
            el.removeEventListener('input', handleInput);
            el.removeEventListener('colorchange', handleInput);
        }
    }, [onChange]);

    // Handle Props that are strictly properties (if any) or complex objects
    // In this case, 'color' and 'space' are reflected properties, so attributes (passed in JSX) work fine.
    // However, if we wanted to pass a ColorJS object directly, we would do it here via ref.

    return (
        <color-picker 
            ref={elementRef} 
            className={className}
            // Pass string attributes. 
            // Note: 'color' attribute sets the initial value.
            // Bi-directional binding in React for WC requires us to be careful not to overwrite user input while typing if we fed 'color' back in too aggressively,
            // but for a picker, it's usually fine.
            color={color}
            space={space}
        >
        </color-picker>
    );
});

ColorPicker.displayName = "ColorPicker";
