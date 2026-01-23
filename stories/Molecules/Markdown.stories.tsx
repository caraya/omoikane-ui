import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Markdown from '../../src/components/Markdown';

const meta: Meta<typeof Markdown> = {
  title: 'Components/Markdown',
  component: Markdown,
};

export default meta;
type Story = StoryObj<typeof Markdown>;

const sample = [
  '# Hello World',
  '',
  'This is a markdown playground demonstrating GFM features.',
  '',
  '- [ ] Task one',
  '- [x] Task two',
  '',
  '```js',
  "console.log('hello world')",
  '```',
  '',
  '| Col A | Col B |',
  '| ----- | ----- |',
  '| 1     | 2     |',
].join('\n');

export const Playground: Story = {
  args: {
    source: sample,
  },
};

export const WithOverrides: Story = {
  args: {
    source: sample,
    components: {
      h1: ({ children, ...props }: any) => (
        <h1 className="text-2xl text-primary-600" {...props}>
          {children}
        </h1>
      ),
      a: ({ children, ...props }: any) => (
        <a className="underline text-primary-600" {...props}>
          {children}
        </a>
      ),
    },
  },
};
