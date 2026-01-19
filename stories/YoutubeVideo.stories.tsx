import type { Meta, StoryObj } from '@storybook/react';
import { YoutubeVideo } from '../src/components/YoutubeVideo';
import { View } from '../src/components/View';

const meta: Meta<typeof YoutubeVideo> = {
  title: 'Components/Media/YoutubeVideo',
  component: YoutubeVideo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof YoutubeVideo>;

export const Default: Story = {
  args: {
    videoId: 'lyFmdI8LLT4', // The ID from the user's example
    width: 560,
    height: 315,
  },
};

export const Responsive: Story = {
  name: 'Responsive (Full Width)',
  render: (args) => (
    <View className="w-[800px] border border-gray-200 p-4">
        {/* Aspect Ratio Trick or class */}
        <YoutubeVideo {...args} className="w-full h-auto aspect-video" />
    </View>
  ),
  args: {
    videoId: 'dQw4w9WgXcQ',
    width: '100%',
    height: '100%', 
  },
};
