import { describe, it, expect } from 'vitest';
import * as Module from '../Pill';

describe('Pill', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
