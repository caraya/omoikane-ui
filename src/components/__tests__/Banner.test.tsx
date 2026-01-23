import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Banner from '../Banner';

describe('Banner', () => {
  it('renders banner text', () => {
    render(<Banner>Notice</Banner>);
    expect(screen.getByText('Notice')).toBeTruthy();
  });
});
