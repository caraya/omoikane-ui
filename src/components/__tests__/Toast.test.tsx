import { describe, it, expect } from 'vitest';
import * as Module from '../Toast';

describe('Toast', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
