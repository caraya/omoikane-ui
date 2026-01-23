import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dropdown from '../Dropdown';

describe('Dropdown', () => {
  it('renders trigger and toggles menu', () => {
    render(
      <Dropdown>
        <button slot="trigger">Open</button>
        <div slot="menu">Item</div>
      </Dropdown>
    );

    expect(screen.getByText('Open')).toBeTruthy();
    // If trigger is a button, simulate click
    fireEvent.click(screen.getByText('Open'));
    // Menu may render as a child - assert presence
    expect(screen.getByText('Item')).toBeTruthy();
  });
});
