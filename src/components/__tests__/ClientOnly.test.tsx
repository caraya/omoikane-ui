import { describe, it, expect } from 'vitest';
import * as Module from '../ClientOnly';

describe('ClientOnly', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
