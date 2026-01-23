import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LabeledField } from '../LabeledField';

describe('LabeledField', () => {
  it('renders label and description and links label to field', () => {
    render(
      <LabeledField field={<input />} label="Email" description="We will not share" />
    );
    expect(screen.getByText('Email')).toBeTruthy();
    expect(screen.getByText('We will not share')).toBeTruthy();
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('id')).toBeTruthy();
  });
});
