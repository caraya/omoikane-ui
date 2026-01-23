import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DateSelect from '../DateSelect';

describe('DateSelect', () => {
  it('renders selects for month/day/year', () => {
    render(<DateSelect />);
    expect(screen.getByLabelText('Select Month')).toBeTruthy();
    expect(screen.getByLabelText('Select Day')).toBeTruthy();
    expect(screen.getByLabelText('Select Year')).toBeTruthy();
  });
});
