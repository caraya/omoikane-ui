import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '../Card';

describe('Card', () => {
  it('renders children inside card container', () => {
    render(<Card><div>Inner</div></Card>);
    expect(screen.getByText('Inner')).toBeTruthy();
  });
});
