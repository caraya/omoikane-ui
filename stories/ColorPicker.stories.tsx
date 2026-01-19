import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../src/components/ColorPicker';

const meta = {
  title: 'Components/Color.js/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'text' },
    space: { 
        control: 'select', 
        options: ['srgb', 'oklch', 'p3', 'rec2020'] 
    },
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default wrapper to show state
const ColorPickerWithErrorConfig = (args: any) => {
    return (
        <div style={{ padding: 20 }}>
             <div className="mb-4 text-sm text-gray-500">
                Note: This component loads external scripts from <code>elements.colorjs.io</code>. 
                Ensure you have internet access.
             </div>
             <ColorPicker {...args} />
        </div>
    )
}

export const Default: Story = {
  render: (args) => <ColorPickerWithErrorConfig {...args} />,
  args: {
    color: 'oklch(70% 0.25 138)',
  },
};

export const OKLCHSpace: Story = {
    render: (args) => <ColorPickerWithErrorConfig {...args} />,
    args: {
      color: 'oklch(62.796% 0.4 296)',
      space: 'oklch',
    },
  };
