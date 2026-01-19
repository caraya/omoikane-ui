import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormSection } from '../src/components/Form';
import { TextField } from '../src/components/TextField';
import { Button } from '../src/components/Button';
import { ButtonGroup } from '../src/components/ButtonGroup';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    gap: { control: 'number', description: 'Gap between form elements' },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicLogin: Story = {
  args: {
    children: (
        <>
            <TextField label="Email" placeholder="user@example.com" type="email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <ButtonGroup>
                <Button type="submit" variant="primary">Log In</Button>
                <Button variant="tertiary">Forgot Password?</Button>
            </ButtonGroup>
        </>
    ),
    className: 'max-w-sm border p-6 rounded-lg shadow-sm',
  },
};

export const WithSections: Story = {
  args: {
    children: (
        <>
             <FormSection title="Personal Information" description="Basic identification details.">
                <TextField label="First Name" placeholder="Jane" fullWidth />
                <TextField label="Last Name" placeholder="Doe" fullWidth />
             </FormSection>

             <FormSection title="Account Security" description="Keep your account safe.">
                <TextField label="New Password" type="password" fullWidth />
                <TextField label="Confirm Password" type="password" fullWidth />
             </FormSection>

             <div className="pt-2">
                <ButtonGroup spacing={4}>
                    <Button type="submit" variant="primary">Save Changes</Button>
                    <Button variant="secondary">Cancel</Button>
                </ButtonGroup>
             </div>
        </>
    ),
    className: 'max-w-md',
  },
};

export const CompactForm: Story = {
    args: {
      gap: 2,
      children: (
          <>
              <TextField label="Search" placeholder="Search documentation..." fullWidth />
              <Button type="submit" variant="primary" className="w-full">Go</Button>
          </>
      ),
      className: 'max-w-xs',
    },
  };
