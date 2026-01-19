import React, { useEffect, useRef, forwardRef } from 'react';

// Declare standard JSX elements for the web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-swatch': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        value?: string;
        label?: string;
        size?: 'small' | 'large';
        gamuts?: string;
      };
    }
  }
}

export interface ColorSwatchProps {
    /**
     * The color value (e.g. "red", "oklch(60% 0.2 250)").
     * This sets the internal value of the component.
     */
    value?: string;
    
    /**
     * Optional label to display next to the swatch.
     */
    label?: string;

    /**
     * Controls the size of the swatch.
     */
    size?: 'small' | 'large';

    /**
     * Controls which gamuts to check against (e.g., "srgb, p3, rec2020").
     * Set to "none" to disable gamut badges.
     */
    gamuts?: string;

    /**
     * Optional info to display (array of objects mapping label -> channel).
     * e.g. `[{ "L": "oklch.l" }, { "C": "oklch.c" }]`
     */
    info?: Array<Record<string, string>>;

    className?: string;
    children?: React.ReactNode;
}

/**
 * ColorSwatch: A React wrapper around the colorjs.io web component.
 * Displays a color swatch with optional label, gamut badges, and detailed channel info.
 * 
 * Source: https://elements.colorjs.io/src/color-swatch/
 */
export const ColorSwatch = forwardRef<HTMLElement, ColorSwatchProps>(({ 
    value, 
    label, 
    size = 'large', 
    gamuts, 
    info,
    className,
    children
}, ref) => {
    const elementRef = useRef<HTMLElement>(null);
    const loadedRef = useRef(false);

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;
        
        // Dynamically load the web component source
        // @ts-ignore
        import("https://elements.colorjs.io/src/color-swatch/color-swatch.js")
            .then(() => {
                // Success
            })
            .catch(e => {
                console.error("Failed to load color-swatch web component. Ensure you have internet access and CORS is allowed.", e);
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

    // Sync complex properties
    useEffect(() => {
        if (!elementRef.current) return;
        const el = elementRef.current as any;

        // Sync properties directly
        if (value !== undefined) el.value = value;
        if (label !== undefined) el.label = label;
        
        // Handle size attribute - only 'large' is officially supported by the WC
        if (size === 'large') {
             el.setAttribute('size', 'large');
        } else {
             el.removeAttribute('size');
        }

        if (gamuts !== undefined) el.gamuts = gamuts;
        el.info = info || []; // Ensure info is always a valid array to prevent potential internal errors

    }, [value, label, size, gamuts, info]);

    return (
        <color-swatch 
            ref={elementRef} 
            className={className}
        >
            {children}
        </color-swatch>
    );
});

ColorSwatch.displayName = "ColorSwatch";
