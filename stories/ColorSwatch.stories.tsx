import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from '../src/components/ColorSwatch';

const meta = {
  title: 'Components/Color.js/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  argTypes: {
    size: { 
        control: 'select', 
        options: ['small', 'large'] 
    },
    value: { control: 'text' },
    gamuts: { control: 'text' }
  },
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatchWrapper = ({ children, ...args }: any) => {
    return (
        <div style={{ padding: 20 }}>
             <div className="mb-4 text-sm text-gray-500 bg-yellow-50 p-2 rounded border border-yellow-200 inline-block">
                ⚠️ Note: This component loads external web components from <code>elements.colorjs.io</code>. 
             </div>
             <div className="mt-4">
                {children ? children : <ColorSwatch {...args} />}
             </div>
        </div>
    )
}

export const Basic: Story = {
  render: (args) => <ColorSwatchWrapper {...args} />,
  args: {
    value: 'oklch(60% 0.2 250)',
    label: 'Deep Purple'
  },
};

export const LargeWithInfo: Story = {
    render: (args) => <ColorSwatchWrapper {...args} />,
    args: {
      value: 'color(display-p3 1 0 0)',
      size: 'large',
      label: 'P3 Red',
      info: [
          { "L": "oklch.l" },
          { "C": "oklch.c" },
          { "H": "oklch.h" }
      ]
    },
};

export const OutOfGamut: Story = {
    render: (args) => <ColorSwatchWrapper {...args} />,
    args: {
      // Extremely saturated green that is likely out of sRGB
      value: 'oklch(90% 0.37 145)', 
      label: 'Neon Green (OOG)',
      size: 'medium'
    },
};

export const Editable: Story = {
    render: () => (
        <ColorSwatchWrapper>
            <ColorSwatch>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input 
                        type="text" 
                        defaultValue="blue" 
                        className="border rounded px-2 py-1"
                    />
                </div>
            </ColorSwatch>
            <p className="mt-2 text-sm text-gray-500">
                Note: ColorSwatch can wrap an input element to visualize it automatically.
            </p>
        </ColorSwatchWrapper>
    )
};
