import { describe, it, expect } from 'vitest';
import * as Module from '../Toolbar';

describe('Toolbar', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
