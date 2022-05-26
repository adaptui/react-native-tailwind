// stories/Avatar.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { Avatar } from '../Avatar';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Meta = ComponentMeta<typeof Avatar>;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type AvatarStoryType = ComponentStory<typeof Avatar>;

const avatar_sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
const avatar_status = ['active', 'away', 'sleep', 'typing'];

export default {
  title: 'components/Avatar/Basic',
  component: Avatar,
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 items-center justify-center')}>
        <Story />
      </Box>
    ),
  ],
  args: {
    size: avatar_sizes[4],
  },
  argTypes: {
    size: {
      options: avatar_sizes,
      control: { type: 'radio' },
    },
    status: {
      options: avatar_status,
      control: { type: 'radio' },
    },
    circular: {
      control: { type: 'boolean' },
    },
    parentsBackground: {
      control: { type: 'color' },
    },
  },
} as Meta;

export const Default: AvatarStoryType = (args) => <Avatar {...args} />;

Default.args = {
  size: 'xl',
};

export const Circular: AvatarStoryType = (args) => <Avatar {...args} />;

Circular.args = {
  size: 'xl',
  circular: true,
};

export const Name: AvatarStoryType = (args) => <Avatar {...args} />;

Name.args = {
  size: 'xl',
  circular: true,
  name: 'Richard Hendricks',
};

export const Image: AvatarStoryType = (args) => <Avatar {...args} />;

Image.args = {
  size: 'xl',
  circular: true,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
};

export const ActiveStatus: AvatarStoryType = (args) => <Avatar {...args} />;

ActiveStatus.args = {
  size: 'xl',
  circular: true,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'active',
};

export const AwayStatus: AvatarStoryType = (args) => <Avatar {...args} />;

AwayStatus.args = {
  size: 'xl',
  circular: true,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'away',
};

export const SleepStatus: AvatarStoryType = (args) => <Avatar {...args} />;

SleepStatus.args = {
  size: 'xl',
  circular: true,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'sleep',
};

export const TypingStatus: AvatarStoryType = (args) => <Avatar {...args} />;

TypingStatus.args = {
  size: 'xl',
  circular: true,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'typing',
};

export const ActiveSquareStatus: AvatarStoryType = (args) => (
  <Avatar {...args} />
);

ActiveSquareStatus.args = {
  size: 'xl',
  circular: false,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'active',
};

export const AwaySquareStatus: AvatarStoryType = (args) => <Avatar {...args} />;

AwaySquareStatus.args = {
  size: 'xl',
  circular: false,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'away',
};

export const SleepSquareStatus: AvatarStoryType = (args) => (
  <Avatar {...args} />
);

SleepSquareStatus.args = {
  size: 'xl',
  circular: false,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'sleep',
};

export const TypingSquareStatus: AvatarStoryType = (args) => (
  <Avatar {...args} />
);

TypingSquareStatus.args = {
  size: 'xl',
  circular: false,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'typing',
};

export const ParentsBackgroundMatch: AvatarStoryType = (args) => (
  <Box
    style={tailwind.style(
      'h-20 w-20 items-center justify-center bg-blue-300 rounded-lg'
    )}
  >
    <Avatar {...args} />
  </Box>
);

ParentsBackgroundMatch.args = {
  size: 'xl',
  circular: false,
  name: 'Richard Hendricks',
  src: { uri: 'https://i.pravatar.cc/300??img=61' },
  status: 'active',
  parentsBackground: tailwind.color('text-blue-300'),
};
