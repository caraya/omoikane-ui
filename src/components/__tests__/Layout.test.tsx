import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Layout from '../Layout';

describe('Layout', () => {
  it('renders children inside layout', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByText('Content')).toBeTruthy();
  });
});
