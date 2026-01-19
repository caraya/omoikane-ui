import React, { useState, useRef, useEffect } from 'react';
import { CalendarBlankIcon, CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { cn } from '../utils/cn';
import { Button } from './Button';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  locale?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  locale = 'en-US',
  placeholder = 'Select date',
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync viewDate with value when it changes, but only if open to keep context? 
  // Actually usually fine to sync or just initialize. 
  // If value is undefined, we start at today.
  
  useEffect(() => {
    if (value) {
      setViewDate(value);
    }
  }, [value]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    // 0 = Sunday
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    onChange?.(newDate);
    setIsOpen(false);
  };

  const renderCalendar = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    // Weekday headers derived from locale
    // We assume standard 7 day week starting Sunday for simplicity in grid logic,
    // but labels should match locale.
    // NOTE: A more robust implementation would handle 'week starts on Monday' locales.
    // For now, we will stick to a fixed grid (Sun-Sat) but format labels.
    const weekdays = [];
    const d = new Date(2023, 0, 1); // Jan 1 2023 was a Sunday
    for (let i = 0; i < 7; i++) {
        weekdays.push(
            new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(d)
        );
        d.setDate(d.getDate() + 1);
    }

    const monthName = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(viewDate);

    const days = [];
    // Padding for empty start days
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDayDate = new Date(year, month, day);
      const isSelected = value && 
        currentDayDate.getDate() === value.getDate() &&
        currentDayDate.getMonth() === value.getMonth() &&
        currentDayDate.getFullYear() === value.getFullYear();
      
      const isToday = new Date().toDateString() === currentDayDate.toDateString();

      days.push(
        <button
          key={day}
          onClick={(e) => {
             e.preventDefault();
             handleDayClick(day);
          }}
          type="button"
          className={cn(
            "h-8 w-8 text-sm rounded-full flex items-center justify-center transition-colors",
            isSelected 
              ? "bg-blue-600 text-white hover:bg-blue-700 font-semibold" 
              : isToday
                ? "text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
          )}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="p-4 bg-white rounded-lg shadow-xl border border-gray-200 w-72">
        <div className="flex items-center justify-between mb-4">
          <button 
            type="button"
            onClick={handlePrevMonth}
            className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
            aria-label="Previous month"
          >
            <CaretLeftIcon size={16} weight="bold" />
          </button>
          <div className="text-sm font-semibold text-gray-900">
            {monthName}
          </div>
          <button 
            type="button"
            onClick={handleNextMonth}
            className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
            aria-label="Next month"
          >
            <CaretRightIcon size={16} weight="bold" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {weekdays.map((day, idx) => (
            <div key={idx} className="text-xs font-medium text-gray-400 h-8 flex items-center justify-center">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1 place-items-center">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <Button
        variant="secondary"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "w-full justify-between font-normal min-w-[200px]",
          !value && "text-gray-500"
        )}
        type="button"
      >
        <span className="truncate">
            {value ? formatDate(value) : placeholder}
        </span>
        <CalendarBlankIcon size={18} className="ml-2 text-gray-500 shrink-0" />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-100">
          {renderCalendar()}
        </div>
      )}
    </div>
  );
};
