import { describe, it, expect } from 'vitest';
import * as Module from '../View';

describe('View', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
