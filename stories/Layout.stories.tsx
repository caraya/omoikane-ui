import type { Meta, StoryObj } from '@storybook/react';
import { Row, Column, Spring, Strut } from '../src/components/Layout';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Layout',
  component: Row,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowExample: Story = {
    render: () => (
        <Row className="bg-gray-50 p-4 rounded gap-2">
            <Button>Left</Button>
            <Spring />
            <Button>Right</Button>
        </Row>
    )
};

export const StrutExample: Story = {
    render: () => (
        <Row className="bg-gray-50 p-4 rounded">
            <Button>First</Button>
            <Strut size={32} />
            <Button>Second</Button>
        </Row>
    )
};

export const ColumnExample: Story = {
    render: () => (
        <Column className="bg-gray-50 p-4 rounded gap-2 w-48">
            <Button>Top</Button>
            <Spring />
            <Button>Bottom</Button>
        </Column>
    )
};

export const NestedLayout: Story = {
    render: () => (
        <Row className="bg-gray-50 p-4 rounded gap-2">
            <Column className="gap-2">
                <Button>Col 1</Button>
                <Button>Col 2</Button>
            </Column>
            <Spring />
            <Column className="gap-2">
                <Button>Col 3</Button>
                <Button>Col 4</Button>
            </Column>
        </Row>
    )
};
