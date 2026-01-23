import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormWizard from '../molecules/FormWizard';

describe('FormWizard snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<FormWizard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
