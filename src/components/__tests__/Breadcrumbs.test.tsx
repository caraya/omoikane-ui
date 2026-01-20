import { describe, it, expect } from 'vitest';
import * as Module from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  it('loads module', () => {
    expect(Module).toBeTruthy();
  });
});
