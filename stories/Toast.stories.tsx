import React, { useState } from 'react';
import Toast from '../src/components/Toast';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-left','top-center','top-right','bottom-left','bottom-center','bottom-right']
    },
  }
} as Meta;

const Template: Story = (args: any) => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ minHeight: 200 }}>
      <button onClick={() => setShow(true)} style={{ margin: 12 }}>Show Toast</button>
      <Toast
        position={args.position}
        visible={show}
        onClose={() => setShow(false)}
      >
        <div>
          <strong>Notification</strong>
          <div className="text-xs">Click to dismiss</div>
        </div>
      </Toast>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { position: 'top-right' };
