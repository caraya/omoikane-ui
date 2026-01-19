import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from '../src/components/Pill';

const meta: Meta<typeof Pill> = {
  title: 'Components/Pill',
  component: Pill,
  args: {
    children: 'Default',
    variant: 'default',
    size: 'md',
    rounded: true,
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'neutral', 'positive', 'negative', 'info'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    rounded: { control: 'boolean' },
    children: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Playground: Story = {
  render: (args) => <Pill {...args} />
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Pill>Default</Pill>
      <Pill variant="neutral">Neutral</Pill>
      <Pill variant="positive">Positive</Pill>
      <Pill variant="negative">Negative</Pill>
      <Pill variant="info">Info</Pill>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Pill size="sm">Small</Pill>
      <Pill size="md">Medium</Pill>
      <Pill size="lg">Large</Pill>
    </div>
  )
};
