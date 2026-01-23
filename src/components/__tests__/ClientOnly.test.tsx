import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ClientOnly from '../ClientOnly';

describe('ClientOnly', () => {
  it('renders children', () => {
    render(<ClientOnly><div>Child</div></ClientOnly>);
    expect(screen.getByText('Child')).toBeTruthy();
  });
});
