import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Toast from '../Toast';

describe('Toast', () => {
  it('renders when visible and hides when not', () => {
    const { rerender } = render(<Toast visible={true}>Hello</Toast>);
    expect(screen.getByRole('status')).toHaveTextContent('Hello');
    rerender(<Toast visible={false}>Hello</Toast>);
    expect(screen.queryByRole('status')).toBeNull();
  });
});
