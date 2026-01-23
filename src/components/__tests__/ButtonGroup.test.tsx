import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';

describe('ButtonGroup', () => {
  it('renders group and children and applies role', () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('group')).toBeTruthy();
    expect(screen.getByText('One')).toBeTruthy();
  });
});
