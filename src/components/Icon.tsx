import React, { ComponentType } from 'react';
import { cn } from '../utils/cn';

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

const sizeMap: Record<IconSize, number> = {
    small: 16,
    medium: 24,
    large: 48,
    xlarge: 96
};

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * The icon to render. Can be:
     * 1. A generic React Component (like @phosphor-icons/react icons)
     * 2. An SVG path string
     */
    icon: ComponentType<any> | string;
    
    /**
     * The color of the icon.
     * Defaults to 'currentColor'.
     */
    color?: string;

    /**
     * The background color of the icon container.
     * Defaults to 'transparent'.
     */
    backgroundColor?: string;

    /**
     * The size of the icon.
     * - small: 16px
     * - medium: 24px
     * - large: 48px
     * - xlarge: 96px
     */
    size?: IconSize;
}

/**
 * An Icon component modeled after wonder-blocks-icon.
 * Supports Phosphor Icons (passed as components) or raw SVG paths.
 * Allows customizing color and background color.
 */
export const Icon = ({ 
    icon, 
    color = 'currentColor', 
    backgroundColor,
    size = 'small', 
    className,
    style,
    ...props 
}: IconProps) => {
    const pixelSize = sizeMap[size];

    // Common container styles if background is present
    // We use a span or div wrapper to handle background and sizing constraints
    
    const containerStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: pixelSize, // If background is set, we might want the box to be this size?
        height: pixelSize,
        backgroundColor: backgroundColor,
        color: color,
        ...style
    };

    // If icon is a component (e.g. Phosphor Icon)
    if (typeof icon === 'function' || typeof icon === 'object') {
        const IconComponent = icon as ComponentType<any>;
        return (
            <span className={cn("inline-flex items-center justify-center shrink-0", className)} style={containerStyle} {...props}>
                {/* We pass the size and color to the component if it accepts them, 
                    but rely on CSS 'color' for fill usually. 
                    Phosphor icons accept 'size' and 'color' props. */}
                <IconComponent 
                    size={pixelSize} 
                    color={color} 
                    weight="regular" // Default weight, could be exposted
                    style={{ display: 'block' }}
                />
            </span>
        );
    }

    // If icon is a string (SVG Path)
    if (typeof icon === 'string') {
        return (
            <span className={cn("inline-flex items-center justify-center shrink-0", className)} style={containerStyle} {...props}>
                <svg 
                    width={pixelSize} 
                    height={pixelSize} 
                    viewBox="0 0 24 24" // Assuming standard 24x24 viewBox for paths
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                     <path d={icon} fill={color === 'currentColor' ? 'currentColor' : color} />
                </svg>
            </span>
        );
    }

    return null;
};
