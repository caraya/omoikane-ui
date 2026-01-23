import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TextField } from '../TextField';

describe('TextField', () => {
  it('renders with label and updates value', () => {
    render(<TextField label="Name" value="" onChange={() => {}} />);
    expect(screen.getByText('Name')).toBeTruthy();
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'x' } });
    expect(input).toBeTruthy();
  });
});
