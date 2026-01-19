import type { Meta, StoryObj } from '@storybook/react';
import { Clickable } from '../src/components/Clickable';
import { UserIcon } from '@phosphor-icons/react';

const meta: Meta<typeof Clickable> = {
  title: 'Components/Clickable',
  component: Clickable,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Clickable 
      {...args}
      className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 active:scale-95 transition-all"
    >
      Click Me
    </Clickable>
  ),
};

export const WithIcon: Story = {
    render: (args) => (
      <Clickable 
        {...args}
        className="flex gap-2 items-center bg-gray-100 text-gray-800 px-4 py-2 rounded font-medium hover:bg-gray-200 active:bg-gray-300 transition-all"
      >
        <UserIcon size={20} />
        <span>Profile</span>
      </Clickable>
    ),
  };

export const AsLink: Story = {
  render: (args) => (
    <Clickable 
      {...args}
      href="https://example.com"
      className="text-blue-600 underline hover:text-blue-800"
      target="_blank"
    >
      This is a link
    </Clickable>
  ),
};

export const StateFunctionChild: Story = {
  render: (args) => (
    <Clickable
      {...args}
      className="p-4 border-2 rounded-lg transition-all w-64 text-center select-none"
    >
      {({ hovered, pressed, focused }) => {
          let bgClass = "bg-white";
          let borderClass = "border-gray-200";
          let text = "Interact with me";

          if (pressed) {
            bgClass = "bg-blue-100";
            borderClass = "border-blue-500 scale-95";
            text = "Pressed!";
          } else if (hovered) {
            bgClass = "bg-gray-50";
            borderClass = "border-gray-400";
            text = "Hovering...";
          }

          if (focused) {
              borderClass += " ring-2 ring-blue-300";
          }
          
          return (
             <div className={`${bgClass} ${borderClass} h-full w-full p-2 transition-all rounded`}>
                <p className="font-bold text-gray-700">{text}</p>
                <p className="text-xs text-gray-500 mt-1">
                    State: {JSON.stringify({ hovered, pressed, focused })}
                </p>
             </div>
          );
      }}
    </Clickable>
  ),
};

export const Disabled: Story = {
  args: {
      disabled: true,
  },
  render: (args) => (
    <div className="flex gap-4">
        <Clickable 
            {...args}
            className="bg-blue-600 text-white px-4 py-2 rounded font-medium"
        >
            Disabled Button
        </Clickable>
        
        <Clickable 
            {...args}
            href="#"
            className="text-blue-600 underline"
        >
            Disabled Link
        </Clickable>
    </div>
  ),
};
