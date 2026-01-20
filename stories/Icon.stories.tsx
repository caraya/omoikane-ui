import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../src/components/Icon';
import { UserIcon, InfoIcon, HeartIcon, CheckCircleIcon } from '@phosphor-icons/react';

const meta = {
  title: 'Icons/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: { 
        control: 'select', 
        options: ['small', 'medium', 'large', 'xlarge'] 
    },
    icon: { control: false } // Disable control for the icon component prop
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample SVG Path (A simple checkmark)
const CHECK_PATH = "M20.285 2l-11.285 11.565-5.286-5.011-3.714 3.716 9 8.728 15-15.285z";

export const Basic: Story = {
  args: {
    icon: UserIcon,
    size: 'medium',
    color: '#1f2937' // gray-800
  },
};

export const WithBackgroundColor: Story = {
    args: {
        icon: HeartIcon,
        size: 'medium',
        color: 'white',
        backgroundColor: '#ef4444', // red-500
        className: 'rounded-full p-1 box-content', // Add padding/rounding if needed via class
        // Note: The component applies bg directly to the container of size `size`. 
        // If we want the container to be larger than the icon for the background, 
        // the current implementation restricts the container to the icon size.
        // Let's rely on the user to understand strict sizing or add padding.
    },
    render: (args) => (
        <div className="flex gap-4">
             <Icon {...args} />
             <div className="text-sm self-center">Icon with Background</div>
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-end gap-4 text-gray-800">
            <div className="flex flex-col items-center gap-2">
                <Icon icon={InfoIcon} size="small" />
                <span className="text-xs">Small (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon icon={InfoIcon} size="medium" />
                <span className="text-xs">Medium (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon icon={InfoIcon} size="large" />
                <span className="text-xs">Large (48px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon icon={InfoIcon} size="xlarge" />
                <span className="text-xs">XLarge (96px)</span>
            </div>
        </div>
    )
};

export const PathIcon: Story = {
    args: {
        icon: CHECK_PATH,
        size: 'medium',
        color: 'green'
    },
    render: (args) => (
        <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Using raw SVG path string:</span>
            <Icon {...args} />
        </div>
    )
}

export const Colors: Story = {
    render: () => (
        <div className="flex gap-4">
            <Icon icon={CheckCircleIcon} color="green" size="large" />
            <Icon icon={HeartIcon} color="red" size="large" />
            <Icon icon={UserIcon} color="blue" size="large" />
             <Icon icon={UserIcon} color="white" backgroundColor="black" size="large" />
        </div>
    )
}
