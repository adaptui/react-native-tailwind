import { object, radios, text } from '@storybook/addon-knobs';
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
      'xl'
    )}
  />
));
avatarStories.add('With Name', () => (
  <Avatar
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
      'xl'
    )}
    name={text('name', 'Richard Hendricks')}
  />
));

avatarStories.add('With Src', () => (
  <Avatar
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
      'xl'
    )}
    src={object('src', { uri: 'https://bit.ly/ryan-florence' })}
  />
));

avatarStories.add('With Src and Name', () => (
  <Avatar
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
      'xl'
    )}
    src={object('src', { uri: 'https://bit.ly/ryan-florence' })}
    name={text('name', 'S P')}
  />
));

avatarStories.add('With Status', () => (
  <Avatar
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
      'xl'
    )}
    src={object('src', { uri: 'https://bit.ly/ryan-florence' })}
    name={text('name', 'S P')}
    status={radios(
      'status',
      {
        'active': 'active',
        'away': 'away',
        'typing-sm': 'typing-sm',
        'sleep': 'sleep',
        'typing-large': 'typing-large',
      },
      'sleep'
    )}
  />
));
