import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FormWizard from '../molecules/FormWizard';

describe('FormWizard', () => {
  it('shows validation errors in toast when steps are incomplete', () => {
    const { getByText, getByRole } = render(<FormWizard />);

    // On step 0, click Next without filling fields
    const next = getByText('Next');
    fireEvent.click(next);

    const status = getByRole('status');
    expect(status.textContent).toContain('Username is required');
    expect(status.textContent).toContain('A valid email is required');

    // Fill username only
    const inputs = document.querySelectorAll('input');
    fireEvent.input(inputs[0], { target: { value: 'alice' } });
    fireEvent.click(next);
    // Should still show email error
    expect(getByRole('status').textContent).toContain('A valid email is required');
  });

  it('completes wizard and calls onComplete with data', () => {
    const onComplete = vi.fn();
    const { getByText } = render(<FormWizard onComplete={onComplete} />);

    // Fill step 0
    const inputs = document.querySelectorAll('input');
    fireEvent.input(inputs[0], { target: { value: 'bob' } });
    fireEvent.input(inputs[1], { target: { value: 'bob@example.com' } });
    fireEvent.click(getByText('Next'));

    // Now on Profile step; fill bio and address
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    fireEvent.input(textarea, { target: { value: 'Hello world' } });
    const inputAfter = document.querySelectorAll('input');
    // address is the next input (still present)
    fireEvent.input(inputAfter[inputAfter.length - 1], { target: { value: '123 Road' } });

    fireEvent.click(getByText('Next'));

    // On Confirm step
    fireEvent.click(getByText('Submit'));

    expect(onComplete).toHaveBeenCalledOnce();
    expect(onComplete).toHaveBeenCalledWith({
      username: 'bob',
      email: 'bob@example.com',
      bio: 'Hello world',
      address: '123 Road',
    });
  });
});
