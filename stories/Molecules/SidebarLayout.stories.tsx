import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SidebarLayout from '../../src/components/molecules/SidebarLayout';
import { Tabs } from '../../src/components/Tabs';
import { Toolbar } from '../../src/components/Toolbar';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Molecules/SidebarLayout',
  component: SidebarLayout,
};

export default meta;
type Story = StoryObj<typeof SidebarLayout>;

export const Playground: Story = {
  args: {
    sidebar: (
      <div>
        <p className="font-semibold">Navigation</p>
        <ul className="mt-2 space-y-2">
          <li className="text-sm">Overview</li>
          <li className="text-sm">Reports</li>
          <li className="text-sm">Settings</li>
        </ul>
      </div>
    ),
    toolbar: (
      <Toolbar.Group>
        <Toolbar.Button>New</Toolbar.Button>
      </Toolbar.Group>
    ),
    tabs: (
      <Tabs defaultIndex={0}>
        <Tabs.List className="flex gap-2">
          <Tabs.Tab index={0} className="px-3 py-1 rounded bg-gray-100">Tab A</Tabs.Tab>
          <Tabs.Tab index={1} className="px-3 py-1 rounded">Tab B</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel index={0}>Panel A content</Tabs.Panel>
          <Tabs.Panel index={1}>Panel B content</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    ),
  },
};
