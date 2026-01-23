import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Breadcrumbs from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders crumb links', () => {
    render(<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Page' }]} />);
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Page')).toBeTruthy();
  });
});
