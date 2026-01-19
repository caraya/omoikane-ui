import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../src/components/IconButton';
import { MagnifyingGlassIcon, TrashIcon, XIcon, PencilSimpleIcon } from '@phosphor-icons/react';

const meta = {
  title: 'Components/Icons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size: { 
        control: 'select', 
        options: ['xsmall', 'small', 'medium', 'large'] 
    },
    kind: {
        control: 'select',
        options: ['primary', 'secondary', 'tertiary']
    },
    color: {
        control: 'select',
        options: ['default', 'destructive']
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
  args: {
    icon: MagnifyingGlassIcon
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: MagnifyingGlassIcon,
    kind: 'primary',
    size: 'medium',
    'aria-label': 'Search'
  },
};

export const Kinds: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={PencilSimpleIcon} kind="primary" aria-label="Edit" />
                <span className="text-xs text-gray-500">Primary</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={PencilSimpleIcon} kind="secondary" aria-label="Edit" />
                <span className="text-xs text-gray-500">Secondary</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={PencilSimpleIcon} kind="tertiary" aria-label="Edit" />
                <span className="text-xs text-gray-500">Tertiary</span>
             </div>
        </div>
    )
};

export const Destructive: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={TrashIcon} kind="primary" color="destructive" aria-label="Delete" />
                <span className="text-xs text-gray-500">Primary</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={TrashIcon} kind="secondary" color="destructive" aria-label="Delete" />
                <span className="text-xs text-gray-500">Secondary</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={TrashIcon} kind="tertiary" color="destructive" aria-label="Delete" />
                <span className="text-xs text-gray-500">Tertiary</span>
             </div>
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-end gap-4">
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={XIcon} size="xsmall" kind="secondary" aria-label="Close" />
                <span className="text-xs text-gray-500">XS (24px)</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={XIcon} size="small" kind="secondary" aria-label="Close" />
                <span className="text-xs text-gray-500">Sm (32px)</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={XIcon} size="medium" kind="secondary" aria-label="Close" />
                <span className="text-xs text-gray-500">Md (40px)</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <IconButton icon={XIcon} size="large" kind="secondary" aria-label="Close" />
                <span className="text-xs text-gray-500">Lg (48px)</span>
             </div>
        </div>
    )
};

export const Disabled: Story = {
    args: {
        icon: MagnifyingGlassIcon,
        disabled: true,
        kind: 'secondary'
    }
}
