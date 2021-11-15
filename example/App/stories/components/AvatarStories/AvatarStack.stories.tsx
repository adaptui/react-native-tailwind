import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Avatar, AvatarGroup, Box } from 'react-native-system';

const avatarStackStories = storiesOf('Avatar Stack', module);

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

avatarStackStories.add('Avatar Stack Squared', () => (
  <Box style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30 }}>
    <AvatarGroup circular={false} size="xs" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup circular={false} size="sm" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup circular={false} size="md" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup circular={false} size="lg" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup circular={false} size="xl" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup circular={false} size="2xl" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup circular={false} size="3xl" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
  </Box>
));

avatarStackStories.add('Avatar Stack Circular', () => (
  <Box style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30 }}>
    <AvatarGroup size="xs" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup size="sm" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup size="md" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup size="lg" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup size="xl" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup size="2xl" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
    <AvatarGroup size="3xl" max={number('max', 3)}>
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
  </Box>
));
