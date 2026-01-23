import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ColorPicker from '../ColorPicker';

describe('ColorPicker', () => {
  it('renders without crashing and shows input', () => {
    render(<ColorPicker />);
    // ColorPicker may render an input of type color or similar
    const input = screen.queryByRole('textbox') || document.querySelector('input[type="color"]');
    expect(input).toBeTruthy();
  });
});
