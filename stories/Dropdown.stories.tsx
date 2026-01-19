import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelect, OptionItem, ActionMenu, ActionItem } from '../src/components/Dropdown';
import { View } from '../src/components/View';
import { useState } from 'react';

const meta: Meta<typeof SingleSelect> = {
  title: 'Components/Dropdown',
  component: SingleSelect, // Default component
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// --- SingleSelect Stories ---

export const SingleSelectStory: StoryObj<typeof SingleSelect> = {
  render: () => {
    const [value, setValue] = useState("b");
    return (
      <View className="h-40 w-full max-w-xs">
        <SingleSelect 
            onChange={setValue} 
            selectedValue={value}
            placeholder="Choose a letter"
        >
          <OptionItem label="Option A" value="a" />
          <OptionItem label="Option B" value="b" />
          <OptionItem label="Option C (Disabled)" value="c" disabled />
          <OptionItem label="Option D" value="d" />
        </SingleSelect>
      </View>
    );
  },
  name: "Single Select"
};

export const SingleSelectEmpty: StoryObj<typeof SingleSelect> = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <View className="h-40 w-full max-w-xs">
        <SingleSelect 
            onChange={setValue} 
            selectedValue={value}
            placeholder="Select a generic item..."
        >
          <OptionItem label="Hydrogen" value="h" />
          <OptionItem label="Helium" value="he" />
          <OptionItem label="Lithium" value="li" />
        </SingleSelect>
      </View>
    );
  },
  name: "Single Select (Placeholder)"
};


// --- ActionMenu Stories ---

export const ActionMenuStory: StoryObj<typeof ActionMenu> = {
  render: () => {
    return (
      <View className="h-40 flex justify-center">
        <ActionMenu menuText="Actions">
          <ActionItem label="Edit File" onClick={() => alert("Edit")} />
          <ActionItem label="Download PDF" onClick={() => alert("Download")} />
          <ActionItem label="Delete" disabled onClick={() => alert("Delete")} />
          <ActionItem label="Go to Google" href="https://google.com" />
        </ActionMenu>
      </View>
    );
  },
  name: "Action Menu"
};

export const ActionMenuRightAligned: StoryObj<typeof ActionMenu> = {
  render: () => {
    return (
        <View className="h-40 flex justify-end pr-10">
            <ActionMenu menuText="User Settings" align="right">
                <ActionItem label="Profile" onClick={() => {}} />
                <ActionItem label="Account" onClick={() => {}} />
                <ActionItem label="Log Out" onClick={() => {}} />
            </ActionMenu>
        </View>
    )
  },
  name: "Action Menu (Right Aligned)"
};
