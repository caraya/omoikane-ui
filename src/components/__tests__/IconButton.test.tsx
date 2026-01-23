import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import IconButton from '../IconButton';

describe('IconButton', () => {
  it('renders and calls onClick', () => {
    const onClick = vi.fn();
    render(<IconButton onClick={onClick}>X</IconButton>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });
});
