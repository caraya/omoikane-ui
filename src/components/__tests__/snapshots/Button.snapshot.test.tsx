import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../Button';

describe('Button snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Button variant="primary">Save</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
