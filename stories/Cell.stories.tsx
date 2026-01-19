import type { Meta, StoryObj } from '@storybook/react';
import { CompactCell, DetailCell } from '../src/components/Cell';
import { CaretRightIcon, UserIcon, InfoIcon } from '@phosphor-icons/react';

const meta = {
  title: 'Components/Cell',
  component: CompactCell, 
  tags: ['autodocs'],
} satisfies Meta<typeof CompactCell>;

export default meta;
type Story = StoryObj<typeof meta>;

// Compact Cell Stories
export const Compact: Story = {
  render: (args) => (
    <div className="w-[320px] border border-gray-200 rounded-md overflow-hidden bg-gray-100">
      <CompactCell {...args} />
      <CompactCell title="Selecting an item" active />
      <CompactCell 
        title="With accessories" 
        leftAccessory={<UserIcon size={20} />}
        rightAccessory={<CaretRightIcon size={16} />} 
      />
      <CompactCell 
        title="Disabled cell" 
        disabled 
        rightAccessory={<CaretRightIcon size={16} />}
      />
    </div>
  ),
  args: {
    title: 'Basic Compact Cell',
    rightAccessory: <CaretRightIcon size={16} />,
  },
};

// Detail Cell Stories
export const Detail: StoryObj<typeof DetailCell> = {
  render: (args) => (
    <div className="w-[320px] border border-gray-200 rounded-md overflow-hidden bg-gray-100">
      <DetailCell {...args} />
      <DetailCell 
        title="Article Title"
        subtitle2="This is a description or preview of the content that appears below the title."
        rightAccessory={<CaretRightIcon size={16} />}
      />
      <DetailCell 
        title="User Profile"
        subtitle1="ADMINISTRATOR"
        subtitle2="Last active: 2 hours ago"
        leftAccessory={<UserIcon size={32} className="text-gray-400" />}
        rightAccessory={<InfoIcon size={20} />}
      />
    </div>
  ),
  args: {
    title: 'Detail Cell Title',
    subtitle2: 'Subtitle appears below',
    rightAccessory: <CaretRightIcon size={16} />,
  },
};
