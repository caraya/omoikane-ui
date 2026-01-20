import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Popover } from '../Popover';

describe('Popover', () => {
  it('renders a focusable dialog with tabIndex when open', () => {
    const { getByRole } = render(
      <Popover isOpen={true} placement="bottom" trapFocus={true}>
        <div>Hi</div>
      </Popover>
    );

    const dialog = getByRole('dialog');
    // tabIndex should be present and equal to -1 (string) in DOM
    expect(dialog.getAttribute('tabindex')).toBe('-1');
  });
});
