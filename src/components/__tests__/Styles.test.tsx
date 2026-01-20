import { describe, it, expect } from 'vitest';
import * as Module from '../Styles';

describe('Styles', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
