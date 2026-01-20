import { describe, it, expect } from 'vitest';
import * as Module from '../Cell';

describe('Cell', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
