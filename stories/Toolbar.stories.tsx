import React from 'react';
import Toolbar from '../src/components/Toolbar';
import { FileText, Pencil, Gear, Question } from '@phosphor-icons/react';

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  argTypes: {
    dense: { control: 'boolean' },
    orientation: { control: { type: 'inline-radio', options: ['horizontal', 'vertical'] } },
    showIcons: { control: 'boolean' },
  },
};

const Template = (args: any) => {
  const { dense, orientation, showIcons } = args;
  return (
    <div className="p-4">
      <Toolbar dense={dense} orientation={orientation} className="border rounded p-2">
        <Toolbar.Group>
          <Toolbar.Button aria-label="File" className="flex items-center gap-2">
            {showIcons ? <FileText size={16} /> : null}
            <span>File</span>
          </Toolbar.Button>
          <Toolbar.Button aria-label="Edit" className="flex items-center gap-2">
            {showIcons ? <Pencil size={16} /> : null}
            <span>Edit</span>
          </Toolbar.Button>
          <Toolbar.Button aria-label="View" className="flex items-center gap-2">
            {showIcons ? <Gear size={16} /> : null}
            <span>View</span>
          </Toolbar.Button>
        </Toolbar.Group>

        <div style={{ flex: 1 }} />

        <Toolbar.Group>
          <Toolbar.Button aria-label="Help" className="flex items-center gap-2">
            {showIcons ? <Question size={16} /> : null}
            <span>Help</span>
          </Toolbar.Button>
        </Toolbar.Group>
      </Toolbar>
    </div>
  );
};

export const AppMenu = Template.bind({});
AppMenu.args = { dense: false, orientation: 'horizontal', showIcons: true };

export const Default = Template.bind({});
Default.args = { dense: false, orientation: 'horizontal', showIcons: false };

export const Dense = Template.bind({});
Dense.args = { dense: true, orientation: 'horizontal', showIcons: false };
