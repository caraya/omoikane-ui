import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Label, Caption } from '../Typography';

describe('Typography', () => {
  it('renders Label and Caption components', () => {
    render(
      <div>
        <Label>Title</Label>
        <Caption>Note</Caption>
      </div>
    );
    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.getByText('Note')).toBeTruthy();
  });
});
