import { boolean, object, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Avatar, Box } from 'react-native-system';

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
