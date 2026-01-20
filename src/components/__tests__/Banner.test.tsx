import { describe, it, expect } from 'vitest';
import * as Module from '../Banner';

describe('Banner', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
