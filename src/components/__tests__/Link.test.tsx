import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Link from '../Link';

describe('Link', () => {
  it('renders anchor with href', () => {
    render(<Link href="/about">About</Link>);
    const a = screen.getByText('About') as HTMLAnchorElement;
    expect(a.getAttribute('href')).toBe('/about');
  });
});
