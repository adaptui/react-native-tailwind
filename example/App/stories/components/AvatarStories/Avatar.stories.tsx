import {
  boolean,
  color,
  number,
  object,
  radios,
  text,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Avatar, Box, AvatarGroup } from 'react-native-system';
import tailwind from 'twrnc';

const avatarStories = storiesOf('Avatar', module);
avatarStories.addDecorator((getStory) => (
  <Box
    style={{
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {getStory()}
  </Box>
));

avatarStories.add('Default', () => (
  <Avatar
    circular={boolean('circular', true)}
    size={radios(
      'size',
      {
        'xs': 'xs',
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
        '2xl': '2xl',
        '3xl': '3xl',
      },
      '3xl'
    )}
  />
));
avatarStories.add('With Name', () => (
  <Avatar
    circular={boolean('circular', true)}
    size={radios(
      'size',
      {
        'xs': 'xs',
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
        '2xl': '2xl',
        '3xl': '3xl',
      },
      '3xl'
    )}
    name={text('name', 'Richard Hendricks')}
  />
));

avatarStories.add('With Src', () => (
  <Avatar
    circular={boolean('circular', true)}
    size={radios(
      'size',
      {
        'xs': 'xs',
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
        '2xl': '2xl',
        '3xl': '3xl',
      },
      '3xl'
    )}
    src={object('src', { uri: 'https://bit.ly/ryan-florence' })}
  />
));

avatarStories.add('With Src and Name', () => (
  <Avatar
    circular={boolean('circular', true)}
    size={radios(
      'size',
      {
        'xs': 'xs',
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
        '2xl': '2xl',
        '3xl': '3xl',
      },
      '3xl'
    )}
    src={object('src', { uri: 'https://bit.ly/ryan-florence' })}
    name={text('name', 'S P')}
  />
));

avatarStories.add('With Status', () => (
  <Avatar
    circular={boolean('circular', true)}
    size={radios(
      'size',
      {
        'xs': 'xs',
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
        '2xl': '2xl',
        '3xl': '3xl',
      },
      '3xl'
    )}
    src={object('src', { uri: 'https://bit.ly/ryan-florence' })}
    name={text('name', 'S P')}
    status={radios(
      'status',
      {
        active: 'active',
        away: 'away',
        sleep: 'sleep',
        typing: 'typing',
      },
      'typing'
    )}
  />
));

avatarStories.add('With Status With Background', () => (
  <Box
    style={tailwind.style('bg-gray-200 w-30 h-30 justify-center items-center')}
  >
    <Avatar
      circular={boolean('circular', true)}
      size={radios(
        'size',
        {
          'xs': 'xs',
          'sm': 'sm',
          'md': 'md',
          'lg': 'lg',
          'xl': 'xl',
          '2xl': '2xl',
          '3xl': '3xl',
        },
        '3xl'
      )}
      parentsBackground={color(
        'parentsBackground',
        tailwind.color('bg-gray-200') || 'white'
      )}
      src={object('src', { uri: 'https://bit.ly/ryan-florence' })}
      name={text('name', 'S P')}
      status={radios(
        'status',
        {
          active: 'active',
          away: 'away',
          sleep: 'sleep',
          typing: 'typing',
        },
        'active'
      )}
    />
  </Box>
));

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

avatarStories.add('Avatar Group', () => (
  <Box>
    <AvatarGroup
      size={radios(
        'size',
        {
          'xs': 'xs',
          'sm': 'sm',
          'md': 'md',
          'lg': 'lg',
          'xl': 'xl',
          '2xl': '2xl',
          '3xl': '3xl',
        },
        'lg'
      )}
      max={number('max', 5)}
      circular={boolean('circular', false)}
      showRing={boolean('showRing', false)}
      ringColor={color('ringColor', 'white')}
    >
      {avatarProps.map((item) => (
        <Avatar key={item.name} name={item.name} src={item.src} />
      ))}
    </AvatarGroup>
  </Box>
));
