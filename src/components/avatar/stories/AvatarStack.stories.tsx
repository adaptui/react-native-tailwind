// stories/AvatarStack.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { AvatarSizes, AvatarStatusType } from '../avatarPropTypes';
import AvatarBasic from './AvatarBasic.components';

type Meta = ComponentMeta<typeof AvatarBasic>;
type AvatarStoryType = ComponentStory<typeof AvatarBasic>;

const avatar_sizes: AvatarSizes[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
];
const avatar_status: AvatarStatusType[] = ['active', 'away', 'sleep', 'typing'];

export default {
  title: 'components/Avatar/Stack',
  component: AvatarBasic,
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 items-center justify-center')}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Default: AvatarStoryType = () => {
  return (
    <Box>
      {avatar_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            <Box style={tailwind.style('m-2')}>
              <AvatarBasic size={size} />
            </Box>
            {avatar_status.map((status) => {
              return (
                <Box key={status} style={tailwind.style('m-2')}>
                  <AvatarBasic size={size} status={status} />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const Circular: AvatarStoryType = () => {
  return (
    <Box>
      {avatar_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            <Box style={tailwind.style('m-2')}>
              <AvatarBasic circular size={size} />
            </Box>
            {avatar_status.map((status) => {
              return (
                <Box key={status} style={tailwind.style('m-2')}>
                  <AvatarBasic circular size={size} status={status} />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const WithName: AvatarStoryType = () => {
  return (
    <Box>
      {avatar_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            <Box style={tailwind.style('m-2')}>
              <AvatarBasic
                name="Karthik Balasubramanian"
                circular
                size={size}
              />
            </Box>
            {avatar_status.map((status) => {
              return (
                <Box key={status} style={tailwind.style('m-2')}>
                  <AvatarBasic
                    name="Karthik Balasubramanian"
                    circular
                    size={size}
                    status={status}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const Image: AvatarStoryType = () => {
  return (
    <Box>
      {avatar_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            <Box style={tailwind.style('m-2')}>
              <AvatarBasic
                name="Karthik Balasubramanian"
                src={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                circular
                size={size}
              />
            </Box>
            {avatar_status.map((status) => {
              return (
                <Box key={status} style={tailwind.style('m-2')}>
                  <AvatarBasic
                    name="Karthik Balasubramanian"
                    src={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                    circular
                    size={size}
                    status={status}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
