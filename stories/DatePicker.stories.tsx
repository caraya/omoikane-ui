import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src/components/DatePicker';
import { useState } from 'react';

const meta = {
  title: 'Dates/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en-US', 'en-GB', 'ja-JP', 'de-DE', 'es-ES'],
      description: 'The locale used for formatting dates',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  }

} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to handle state in Storybook
const DatePickerWithState = (args: any) => {
  const [date, setDate] = useState<Date | undefined>(args.value);
  return <DatePicker {...args} value={date} onChange={setDate} />;
};

export const Default: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select a date...',
  }
};

export const PreselectedDate: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    value: new Date(2026, 0, 15), // Jan 15, 2026
    placeholder: 'Select a date...',
  }
};

export const UKLocale: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    locale: 'en-GB',
    value: new Date(2026, 0, 15),
  }
};

export const JapaneseLocale: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    locale: 'ja-JP',
    value: new Date(2026, 0, 15),
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: new Date(),
  }
};
