import { describe, it, expect } from 'vitest';
import * as Module from '../Button';

describe('Button', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
