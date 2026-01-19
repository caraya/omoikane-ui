import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbItem, BreadcrumbsProps } from '../src/components/Breadcrumbs';
import { CaretDoubleRightIcon } from '@phosphor-icons/react';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { BreadcrumbItem } as any,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
    alignment: {
        control: 'inline-radio',
        options: ['left', 'center', 'right'],
        description: 'Horizontal alignment',
        defaultValue: 'left',
    }
  },
} satisfies Meta<BreadcrumbsProps & { alignment?: string }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Electronics</BreadcrumbItem>
      <BreadcrumbItem active>Headphones</BreadcrumbItem>
    </Breadcrumbs>
  ),
  args: {
    alignment: 'left',
  }
};

export const CustomSeparator: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Settings</BreadcrumbItem>
      <BreadcrumbItem active>Profile</BreadcrumbItem>
    </Breadcrumbs>
  ),
  args: {
    separator: <span className="text-gray-300 mx-2">/</span>,
  },
};

export const WithIcons: Story = {
    render: (args) => (
      <Breadcrumbs {...args}>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Settings</BreadcrumbItem>
        <BreadcrumbItem active>Profile</BreadcrumbItem>
      </Breadcrumbs>
    ),
    args: {
        separator: <CaretDoubleRightIcon className="h-3 w-3 text-gray-400 mx-2" />,
    },
};

export const LongPath: Story = {
    render: (args) => (
      <Breadcrumbs {...args}>
        <BreadcrumbItem href="#">Account</BreadcrumbItem>
        <BreadcrumbItem href="#">Organizations</BreadcrumbItem>
        <BreadcrumbItem href="#">Omoikane</BreadcrumbItem>
        <BreadcrumbItem href="#">Teams</BreadcrumbItem>
        <BreadcrumbItem href="#">Engineering</BreadcrumbItem>
        <BreadcrumbItem active>Settings</BreadcrumbItem>
      </Breadcrumbs>
    ),
  };
