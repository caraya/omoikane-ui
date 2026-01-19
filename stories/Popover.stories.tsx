import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../src/components/Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  args: {
    placement: 'bottom',
    align: 'center',
    offset: 8,
    showArrow: true,
  },
  argTypes: {
    placement: { control: { type: 'select' }, options: ['top', 'bottom', 'left', 'right'] },
    align: { control: { type: 'select' }, options: ['start', 'center', 'end'] },
    offset: { control: { type: 'number', min: 0, max: 64, step: 1 } },
    showArrow: { control: 'boolean' },
  }
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Playground: Story = {
  render: (args) => {
    const ref = React.createRef<HTMLButtonElement>();
    const [open, setOpen] = React.useState(false);

    return (
      <div className="p-8">
        <button ref={ref} className="px-3 py-2 bg-gray-200 rounded" onClick={() => setOpen((s) => !s)}>
          Toggle Popover
        </button>

        <Popover
          isOpen={open}
          anchorRef={ref}
          onClose={() => setOpen(false)}
          placement={args.placement}
          align={args.align}
          offset={args.offset}
          showArrow={args.showArrow}
        >
          <div className="flex flex-col gap-2">
            <div className="text-sm">This is a popover.</div>
            <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => alert('clicked')}>Action</button>
          </div>
        </Popover>
      </div>
    );
  }
};

export const Variants: Story = {
  render: () => {
    const ref = React.createRef<HTMLButtonElement>();
    const [open, setOpen] = React.useState(false);

    return (
      <div className="p-8 flex gap-4 items-start">
        <button ref={ref} className="px-3 py-2 bg-gray-200 rounded" onClick={() => setOpen((s) => !s)}>
          Toggle Popover
        </button>

        <Popover isOpen={open} anchorRef={ref} onClose={() => setOpen(false)} placement="bottom" align="start">
          <div className="p-2">Bottom / start</div>
        </Popover>

        <Popover isOpen={open} anchorRef={ref} onClose={() => setOpen(false)} placement="bottom" align="center">
          <div className="p-2">Bottom / center</div>
        </Popover>
      </div>
    );
  }
};
