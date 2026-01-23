import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as Story from '../../../stories/Molecules/FormWizard.stories';
import FormWizard from '../molecules/FormWizard';

describe('FormWizard (story-driven integration)', () => {
  it('shows validation toast when progressing with invalid data', () => {
    // Render using story args if provided
    const args = (Story as any).Playground?.args ?? {};
    render(<FormWizard {...args} />);

    const next = screen.getByText('Next');
    fireEvent.click(next);

    const status = screen.getByRole('status');
    expect(status.textContent).toContain('Username is required');
    expect(status.textContent).toContain('A valid email is required');
  });

  it('navigates through steps and shows confirmation on submit', () => {
    const args = (Story as any).Playground?.args ?? {};
    render(<FormWizard {...args} />);

    const inputs = screen.getAllByRole('textbox');
    // first two textboxes are username and email (order from render)
    fireEvent.input(inputs[0], { target: { value: 'carol' } });
    fireEvent.input(inputs[1], { target: { value: 'carol@example.com' } });
    fireEvent.click(screen.getByText('Next'));

    // fill profile step: textarea is also role textbox
    const allTextboxes = screen.getAllByRole('textbox');
    const textarea = allTextboxes.find((n) => n.nodeName.toLowerCase() === 'textarea');
    if (textarea) fireEvent.input(textarea, { target: { value: 'Bio here' } });
    // address input should be present as last input
    const postInputs = screen.getAllByRole('textbox');
    const addressInput = postInputs[postInputs.length - 1];
    fireEvent.input(addressInput, { target: { value: '456 Lane' } });

    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Submit'));

    const status = screen.getByRole('status');
    expect(status.textContent).toContain('Form submitted successfully');
  });
});
