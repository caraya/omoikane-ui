import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressSpinner } from '../src/components/ProgressSpinner';

const meta: Meta<typeof ProgressSpinner> = {
  title: 'Components/ProgressSpinner',
  component: ProgressSpinner,
  args: {
    size: 36,
    thickness: 3.5,
    variant: 'default',
  },
  argTypes: {
    size: { control: { type: 'number', min: 8, max: 120, step: 1 } },
    thickness: { control: { type: 'number', min: 1, max: 12, step: 0.5 } },
    variant: { control: { type: 'select' }, options: ['default', 'neutral', 'positive', 'negative', 'info'] },
    value: { control: { type: 'number', min: 0, max: 100, step: 1 } },
  }
};

export default meta;

type Story = StoryObj<typeof ProgressSpinner>;

export const Indeterminate: Story = {
  render: (args) => <ProgressSpinner {...args} />
};

export const Determinate: Story = {
  render: (args) => {
    const [v, setV] = React.useState(30);
    React.useEffect(() => {
      const t = setInterval(() => setV((s) => (s >= 100 ? 0 : s + 7)), 600);
      return () => clearInterval(t);
    }, []);
    return <ProgressSpinner {...args} value={v} />;
  }
};
