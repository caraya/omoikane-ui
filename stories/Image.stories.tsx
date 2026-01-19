import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../src/components/Image';
import { View } from '../src/components/View';

const meta: Meta<typeof Image> = {
  title: 'Components/Media/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

const sampleImage = "https://media.cntraveler.com/photos/654eba2546f22477d424e27e/16:9/w_2580%2Cc_limit/Kylemore-Abbey-Alex%2520Grodkiewicz-hLqJHN01XMU-unsplash.jpg";

export const Standalone: Story = {
  args: {
    src: sampleImage,
    alt: "Image from Ireland",
    width: 400,
  },
};

export const Figure: Story = {
  args: {
    src: sampleImage,
    alt: "Image from Ireland",
    useFigure: true,
    width: 400,
  },
};

export const WithCaption: Story = {
  args: {
    src: sampleImage,
    alt: "Image from Ireland",
    caption: "Image of Kylemore Abbey in Ireland, photo by Alex Grodkiewicz on Unsplash",
    width: 400,
  },
};

export const WithComplexCaption: Story = {
    args: {
      src: sampleImage,
      alt: "Building",
      width: 400,
      caption: (
          <span>
             <a href="https://media.cntraveler.com/photos/654eba2546f22477d424e27e/16:9/w_2580%2Cc_limit/Kylemore-Abbey-Alex%2520Grodkiewicz-hLqJHN01XMU-unsplash.jpg" className="text-blue-600 underline">Original</a> on Unsplash
          </span>
      )
    },
  };

export const FullWidth: Story = {
    render: (args) => (
        <View className="w-[600px] border border-gray-200 p-4"> 
            <Image {...args} />
        </View>
    ),
    args: {
        src: sampleImage,
        alt: "Full width example",
        caption: "This image scales to fit its container",
        className: "w-full"
    }
};
