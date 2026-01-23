import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Accordion from '../Accordion';

describe('Accordion', () => {
  it('toggles content when header clicked', () => {
    render(
      <Accordion>
        <Accordion.Item title="Head">Body</Accordion.Item>
      </Accordion>
    );
    const head = screen.getByText('Head');
    expect(screen.queryByText('Body')).toBeNull();
    fireEvent.click(head);
    expect(screen.getByText('Body')).toBeTruthy();
  });
});
