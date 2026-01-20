import { describe, it, expect } from 'vitest';
import * as Module from '../Image';

describe('Image', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
