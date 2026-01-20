import { describe, it, expect } from 'vitest';
import * as Module from '../Icon';

describe('Icon', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
