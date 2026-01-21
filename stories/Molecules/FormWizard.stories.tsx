import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import FormWizard from '../../src/components/molecules/FormWizard';

const meta: Meta<typeof FormWizard> = {
  title: 'Molecules/FormWizard',
  component: FormWizard,
};

export default meta;
type Story = StoryObj<typeof FormWizard>;

export const Playground: Story = {
  args: {},
};
