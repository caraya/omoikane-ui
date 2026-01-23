import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Modal from '../Modal';

describe('Modal', () => {
  it('renders children when open', () => {
    render(<Modal open={true}><div>Open</div></Modal>);
    expect(screen.getByText('Open')).toBeTruthy();
  });
});
