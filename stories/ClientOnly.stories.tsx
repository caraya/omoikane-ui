import type { Meta, StoryObj } from '@storybook/react';
import { ClientOnly } from '../src/components/ClientOnly';
import { Body, Caption } from '../src/components/Typography';

const meta: Meta<typeof ClientOnly> = {
  title: 'Components/ClientOnly',
  component: ClientOnly,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ClientOnly>;

const BrowserInfo = () => {
    // This would crash during SSR if not protected (simulated)
    const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'Server';
    const winSize = typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'Server';
    
    return (
        <div className="p-4 border border-green-500 bg-green-50 rounded">
            <Body>I am client only!</Body>
            <Caption className="block">User Agent: {userAgent}</Caption>
            <Caption className="block">Window: {winSize}</Caption>
        </div>
    );
};

export const Default: Story = {
  args: {
    children: <BrowserInfo />,
    fallback: <div className="p-4 border border-dashed border-gray-300 rounded text-gray-400">Loading Client Content... (Fallback)</div>
  },
};

export const WithoutFallback: Story = {
    args: {
        children: <BrowserInfo />,
    },
};
