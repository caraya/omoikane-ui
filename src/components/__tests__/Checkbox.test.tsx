import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  it('toggles checked state when clicked', () => {
    render(<Checkbox>Agree</Checkbox>);
    const cb = screen.getByLabelText('Agree') as HTMLInputElement;
    expect(cb.checked).toBe(false);
    fireEvent.click(cb);
    expect(cb.checked).toBe(true);
  });
});
