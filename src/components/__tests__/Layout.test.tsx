import { describe, it, expect } from 'vitest';
import * as Module from '../Layout';

describe('Layout', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
