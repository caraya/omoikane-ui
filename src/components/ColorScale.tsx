import React, { useEffect, useRef, forwardRef } from 'react';

// Declare standard JSX elements for the web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-scale': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        space?: string;
        steps?: number;
      };
    }
  }
}

export interface ColorScaleProps {
    /**
     * The colors to display. 
     * Can be an array of color strings (e.g. `["red", "blue"]`) 
     * or an object mapping labels to colors (e.g. `{"Start": "red", "End": "blue"}`).
     */
    colors: string[] | Record<string, string>;
    /**
     * The interpolation color space (e.g., "oklch", "srgb", "p3").
     * Default: "oklch"
     */
    space?: string;
    /**
     * Number of intermediate steps to generate between each provided color.
     * Default: 0 (just shows provided colors)
     */
    steps?: number;
    className?: string;
}

/**
 * ColorScale: A React wrapper around the colorjs.io web component.
 * Displays a series of color swatches, optionally interpolating between them.
 * 
 * Source: https://elements.colorjs.io/src/color-scale/
 */
export const ColorScale = forwardRef<HTMLElement, ColorScaleProps>(({ colors, space, steps, className }, ref) => {
    const elementRef = useRef<HTMLElement>(null);
    const loadedRef = useRef(false);

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;
        
        // Dynamically load the web component source
        // @ts-ignore
        import("https://elements.colorjs.io/src/color-scale/color-scale.js")
            .then(() => {
                // Success
            })
            .catch(e => {
                console.error("Failed to load color-scale web component. Ensure you have internet access and CORS is allowed.", e);
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

    // Sync properties
    useEffect(() => {
        if (!elementRef.current) return;
        
        const el = elementRef.current as any;
        
        // Set configuration properties first to ensure they are available 
        // when 'colors' triggers the computation/render.
        if (space !== undefined) el.space = space;
        if (steps !== undefined) el.steps = steps;
        
        // Set data last
        el.colors = colors;
    }, [colors, space, steps]);

    return (
        <color-scale 
            ref={elementRef} 
            className={className}
        >
        </color-scale>
    );
});

ColorScale.displayName = "ColorScale";
