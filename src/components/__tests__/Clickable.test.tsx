import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Clickable from '../Clickable';

describe('Clickable', () => {
  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Clickable onClick={onClick}>Click</Clickable>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalled();
  });
});
