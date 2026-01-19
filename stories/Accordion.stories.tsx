import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../src/components/Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  subcomponents: { AccordionItem } as any, // Cast to any to avoid type complexity with subcomponents
  argTypes: {
    allowMultiple: { control: 'boolean' },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Usage
export const Basic: Story = {
  args: {
    children: (
      <>
        <AccordionItem title="Section 1">
          <p className="mb-2">Content for section 1.</p>
        </AccordionItem>
        <AccordionItem title="Section 2">
          <p className="mb-2">Content for section 2. This one opens independently.</p>
        </AccordionItem>
        <AccordionItem title="Section 3">
          <p className="mb-2">Content for section 3.</p>
        </AccordionItem>
      </>
    )
  },
};

// Allow Multiple Open
export const MultipleOpen: Story = {
  args: {
    allowMultiple: true,
    children: (
      <>
        <AccordionItem title="Section 1">
          <p className="mb-2">Content for section 1.</p>
        </AccordionItem>
        <AccordionItem title="Section 2">
          <p className="mb-2">Content for section 2. This one opens independently.</p>
        </AccordionItem>
        <AccordionItem title="Section 3">
          <p className="mb-2">Content for section 3.</p>
        </AccordionItem>
      </>
    )
  },
};

