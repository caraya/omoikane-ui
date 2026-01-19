import React, { useState, useRef, useEffect, ReactNode, Children, isValidElement, KeyboardEvent } from 'react';
import { CaretDownIcon, CheckIcon } from '@phosphor-icons/react';
import { cn } from '../utils/cn';

// --- Types ---

export interface OptionItemProps extends Omit<React.ComponentPropsWithoutRef<'li'>, 'onClick'> {
  label: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export interface ActionItemProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'> {
  label: string;
  disabled?: boolean;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface SingleSelectProps {
  placeholder?: string;
  onChange: (value: string) => void;
  selectedValue?: string | null;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
  'aria-label'?: string;
}

export interface ActionMenuProps {
  menuText: string;
  onChange?: (selectedItems: string[]) => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  align?: 'left' | 'right';
  'aria-label'?: string;
}

// --- Components ---

/**
 * OptionItem: A selectable option component. 
 * This component is primarily used as a configuration holder for SingleSelect.
 */
export const OptionItem: React.FC<OptionItemProps> = (props) => {
  return <li className="hidden" aria-hidden="true" {...props}>{props.label}</li>;
};

/**
 * ActionItem: A clickable action component.
 * This component is primarily used as a configuration holder for ActionMenu.
 */
export const ActionItem: React.FC<ActionItemProps> = (props) => {
  return <button className="hidden" aria-hidden="true" {...props} type="button">{props.label}</button>;
};

// --- Container Components ---

function useClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/**
 * SingleSelect: A dropdown for selecting a single value from a list of options.
 */
export const SingleSelect: React.FC<SingleSelectProps> = ({
  placeholder = "Select...",
  onChange,
  selectedValue,
  disabled,
  className,
  children,
  id,
  'aria-label': ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  
  // Filter children to only React Elements (OptionItem)
  const options = Children.toArray(children).filter(child => isValidElement(child)) as React.ReactElement<OptionItemProps>[];

  useClickOutside(containerRef, () => setIsOpen(false));

  const handleSelect = (value: string) => {
    if (!disabled) {
      onChange(value);
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
        // Focus first selected or first option
        const selectedIndex = options.findIndex(opt => opt.props.value === selectedValue);
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < options.length) {
          const option = options[activeIndex];
          if (!option.props.disabled) {
            handleSelect(option.props.value);
          }
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  // Find selected label
  let selectedLabel = placeholder;
  const selectedOption = options.find(opt => opt.props.value === selectedValue);
  if (selectedOption) {
    selectedLabel = selectedOption.props.label;
  }

  const generatedId = React.useId();
  const selectId = id || generatedId;
  const listboxId = `${selectId}-listbox`;
  const activeDescendantId = isOpen && activeIndex >= 0 ? `${selectId}-option-${activeIndex}` : undefined;

  return (
    <div className={cn("relative inline-block w-full min-w-[200px]", className)} ref={containerRef}>
      <button
        type="button"
        id={selectId}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        role="combobox"
        aria-haspopup="listbox" 
        aria-controls={isOpen ? listboxId : undefined}
        aria-expanded={isOpen}
        aria-activedescendant={activeDescendantId}
        aria-label={ariaLabel || placeholder}
        className={cn(
          "flex items-center justify-between w-full h-10 px-3 py-2 bg-white border rounded transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500",
          disabled 
            ? "border-gray-200 bg-gray-50 cursor-not-allowed text-gray-400" 
            : isOpen 
              ? "border-blue-600 ring-1 ring-blue-600" 
              : "border-gray-300 hover:border-gray-400",
        )}
      >
        <span className={cn("truncate block text-sm", !selectedValue && "text-gray-500")}>
          {selectedLabel}
        </span>
        <CaretDownIcon className={cn("ml-2 w-4 h-4 transition-transform text-gray-500 flex-shrink-0", isOpen && "rotate-180")} />
      </button>

      {isOpen && options.length > 0 && (
        <ul 
            role="listbox"
            id={listboxId}
            aria-labelledby={selectId}
            tabIndex={-1}
            className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-y-auto py-1 focus:outline-none list-none m-0 px-0"
        >
          {options.map((child, index) => {
            const isSelected = child.props.value === selectedValue;
            const itemProps = child.props;
            return (
              <li
                key={itemProps.value}
                role="option"
                id={`${selectId}-option-${index}`}
                aria-selected={isSelected}
                aria-disabled={itemProps.disabled}
                onClick={() => {
                  if (!itemProps.disabled) {
                    handleSelect(itemProps.value);
                    itemProps.onClick?.();
                  }
                }}
                className={cn(
                  "flex items-center justify-between px-3 py-2 cursor-pointer select-none transition-colors",
                  itemProps.disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-900",
                  index === activeIndex && !itemProps.disabled ? "bg-blue-50" : "hover:bg-gray-100",
                  isSelected && "bg-blue-50 text-blue-700"
                )}
              >
                 <span className={cn("truncate block text-sm", isSelected && "font-medium")}>{itemProps.label}</span>
                 {isSelected && <CheckIcon className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" weight="bold" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

/**
 * ActionMenu: A dropdown menu for triggering actions.
 */
export const ActionMenu: React.FC<ActionMenuProps> = ({
  menuText,
  children,
  disabled,
  className,
  align = 'left',
  'aria-label': ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const generatedId = React.useId();
  const menuId = generatedId; 

  // Filter children to only React Elements (ActionItem)
  const items = Children.toArray(children).filter(child => isValidElement(child)) as React.ReactElement<ActionItemProps>[];

  useClickOutside(containerRef, () => setIsOpen(false));

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
        setActiveIndex(0);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < items.length) {
            const item = items[activeIndex];
            if (!item.props.disabled) {
                if (item.props.href) {
                     window.location.href = item.props.href;
                } else if (item.props.onClick) {
                    item.props.onClick();
                    setIsOpen(false);
                }
            }
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'Tab': 
        setIsOpen(false);
        break;
    }
  };

  const triggerId = `${menuId}-trigger`;

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="true" // 'menu' is also valid, but 'true' is standard
        aria-expanded={isOpen}
        aria-label={ariaLabel || menuText}
        id={triggerId}
        aria-controls={isOpen ? `${menuId}-menu` : undefined}
        className={cn(
          "flex items-center font-bold text-blue-600 hover:text-blue-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:underline"
        )}
      >
        <span className="truncate">{menuText}</span>
        <CaretDownIcon className={cn("ml-1 w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && items.length > 0 && (
        <div 
            role="menu"
            id={`${menuId}-menu`}
            aria-labelledby={triggerId}
            className={cn(
                "absolute z-50 w-56 mt-2 bg-white border border-gray-200 rounded shadow-lg overflow-hidden py-1",
                align === 'right' ? "right-0" : "left-0"
            )}
        >
          {items.map((child, index) => {
             const props = child.props;
             const isFocused = index === activeIndex;
             
             const commonClasses = cn(
               "flex w-full text-left px-4 py-2 select-none transition-colors text-sm",
               props.disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-900",
               (isFocused || props.active) && !props.disabled ? "bg-gray-100" : "hover:bg-gray-100",
             );

             // Direct children of role="menu" must have role="menuitem"
             if (props.href) {
                 return (
                     <a
                        key={index}
                        href={props.disabled ? undefined : props.href}
                        role="menuitem"
                        aria-disabled={props.disabled}
                        tabIndex={-1} // Controlled by keyboard navigation of parent usually, or managed focus
                        className={commonClasses}
                        onClick={(e) => {
                            if (props.disabled) {
                                e.preventDefault();
                                return;
                            }
                            props.onClick?.();
                        }}
                     >
                        <span className="truncate block font-medium">{props.label}</span>
                     </a>
                 )
             }

             return (
                 <button
                    key={index}
                    type="button"
                    role="menuitem"
                    disabled={props.disabled} 
                    aria-disabled={props.disabled}
                    tabIndex={-1}
                    className={commonClasses}
                    onClick={() => {
                        if (!props.disabled) {
                           props.onClick?.();
                           setIsOpen(false);
                        }
                    }}
                 >
                    <span className="truncate block font-medium">{props.label}</span>
                 </button>
             );
          })}
        </div>
      )}
    </div>
  );
};
