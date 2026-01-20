import { describe, it, expect } from 'vitest';
import * as Module from '../Link';

describe('Link', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
