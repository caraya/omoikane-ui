import type { Meta, StoryObj } from '@storybook/react';
import { DateSelect } from '../src/components/DateSelect';
import { useState } from 'react';

const meta = {
  title: 'Components/Dates/DateSelect',
  component: DateSelect,
  tags: ['autodocs'],
  argTypes: {
    minYear: { control: 'number' },
    maxYear: { control: 'number' },
    includeTime: { control: 'boolean' },
    use24HourClock: { control: 'boolean' },
    locale: {
        control: 'select',
        options: ['en-US', 'es-ES', 'ja-JP', 'de-DE'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof DateSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper for checking values
const DateSelectWithState = (args: any) => {
  const [date, setDate] = useState<Date>(args.value || new Date());
  return (
    <div className="space-y-4">
        <DateSelect {...args} value={date} onChange={setDate} />
        <div className="text-sm text-gray-500">
            Selected: <span className="font-mono">{date.toString()}</span>
        </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DateSelectWithState {...args} />,
};

export const WithTime: Story = {
  render: (args) => <DateSelectWithState {...args} />,
  args: {
      includeTime: true,
  }
};

export const With24HourClock: Story = {
  render: (args) => <DateSelectWithState {...args} />,
  args: {
      includeTime: true,
      use24HourClock: true,
  }
};

export const CustomYearRange: Story = {
    render: (args) => <DateSelectWithState {...args} />,
    args: {
        minYear: 1980,
        maxYear: 2000,
        value: new Date(1990, 5, 15),
    }
};

export const SpanishLocale: Story = {
    render: (args) => <DateSelectWithState {...args} />,
    args: {
        locale: 'es-ES',
    }
};

export const Disabled: Story = {
    render: (args) => <DateSelectWithState {...args} />,
    args: {
        includeTime: true,
        disabled: true,
    }
};
