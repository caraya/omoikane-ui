import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pill from '../Pill';

describe('Pill', () => {
  it('renders content and has status role', () => {
    render(<Pill>3</Pill>);
    const el = screen.getByRole('status');
    expect(el).toHaveTextContent('3');
  });
});
