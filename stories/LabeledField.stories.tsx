import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LabeledField } from '../src/components/LabeledField';
import { TextField } from '../src/components/TextField';
import { SingleSelect, OptionItem } from '../src/components/Dropdown';

const meta = {
  title: 'Components/LabeledField',
  component: LabeledField,
  tags: ['autodocs'],
  argTypes: {
     label: { control: 'text' },
     description: { control: 'text' },
     errorMessage: { control: 'text' },
     required: { control: 'boolean' }
  }
} satisfies Meta<typeof LabeledField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Email Address",
    description: "We'll never share your email with anyone else.",
    field: (
        // Using a "Raw" input to show it works with standard HTML elements
        <input 
            className="w-full h-10 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            placeholder="example@domain.com" 
        />
    )
  },
};

export const WithTextField: Story = {
    render: (args) => (
        <LabeledField 
            {...args}
            label="Username"
            field={
                // When using with our TextField, we don't pass 'label' to TextField 
                // to avoid duplication. LabeledField handles the layout.
                <TextField placeholder="Enter unique username" />
            }
        />
    )
};

export const WithError: Story = {
    args: {
        label: "Password",
        required: true,
        errorMessage: "Password must be at least 8 characters long.",
        field: (
            <TextField type="password" error="true" />
            // Note: We might need to manually trigger the visual error state on the child 
            // if it doesn't infer it solely from aria-invalid.
            // But LabeledField handles the message display.
        )
    }
};

export const WithDropdown: Story = {
    render: () => {
        const [role, setRole] = useState<string | null>(null);
        return (
            <div className="h-64">
                <LabeledField
                    label="Select Role"
                    description="Choose the permission level for this user"
                    field={
                        <SingleSelect 
                            selectedValue={role}
                            onChange={(val) => setRole(val)}
                            placeholder="Select a role..."
                        >
                            <OptionItem label="Admin" value="admin" />
                            <OptionItem label="Editor" value="editor" />
                            <OptionItem label="Viewer" value="viewer" />
                        </SingleSelect>
                    }
                />
            </div>
        );
    }
}

export const ComplexAccessory: Story = {
    args: {
        label: "Bio",
        labelAccessory: <span className="italic text-gray-400">Optional</span>,
        footer: "Max 140 characters.",
        field: <textarea className="w-full border border-gray-300 rounded p-2 text-sm" rows={4} />
    }
}
