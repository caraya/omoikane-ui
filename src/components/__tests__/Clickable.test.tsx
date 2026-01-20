import { describe, it, expect } from 'vitest';
import * as Module from '../Clickable';

describe('Clickable', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
