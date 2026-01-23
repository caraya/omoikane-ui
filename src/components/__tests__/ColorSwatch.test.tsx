import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ColorSwatch } from '../ColorSwatch';

describe('ColorSwatch', () => {
  it('renders the webcomponent element wrapper', () => {
    const { container } = render(<ColorSwatch value="#fff" label="White" />);
    expect(container.querySelector('color-swatch')).toBeTruthy();
  });
});
