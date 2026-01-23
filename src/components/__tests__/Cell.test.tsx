import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DetailCell } from '../Cell';

describe('Cell', () => {
  it('renders title and subtitle', () => {
    render(<DetailCell title="T" subtitle1="S" />);
    expect(screen.getByText('T')).toBeTruthy();
    expect(screen.getByText('S')).toBeTruthy();
  });
});
