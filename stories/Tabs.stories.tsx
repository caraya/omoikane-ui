import React, { useState } from 'react';
import { Tabs } from '../src/components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

export const Default = () => (
  <Tabs defaultIndex={0}>
    <Tabs.List className="flex gap-2 border-b">
      <Tabs.Tab index={0} className="px-4 py-2">First</Tabs.Tab>
      <Tabs.Tab index={1} className="px-4 py-2">Second</Tabs.Tab>
      <Tabs.Tab index={2} className="px-4 py-2">Third</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panels>
      <Tabs.Panel index={0} className="p-4">Content for first tab.</Tabs.Panel>
      <Tabs.Panel index={1} className="p-4">Content for second tab.</Tabs.Panel>
      <Tabs.Panel index={2} className="p-4">Content for third tab.</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);

export const Controlled = (args: { initial?: number }) => {
  const [index, setIndex] = useState<number>(args.initial ?? 0);
  return (
    <Tabs value={index} onChange={setIndex}>
      <Tabs.List className="flex gap-2 border-b">
        <Tabs.Tab index={0} className="px-4 py-2">First</Tabs.Tab>
        <Tabs.Tab index={1} className="px-4 py-2">Second</Tabs.Tab>
        <Tabs.Tab index={2} className="px-4 py-2">Third</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panels>
        <Tabs.Panel index={0} className="p-4">Controlled content A (index {index})</Tabs.Panel>
        <Tabs.Panel index={1} className="p-4">Controlled content B (index {index})</Tabs.Panel>
        <Tabs.Panel index={2} className="p-4">Controlled content C (index {index})</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};
