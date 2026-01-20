import { describe, it, expect } from 'vitest';
import * as Module from '../Modal';

describe('Modal', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
