import React, { ComponentType, forwardRef } from 'react';
import { Icon, IconSize } from './Icon';
import { cn } from '../utils/cn';

export type IconButtonSize = 'xsmall' | 'small' | 'medium' | 'large';
export type IconButtonKind = 'primary' | 'secondary' | 'tertiary';
export type IconButtonColor = 'default' | 'destructive';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The icon to render.
     */
    icon: ComponentType<any> | string;

    /**
     * Recenters the standard icon.
     * - xsmall: 24px button, 16px icon
     * - small: 32px button, 24px icon
     * - medium: 40px button, 24px icon
     * - large: 48px button, 24px icon
     */
    size?: IconButtonSize;

    /**
     * The visual style of the button.
     * - primary: Minimal, used for main actions.
     * - secondary: Outlined.
     * - tertiary: Ghost, no border.
     */
    kind?: IconButtonKind;

    /**
     * The semantic color of the button.
     */
    color?: IconButtonColor;
    
    /**
     * URL to navigate to. If provided, renders as an anchor.
     */
    href?: string;
    
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
}

const buttonSizeMap: Record<IconButtonSize, string> = {
    xsmall: 'w-6 h-6 rounded',
    small: 'w-8 h-8 rounded',
    medium: 'w-10 h-10 rounded',
    large: 'w-12 h-12 rounded',
};

// Maps button size to the inner Icon component size
const iconSizeMap: Record<IconButtonSize, IconSize> = {
    xsmall: 'small', // 16px
    small: 'medium', // 24px
    medium: 'medium', // 24px
    large: 'medium', // 24px
};

/**
 * An IconButton component modeled after wonder-blocks-icon-button.
 * Provides a clickable wrapper around an Icon with standard interaction states.
 */
export const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(({ 
    icon, 
    size = 'medium', 
    kind = 'primary', 
    color = 'default',
    disabled = false,
    className,
    onClick,
    href,
    type = 'button',
    ...props 
}, ref) => {
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1";
    
    // Style configurations based on Kind and Color
    // We handle the text color (icon color) via these classes too.
    
    const getVariantStyles = () => {
        const isDestructive = color === 'destructive';
        
        const textColor = isDestructive ? 'text-red-700' : 'text-[#1865f2]'; // WB Blue
        const hoverBg = isDestructive ? 'hover:bg-red-100' : 'hover:bg-blue-50';
        const borderColor = isDestructive ? 'border-red-300' : 'border-gray-300';
        const hoverBorder = isDestructive ? 'hover:border-red-700' : 'hover:border-[#1865f2]';
        
        switch (kind) {
            case 'primary':
                // Ghost-like default, ring on hover? 
                // WB Primary: "No background... Hover: Outline appears"
                return cn(
                    textColor,
                    "bg-transparent",
                    !disabled && hoverBg,
                    // Primary usually has no border by default, but interactions add one in WB??
                    // Let's stick to a cleaner standard: Primary = Ghost with background hover
                    // Actually WB Primary is "Ghost".
                );
            case 'secondary':
                 // Outlined
                 return cn(
                     textColor,
                     "bg-transparent border",
                     borderColor,
                     !disabled && hoverBg,
                     !disabled && hoverBorder
                 );
            case 'tertiary':
                // Ghost (similar to primary in some systems, but WB distinguishes)
                // Let's implement as no-border standard ghost
                return cn(
                    textColor,
                    "bg-transparent",
                    !disabled && hoverBg
                );
            default:
                return "";
        }
    };

    const styles = cn(
        baseStyles,
        buttonSizeMap[size],
        getVariantStyles(),
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
    );

    const iconSize = iconSizeMap[size];

    // Check if link
    if (href && !disabled) {
        return (
            <a 
                href={href} 
                className={styles} 
                ref={ref as any}
                onClick={onClick as any}
                {...(props as any)}
            >
                <Icon icon={icon} size={iconSize} color="currentColor" />
            </a>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={styles}
            onClick={onClick}
            ref={ref as any}
            {...props}
        >
            <Icon icon={icon} size={iconSize} color="currentColor" />
        </button>
    );
});

IconButton.displayName = 'IconButton';
