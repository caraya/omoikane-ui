import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import YoutubeVideo from '../YoutubeVideo';

describe('YoutubeVideo', () => {
  it('renders iframe with provided video id', () => {
    render(<YoutubeVideo id="abc123" />);
    const iframe = screen.getByTitle('Youtube video');
    expect(iframe).toBeTruthy();
  });
});
