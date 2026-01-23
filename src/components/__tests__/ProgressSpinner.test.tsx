import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProgressSpinner from '../ProgressSpinner';

describe('ProgressSpinner', () => {
  it('renders the spinner element', () => {
    render(<ProgressSpinner />);
    expect(screen.getByRole('status')).toBeTruthy();
  });
});
