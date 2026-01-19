import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Switch from '../Switch';

describe('Switch', () => {
  it('toggles uncontrolled on click', () => {
    const { getByRole } = render(<Switch defaultChecked={false} />);
    const sw = getByRole('switch') as HTMLInputElement;
    expect(sw.checked).toBe(false);
    fireEvent.click(sw);
    expect(sw.checked).toBe(true);
  });

  it('respects controlled checked prop', () => {
    const { getByRole, rerender } = render(<Switch checked={false} onChange={() => {}} />);
    const sw = getByRole('switch') as HTMLInputElement;
    expect(sw.checked).toBe(false);
    rerender(<Switch checked={true} onChange={() => {}} />);
    expect(sw.checked).toBe(true);
  });

  it('toggles with keyboard (space)', () => {
    const handle = vi.fn();
    const { getByRole } = render(<Switch defaultChecked={false} onChange={handle} />);
    const sw = getByRole('switch') as HTMLInputElement;
    sw.focus();
    fireEvent.keyDown(sw, { key: ' ', code: 'Space' });
    fireEvent.keyUp(sw, { key: ' ', code: 'Space' });
    // Some browsers toggle on keyup; ensure onChange called
    expect(handle).toHaveBeenCalled();
  });
});
