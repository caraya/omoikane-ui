import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import View from '../View';

describe('View', () => {
  it('renders children container', () => {
    render(<View><span>Inside</span></View>);
    expect(screen.getByText('Inside')).toBeTruthy();
  });
});
