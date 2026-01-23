import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ColorScale from '../ColorScale';

describe('ColorScale', () => {
  it('renders scale with given list of colors', () => {
    render(<ColorScale colors={["#fff", "#000"]} />);
    expect(screen.getByRole('list')).toBeTruthy();
  });
});
