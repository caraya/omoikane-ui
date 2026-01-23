import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Form, FormSection } from '../Form';

describe('Form', () => {
  it('renders section title and children', () => {
    render(
      <Form>
        <FormSection title="Group">
          <div>Child</div>
        </FormSection>
      </Form>
    );
    expect(screen.getByText('Group')).toBeTruthy();
    expect(screen.getByText('Child')).toBeTruthy();
  });
});
