import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Radio from '../Radio';

describe('Radio', () => {
  it('renders radios and toggles checked state', () => {
    render(
      <div>
        <Radio name="group1" value="a">A</Radio>
        <Radio name="group1" value="b">B</Radio>
      </div>
    );

    const a = screen.getByLabelText('A') as HTMLInputElement;
    const b = screen.getByLabelText('B') as HTMLInputElement;
    fireEvent.click(b);
    expect(b.checked).toBe(true);
    expect(a.checked).toBe(false);
  });
});
