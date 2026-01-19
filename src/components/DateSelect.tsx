import React, { useEffect, useState, useMemo } from 'react';
import { cn } from '../utils/cn';
import { CaretDownIcon } from '@phosphor-icons/react';

export interface DateSelectProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minYear?: number;
  maxYear?: number;
  includeTime?: boolean;
  use24HourClock?: boolean;
  className?: string;
  locale?: string;
  disabled?: boolean;
}

export const DateSelect: React.FC<DateSelectProps> = ({
  value,
  onChange,
  minYear = 1900,
  maxYear = new Date().getFullYear() + 10,
  includeTime = false,
  use24HourClock = false,
  className,
  locale = 'en-US',
  disabled = false,
}) => {
  const dateValue = value || new Date();
  
  const [year, setYear] = useState(dateValue.getFullYear());
  const [month, setMonth] = useState(dateValue.getMonth()); // 0-11
  const [day, setDay] = useState(dateValue.getDate());
  const [hour, setHour] = useState(dateValue.getHours());
  const [minute, setMinute] = useState(dateValue.getMinutes());

  useEffect(() => {
    if (value) {
      setYear(value.getFullYear());
      setMonth(value.getMonth());
      setDay(value.getDate());
      setHour(value.getHours());
      setMinute(value.getMinutes());
    }
  }, [value]);

  const handleChange = (updates: { year?: number; month?: number; day?: number; hour?: number; minute?: number }) => {
    const newYear = updates.year ?? year;
    const newMonth = updates.month ?? month;
    let newDay = updates.day ?? day;
    const newHour = updates.hour ?? hour;
    const newMinute = updates.minute ?? minute;

    // Adjust day if it exceeds the new month's max days
    const daysInNewMonth = new Date(newYear, newMonth + 1, 0).getDate();
    if (newDay > daysInNewMonth) {
      newDay = daysInNewMonth;
    }

    const newDate = new Date(newYear, newMonth, newDay, newHour, newMinute);
    
    // If uncontrolled, update state now
    if (!value) {
        setYear(newYear);
        setMonth(newMonth);
        setDay(newDay);
        setHour(newHour);
        setMinute(newMinute);
    }
    
    onChange?.(newDate);
  };

  // Generate ranges
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i); // Descending
  const months = Array.from({ length: 12 }, (_, i) => i);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Time ranges
  const hours24 = Array.from({ length: 24 }, (_, i) => i);
  const hours12 = Array.from({ length: 12 }, (_, i) => i === 0 ? 12 : i); // 12, 1, 2... 11
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  // Derived 12h values
  const isPM = hour >= 12;
  const displayHour12 = hour % 12 === 0 ? 12 : hour % 12;

  const handleTime12Change = (new12Hour: number, newIsPM: boolean) => {
    let newHour24 = new12Hour === 12 ? 0 : new12Hour;
    if (newIsPM) {
        newHour24 = newHour24 === 0 ? 12 : newHour24 + 12;
    } else if (new12Hour === 12) {
        newHour24 = 0; // 12 AM
    }
    
    if (newIsPM && new12Hour !== 12) newHour24 = new12Hour + 12;
    if (!newIsPM && new12Hour === 12) newHour24 = 0;
    if (newIsPM && new12Hour === 12) newHour24 = 12;
    if (!newIsPM && new12Hour !== 12) newHour24 = new12Hour;

    handleChange({ hour: newHour24 });
  };

  const selectClass = cn(
    "block w-full rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 appearance-none bg-white",
    disabled && "bg-gray-100 text-gray-500 cursor-not-allowed"
  );

  const renderSelectWrapper = (children: React.ReactNode) => (
      <div className="relative inline-block w-full">
          {children}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <CaretDownIcon size={12} weight="fill" />
          </div>
      </div>
  );

  // Determine Order based on Locale
  const datePartsOrder = useMemo(() => {
    try {
        const parts = new Intl.DateTimeFormat(locale).formatToParts(new Date());
        return parts.map(p => p.type).filter(t => ['day', 'month', 'year'].includes(t));
    } catch {
        return ['month', 'day', 'year'];
    }
  }, [locale]);
  
  // Deduplicate parts just in case
  const uniqueOrder = Array.from(new Set(datePartsOrder));

  // Render Functions
  const renderMonth = () => (
    <div key="month" className="w-32">
        {renderSelectWrapper(
            <select
                value={month}
                onChange={(e) => handleChange({ month: parseInt(e.target.value) })}
                disabled={disabled}
                className={selectClass}
                aria-label="Select Month"
            >
                {months.map((m) => (
                <option key={m} value={m}>
                    {new Intl.DateTimeFormat(locale, { month: 'long' }).format(new Date(2000, m, 1))}
                </option>
                ))}
            </select>
        )}
      </div>
  );

  const renderDay = () => (
      <div key="day" className="w-20">
        {renderSelectWrapper(
            <select
                value={day}
                onChange={(e) => handleChange({ day: parseInt(e.target.value) })}
                disabled={disabled}
                className={selectClass}
                aria-label="Select Day"
            >
                {days.map((d) => (
                <option key={d} value={d}>
                    {d}
                </option>
                ))}
            </select>
        )}
      </div>
  );

  const renderYear = () => (
      <div key="year" className="w-24">
        {renderSelectWrapper(
            <select
                value={year}
                onChange={(e) => handleChange({ year: parseInt(e.target.value) })}
                disabled={disabled}
                className={selectClass}
                aria-label="Select Year"
            >
                {years.map((y) => (
                <option key={y} value={y}>
                    {y}
                </option>
                ))}
            </select>
        )}
      </div>
  );

  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
      
      {/* Dynamic Date Parts */}
      {uniqueOrder.map(part => {
          if (part === 'month') return renderMonth();
          if (part === 'day') return renderDay();
          if (part === 'year') return renderYear();
          return null;
      })}
     
      {/* Fallback if something went wrong with order, ensures we show default if array is empty (unlikely) */}
      {uniqueOrder.length === 0 && (
          <>
            {renderMonth()}
            {renderDay()}
            {renderYear()}
          </>
      )}

      {includeTime && (
        <>
            <div className="w-px h-6 bg-gray-300 mx-1 hidden sm:block"></div>
            {/* Time */}
            {use24HourClock ? (
                 <div className="flex gap-1 items-center">
                    <div className="w-16">
                        {renderSelectWrapper(
                            <select
                                value={hour}
                                onChange={(e) => handleChange({ hour: parseInt(e.target.value) })}
                                disabled={disabled}
                                className={selectClass}
                                aria-label="Select Hour"
                            >
                                {hours24.map((h) => (
                                    <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>
                                ))}
                            </select>
                        )}
                    </div>
                    <span>:</span>
                    <div className="w-16">
                        {renderSelectWrapper(
                            <select
                                value={minute}
                                onChange={(e) => handleChange({ minute: parseInt(e.target.value) })}
                                disabled={disabled}
                                className={selectClass}
                                aria-label="Select Minute"
                            >
                                {minutes.map((m) => (
                                    <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
                                ))}
                            </select>
                        )}
                    </div>
                 </div>
            ) : (
                <div className="flex gap-1 items-center">
                    <div className="w-16">
                        {renderSelectWrapper(
                             <select
                                value={displayHour12}
                                onChange={(e) => handleTime12Change(parseInt(e.target.value), isPM)}
                                disabled={disabled}
                                className={selectClass}
                                aria-label="Select Hour"
                             >
                                 {hours12.map((h) => (
                                     <option key={h} value={h}>{h}</option>
                                 ))}
                             </select>
                        )}
                    </div>
                    <span>:</span>
                    <div className="w-16">
                         {renderSelectWrapper(
                             <select
                                value={minute}
                                onChange={(e) => handleChange({ minute: parseInt(e.target.value) })}
                                disabled={disabled}
                                className={selectClass}
                                aria-label="Select Minute"
                             >
                                  {minutes.map((m) => (
                                      <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
                                  ))}
                             </select>
                         )}
                    </div>
                    <div className="w-20">
                         {renderSelectWrapper(
                             <select
                                value={isPM ? "PM" : "AM"}
                                onChange={(e) => handleTime12Change(displayHour12, e.target.value === "PM")}
                                disabled={disabled}
                                className={selectClass}
                                aria-label="Select AM/PM"
                             >
                                 <option value="AM">AM</option>
                                 <option value="PM">PM</option>
                             </select>
                         )}
                    </div>
                </div>
            )}
        </>
      )}
    </div>
  );
};
