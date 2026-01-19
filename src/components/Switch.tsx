import React, { useId, useRef, useState, useEffect } from "react";

type Size = "sm" | "md" | "lg";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: Size;
  "aria-label"?: string;
  /** Background color when checked (CSS color string). Defaults to `var(--color-primary)`. */
  checkedColor?: string;
  /** Background color when unchecked (CSS color string). */
  uncheckedColor?: string;
  /** Thumb fill color. Defaults to white. */
  thumbColor?: string;
  /** Focus ring color when keyboard-focused. */
  focusRingColor?: string;
}

const SIZE_MAP: Record<Size, { trackClass: string; thumbPx: number; trackWidth: number; trackHeight: number }> = {
  sm: { trackClass: "w-9 h-5", thumbPx: 14, trackWidth: 36, trackHeight: 20 },
  md: { trackClass: "w-11 h-6", thumbPx: 18, trackWidth: 44, trackHeight: 24 },
  lg: { trackClass: "w-14 h-8", thumbPx: 26, trackWidth: 56, trackHeight: 32 },
};

export const Switch: React.FC<SwitchProps> = ({
  checked: checkedProp,
  defaultChecked,
  onChange,
  disabled = false,
  size = "md",
  id,
  className,
  checkedColor,
  uncheckedColor,
  thumbColor = 'white',
  focusRingColor,
  ...rest
}) => {
  const generatedId = useId();
  const inputId = id || `omoikane-switch-${generatedId}`;
  const isControlled = typeof checkedProp === "boolean";
  const [checked, setChecked] = useState<boolean>(
    isControlled ? (checkedProp as boolean) : Boolean(defaultChecked)
  );
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isControlled) setChecked(checkedProp as boolean);
  }, [checkedProp, isControlled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;
    if (!isControlled) setChecked(next);
    onChange?.(next);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const { trackClass, thumbPx, trackWidth, trackHeight } = SIZE_MAP[size];
  // Use a small fixed horizontal padding so the thumb rests near the edges
  const pad = Math.max(2, Math.round((trackHeight - thumbPx) / 2));
  const thumbLeft = checked ? trackWidth - thumbPx - pad : pad;

  const trackBg = checked ? (checkedColor || 'var(--color-primary)') : (uncheckedColor || 'rgba(15,23,42,0.12)');
  const focusRing = focusRingColor || 'rgba(37,99,235,0.18)';

  return (
    <label
      htmlFor={inputId}
      className={`inline-flex items-center gap-2 ${className || ""}`}
      style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <input
        {...rest}
        ref={ref}
        id={inputId}
        type="checkbox"
        role="switch"
        aria-checked={checked}
        checked={checked}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className="sr-only peer"
      />

      <div
        aria-hidden
        className={`${trackClass} rounded-full relative transition-colors duration-150 ease-in-out flex-shrink-0`}
        style={{ width: trackWidth, height: trackHeight, background: trackBg, boxShadow: isFocused ? `0 0 0 6px ${focusRing}` : undefined }}
      >
        <div
          className="absolute rounded-full shadow-sm"
          style={{ background: thumbColor, width: thumbPx, height: thumbPx, top: Math.round((trackHeight - thumbPx) / 2), left: thumbLeft, transition: 'left 120ms cubic-bezier(.2,.9,.2,1)' }}
        />
      </div>
    </label>
  );
};

export default Switch;
