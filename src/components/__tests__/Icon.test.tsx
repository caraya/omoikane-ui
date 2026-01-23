import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon } from '../Icon';

describe('Icon', () => {
  it('renders svg when given a path string', () => {
    const path = 'M10 10 H 90 V 90 H 10 Z';
    render(<Icon icon={path} />);
    const svg = screen.getByRole('img', { hidden: true }) || document.querySelector('svg');
    expect(svg).toBeTruthy();
  });
});
