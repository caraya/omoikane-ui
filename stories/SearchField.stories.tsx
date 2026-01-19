import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchField } from '../src/components/SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  args: {
    placeholder: 'Search...',
    size: 'md',
    clearable: true,
  },
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    clearable: { control: 'boolean' },
    placeholder: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Playground: Story = {
  render: (args) => {
    const [val, setVal] = React.useState('');
    return <SearchField {...args} value={val} onChange={(v) => setVal(v)} />;
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <SearchField size="sm" placeholder="Small" />
      <SearchField size="md" placeholder="Medium" />
      <SearchField size="lg" placeholder="Large" />
    </div>
  )
};
