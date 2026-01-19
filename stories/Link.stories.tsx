import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../src/components/Link';

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    external: { control: 'boolean' }
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    href: '#',
    children: 'Learn more',
    size: 'md'
  }
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'External site',
    external: true
  }
};

export const NoUnderline: Story = {
  args: {
    href: '#',
    children: 'No underline',
    underline: false
  }
};

export const CustomColor: Story = {
  args: {
    href: '#',
    children: 'Custom color',
    color: '#ff7b00'
  }
};
