# Avatar

`Avatar` component provides a way to display profile pictures, initials or a
fallback icon to represent a user

## Table of Contents

- [Usage](#usage)
- [Props](#props)

## Usage

```
import React from 'react';
import { Avatar, Box, useTheme } from '@adaptui/react-native-tailwind';
import { SafeAreaView } from 'react-native';

export default function AvatarScreen() {
  const tailwind = useTheme();
  return (
    <SafeAreaView
      style={tailwind.style('flex-1 justify-center items-center bg-white-900')}>
      <Avatar style={tailwind.style('my-1')} />
      <Avatar style={tailwind.style('my-1')} squared />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=9' }}
      />
      <Avatar name="Sandeep Prabhakaran" style={tailwind.style('my-1')} />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=49' }}
        status="active"
      />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=39' }}
        status="away"
      />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=6' }}
        status="sleep"
      />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=19' }}
        status="typing"
      />
    </SafeAreaView>
  );
}

```

[![Edit CodeSandbox](https://img.shields.io/badge/Avatar-Open%20On%20Expo-%230971f1?style=for-the-badge&logo=expo&labelColor=151515)](https://snack.expo.dev/@timelessco/avatar-component---adaptui)

## Props

> Avatar implements Box accepting all `ViewProps`

| Name              | Description                                                                                      | Type                                         | Default |
| ----------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------- |
| size              | How large should avatar be? Defaults to 'md'                                                     | `xs` `sm` `md` `lg` `xl` `2xl` `3xl`         | `xl`    |
| src               | The image src attribute                                                                          | `ImageSourcePropType` from React Native      |         |
| imageProps        | Image Props                                                                                      | `ImageProps` from React Native except source |         |
| squared           | If true, Avatar gets rounded corners                                                             | boolean                                      |         |
| status            | Shows AvatarBadge with the given type                                                            | `active` `away` `sleep` `typing` or `null`   | `null`  |
| parentsBackground | Color to match the background in StatusIndicator's Background Color & StatusIndicator Ring Color | string                                       |         |
| name              | Name prop used for alt & calculate placeholder initials.                                         | string                                       |         |
