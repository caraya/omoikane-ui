import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DatePicker from '../DatePicker';

describe('DatePicker', () => {
  it('renders input and allows typing a date', () => {
    render(<DatePicker />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '2026-01-01' } });
    expect((input as HTMLInputElement).value).toBe('2026-01-01');
  });
});
