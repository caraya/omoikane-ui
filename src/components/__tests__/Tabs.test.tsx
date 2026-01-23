import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tabs from '../Tabs';

describe('Tabs', () => {
  it('switches panels when tabs clicked', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Tab index={0}>One</Tabs.Tab>
          <Tabs.Tab index={1}>Two</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel index={0}>Panel A</Tabs.Panel>
          <Tabs.Panel index={1}>Panel B</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    );
    expect(screen.getByText('Panel A')).toBeTruthy();
    fireEvent.click(screen.getByText('Two'));
    expect(screen.getByText('Panel B')).toBeTruthy();
  });
});
