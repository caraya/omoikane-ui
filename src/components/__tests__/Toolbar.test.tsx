import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Toolbar from '../Toolbar';

describe('Toolbar', () => {
  it('renders children and layout', () => {
    render(
      <Toolbar>
        <div>Left</div>
        <div>Right</div>
      </Toolbar>
    );
    expect(screen.getByText('Left')).toBeTruthy();
    expect(screen.getByText('Right')).toBeTruthy();
  });
});
