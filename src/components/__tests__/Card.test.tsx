import { describe, it, expect } from 'vitest';
import * as Module from '../Card';

describe('Card', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
