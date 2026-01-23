import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Image from '../Image';

describe('Image', () => {
  it('renders an img with provided src and alt', () => {
    render(<Image src="/logo.png" alt="Logo" />);
    expect(screen.getByAltText('Logo')).toBeTruthy();
  });
});
