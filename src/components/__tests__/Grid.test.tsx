import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Grid from '../Grid';

describe('Grid', () => {
  it('renders children in a grid container', () => {
    render(
      <Grid>
        <div>One</div>
        <div>Two</div>
      </Grid>
    );
    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();
  });
});
