// stories/AvatarGroup.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { Avatar } from '../../avatar/Avatar';
import { AvatarSizes } from '../../avatar/avatarPropTypes';
import { AvatarGroup } from '../AvatarGroup';

const avatarProps = [
  {
    name: 'Leanne Graham',
    src: { uri: 'https://i.pravatar.cc/300?img=1' },
  },
  {
    name: 'Ervin Howell',
    src: { uri: 'https://i.pravatar.cc/300?img=11' },
  },
  {
    name: 'Clementine Bauch',
    src: { uri: 'https://i.pravatar.cc/300?img=21' },
  },
  {
    name: 'Patricia Lebsack',
    src: { uri: 'https://i.pravatar.cc/300?img=31' },
  },
  {
    name: 'Chelsey Dietrich',
    src: { uri: 'https://i.pravatar.cc/300?img=41' },
  },
  {
    name: 'Dennis Schulist',
    src: { uri: 'https://i.pravatar.cc/300?img=51' },
  },
];

const avatar_sizes: AvatarSizes[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
];

export default {
  title: 'components/AvatarGroup/Basic',
  component: AvatarGroup,
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 items-center justify-center')}>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof AvatarGroup>;

export const MaxCount: ComponentStory<typeof AvatarGroup> = () => (
  <Box>
    {avatar_sizes.map((size) => {
      return (
        <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
          <AvatarGroup circular={true} size={size} max={3}>
            {avatarProps.map((item) => (
              <Avatar src={item.src} name={item.name} key={item.name} />
            ))}
          </AvatarGroup>
        </Box>
      );
    })}
  </Box>
);

export const SquaredMaxCount: ComponentStory<typeof AvatarGroup> = () => (
  <Box>
    {avatar_sizes.map((size) => {
      return (
        <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
          <AvatarGroup circular={false} size={size} max={3}>
            {avatarProps.map((item) => (
              <Avatar src={item.src} name={item.name} key={item.name} />
            ))}
          </AvatarGroup>
        </Box>
      );
    })}
  </Box>
);

export const Default: ComponentStory<typeof AvatarGroup> = () => (
  <Box>
    {avatar_sizes.map((size) => {
      return (
        <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
          <AvatarGroup size={size}>
            {avatarProps.map((item) => (
              <Avatar src={item.src} key={item.name} />
            ))}
          </AvatarGroup>
        </Box>
      );
    })}
  </Box>
);

export const Squared: ComponentStory<typeof AvatarGroup> = () => (
  <Box>
    {avatar_sizes.map((size) => {
      return (
        <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
          <AvatarGroup circular={false} size={size}>
            {avatarProps.map((item) => (
              <Avatar src={item.src} key={item.name} />
            ))}
          </AvatarGroup>
        </Box>
      );
    })}
  </Box>
);
export const Ring: ComponentStory<typeof AvatarGroup> = () => (
  <Box>
    {avatar_sizes.map((size) => {
      return (
        <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
          <AvatarGroup circular={true} size={size} showRing max={4}>
            {avatarProps.map((item) => (
              <Avatar src={item.src} key={item.name} />
            ))}
          </AvatarGroup>
        </Box>
      );
    })}
  </Box>
);

export const SquaredRing: ComponentStory<typeof AvatarGroup> = () => (
  <Box>
    {avatar_sizes.map((size) => {
      return (
        <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
          <AvatarGroup circular={false} size={size} showRing max={4}>
            {avatarProps.map((item) => (
              <Avatar src={item.src} key={item.name} />
            ))}
          </AvatarGroup>
        </Box>
      );
    })}
  </Box>
);

export const ParentsBackgroundMatch: ComponentStory<typeof AvatarGroup> =
  () => (
    <Box
      style={tailwind.style(
        'p-5 items-start justify-center bg-blue-300 rounded-lg'
      )}
    >
      {avatar_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            <AvatarGroup
              size={size}
              showRing
              ringColor={tailwind.color('text-blue-300')}
            >
              {avatarProps.map((item) => (
                <Avatar src={item.src} key={item.name} />
              ))}
            </AvatarGroup>
          </Box>
        );
      })}
    </Box>
  );

export const SquaredParentsBackgroundMatch: ComponentStory<typeof AvatarGroup> =
  () => (
    <Box
      style={tailwind.style(
        'p-5 items-start justify-center bg-blue-300 rounded-lg'
      )}
    >
      {avatar_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            <AvatarGroup
              size={size}
              circular={false}
              showRing
              ringColor={tailwind.color('text-blue-300')}
            >
              {avatarProps.map((item) => (
                <Avatar src={item.src} key={item.name} />
              ))}
            </AvatarGroup>
          </Box>
        );
      })}
    </Box>
  );

export const ParentsBackgroundWithRing: ComponentStory<typeof AvatarGroup> =
  () => (
    <Box
      style={tailwind.style(
        'p-5 items-start justify-center bg-blue-300 rounded-lg'
      )}
    >
      {avatar_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            <AvatarGroup size={size} showRing>
              {avatarProps.map((item) => (
                <Avatar src={item.src} key={item.name} />
              ))}
            </AvatarGroup>
          </Box>
        );
      })}
    </Box>
  );
