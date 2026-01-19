import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '../src/components/ButtonGroup';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    spacing: { control: 'number', description: 'Gap between buttons. 0 joins them.' },
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Joined: Story = {
  args: {
    children: (
        <>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </>
    ),
    spacing: 0,
    variant: 'secondary'
  },
};

export const PrimaryJoined: Story = {
  args: {
    children: (
        <>
            <Button>Year</Button>
            <Button>Month</Button>
            <Button>Week</Button>
        </>
    ),
    spacing: 0,
    variant: 'primary'
  },
};

export const Spaced: Story = {
    args: {
      children: (
          <>
              <Button>Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
          </>
      ),
      spacing: 4,
    },
  };

export const SmallJoined: Story = {
  args: {
    children: (
        <>
            <Button>B</Button>
            <Button>I</Button>
            <Button>U</Button>
        </>
    ),
    spacing: 0,
    size: 'sm',
    variant: 'secondary'
  },
};

export const MixedVariants: Story = {
    args: {
      children: (
          <>
              <Button>Standard</Button>
              <Button variant="destructive">Delete</Button>
          </>
      ),
      spacing: 0,
      variant: 'secondary' // This acts as a default
    },
};
