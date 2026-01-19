import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../src/components/Modal';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    footer: { control: false }
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} footer={
          <>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="ml-2" onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">This is a sample modal. Replace this content with your own.</p>
            <p className="text-sm text-gray-600">It traps focus lightly via the browser, and closes on Escape or backdrop click.</p>
          </div>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Confirm Action'
  }
};
