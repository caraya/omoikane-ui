import type { Meta, StoryObj } from '@storybook/react';
import { ColorScale } from '../src/components/ColorScale';

const meta = {
  title: 'Components/Color.js/ColorScale',
  component: ColorScale,
  tags: ['autodocs'],
  argTypes: {
    space: { 
        control: 'select', 
        options: [
            'srgb', 'srgb-linear', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec2020', 
            'xyz', 'xyz-d50', 'xyz-d65', 
            'lab', 'lch', 'oklab', 'oklch', 
            'hsl', 'hwb', 'hsv', 'hsi'
        ] 
    },
    steps: {
        control: { type: 'range', min: 0, max: 20 },
    }
  },
} satisfies Meta<typeof ColorScale>;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorScaleWrapper = ({ children, ...args }: any) => {
    return (
        <div style={{ padding: 20 }}>
             <div className="mb-4 text-sm text-gray-500 bg-yellow-50 p-2 rounded border border-yellow-200 inline-block">
                ⚠️ Note: This component loads external web components from <code>elements.colorjs.io</code>. 
             </div>
             <div className="mt-4">
                {children ? children : <ColorScale {...args} />}
             </div>
        </div>
    )
}

export const BasicGradient: Story = {
  render: (args) => <ColorScaleWrapper {...args} />,
  args: {
    colors: ['red', 'blue'],
    steps: 5,
    space: 'oklch',
  },
};

export const NamedPoints: Story = {
    render: (args) => (
        <ColorScaleWrapper>
             <div className="mb-4 text-sm text-gray-600">
                Note: The <code>steps</code> prop ({args.steps}) defines the number of intermediate steps generated <em>between</em> each provided color keyframe.
             </div>
             <ColorScale {...args} />
        </ColorScaleWrapper>
    ),
    args: {
      colors: {
          'Start': 'white',
          'Mid': 'purple',
          'End': 'black'
      },
      space: 'srgb',
      steps: 3
    },
};

export const Rainbow: Story = {
    render: (args) => <ColorScaleWrapper {...args} />,
    args: {
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
      space: 'hsl',
      steps: 0
    },
};

export const InterpolationComparison: Story = {
    render: () => (
        <ColorScaleWrapper>
             <div className="space-y-8">
                 <div>
                     <h3 className="font-bold mb-2">sRGB Interpolation</h3>
                     <ColorScale colors={['red', 'green']} space="srgb" steps={10} />
                 </div>
                 <div>
                     <h3 className="font-bold mb-2">OKLCH Interpolation (Perceptually Uniform)</h3>
                     <ColorScale colors={['red', 'green']} space="oklch" steps={10} />
                 </div>
             </div>
        </ColorScaleWrapper>
    )
};
