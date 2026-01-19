import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

export type SearchFieldSize = 'sm' | 'md' | 'lg';

interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: SearchFieldSize;
  clearable?: boolean;
  'aria-label'?: string;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = 'Search',
  size = 'md',
  clearable = true,
  className,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const [internal, setInternal] = useState<string>(defaultValue ?? '');
  const isControlled = typeof controlledValue !== 'undefined';
  const value = isControlled ? (controlledValue as string) : internal;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isControlled && defaultValue) setInternal(defaultValue);
  }, [defaultValue, isControlled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  const handleClear = () => {
    if (!isControlled) setInternal('');
    onChange?.('');
    inputRef.current?.focus();
  };

  const sizeMap: Record<SearchFieldSize, string> = {
    sm: 'text-sm h-8 px-2 gap-2',
    md: 'text-sm h-10 px-3 gap-3',
    lg: 'text-base h-12 px-4 gap-3'
  };

  return (
    <div className={cn('inline-flex items-center w-full max-w-xs rounded-md border border-gray-200 bg-white', sizeMap[size], className)}>
      <div className="flex items-center pl-2 text-gray-500" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
        </svg>
      </div>

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={ariaLabel ?? placeholder}
        className="flex-1 bg-transparent outline-none"
        {...rest}
      />

      {clearable && value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={handleClear}
          className="pr-2 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchField;
