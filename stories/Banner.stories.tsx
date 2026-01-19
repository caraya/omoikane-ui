import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../src/components/Banner';
import { Button } from '../src/components/Button';
import { HandWavingIcon, InfoIcon, CheckCircleIcon, WarningIcon, WarningCircleIcon } from '@phosphor-icons/react';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['info', 'success', 'warning', 'critical'] 
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Info Banner
export const InfoBanner: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational message. It provides neutral feedback or instructions.',
  },
};

// Success Banner
export const SuccessBanner: Story = {
  args: {
    variant: 'success',
    children: 'Action completed successfully! Your changes have been saved.',
    onDismiss: () => alert('Dismissed'),
  },
};

// Warning Banner
export const WarningBanner: Story = {
  args: {
    variant: 'warning',
    children: 'Please verify your email address. Some features may be restricted.',
    actions: <Button size="sm" variant="secondary" onClick={() => alert('Resend email')}>Resend Email</Button>,
  },
};

// Critical Banner
export const CriticalBanner: Story = {
  args: {
    variant: 'critical',
    children: 'Connection lost. Please check your internet connection and try again.',
    onDismiss: () => alert('Dismissed'),
  },
};

// With Custom Icon
export const CustomIcon: Story = {
  args: {
    variant: 'info',
    icon: <HandWavingIcon size={20} className="text-blue-600" />,
    children: 'Welcome back! We missed you.',
  },
};

// With Multiple Actions (stacked in column on small screens in real implementation)
export const WithActions: Story = {
  args: {
    variant: 'success',
    children: 'Your account has been created.',
    actions: (
      <div className="flex gap-2">
        <Button size="sm" variant="secondary" onClick={() => {}}>View Profile</Button>
        <Button size="sm" variant="tertiary" onClick={() => {}}>Dismiss</Button>
      </div>
    ),
  },
};
