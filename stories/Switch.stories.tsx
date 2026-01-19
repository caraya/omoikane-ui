import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src/components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: { type: 'select' }, options: ['sm','md','lg'] },
    checkedColor: { control: 'color' },
    uncheckedColor: { control: 'color' },
    thumbColor: { control: 'color' },
    focusRingColor: { control: 'color' },
  }
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'md'
  },
  render: (args) => (
    <div style={{ padding: 20 }}>
      <label className="flex items-center gap-3">
        <Switch {...args} onChange={(v) => console.log('switch', v)} />
        <span>Enable feature</span>
      </label>
    </div>
  )
};
