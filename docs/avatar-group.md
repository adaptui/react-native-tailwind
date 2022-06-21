# Avatar Group

`Avatar Group` component provides a way to stack display profile pictures,
initials or a fallback icon to represent a user as a group

- Use the `max` prop to limit the no of avatars to show. This will truncate the
  avatars and show a "+X" value (where X is the remaining avatars).
- To size all the avatars equally, pass the `size` prop.

## Table of Contents

- [Usage](#usage)
- [Props](#props)

## Usage

```
import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  useTheme,
} from "@adaptui/react-native-tailwind";

export default function AvatarGroupScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <AvatarGroup size="md">
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
      <AvatarGroup size="xl">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
      <AvatarGroup size="2xl">
        <Avatar name={"Navin Moorthy"} />
        <Avatar name={"Karthik Balasubramanian"} />
        <Avatar name={"Sandeep Prabhakaran"} />
        <Avatar name={"Abhishek MG"} />
        <Avatar name={"Udhaya Chandran"} />
      </AvatarGroup>
      <AvatarGroup size="2xl">
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
      <AvatarGroup size="2xl" squared>
        <Avatar name={"Navin Moorthy"} />
        <Avatar name={"Karthik Balasubramanian"} />
        <Avatar name={"Sandeep Prabhakaran"} />
        <Avatar name={"Abhishek MG"} />
        <Avatar name={"Udhaya Chandran"} />
      </AvatarGroup>
      <AvatarGroup max={2}>
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
      <AvatarGroup max={3} squared>
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
      <AvatarGroup squared>
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
        <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
      </AvatarGroup>
    </Box>
  );
}

```

[![Edit CodeSandbox](https://img.shields.io/badge/Avatar_Group-Open%20On%20Expo-%230971f1?style=for-the-badge&logo=expo&labelColor=151515)](https://snack.expo.dev/@timelessco/avatargroup-component---adaptui)

## Props

> Avatar Group also implements Box accepting all `ViewProps`

| Name      | Description                                                                   | Type                                 | Default |
| --------- | ----------------------------------------------------------------------------- | ------------------------------------ | ------- |
| size      | How large should avatar be? Defaults to 'md'                                  | `xs` `sm` `md` `lg` `xl` `2xl` `3xl` | `xl`    |
| max       | Maximum number of avatars to be displayed within the group.                   | number or null                       |         |
| squared   | If true, Avatar gets rounded corners                                          | boolean                              |         |
| showRing  | If true, the Avatar will show a border around it. Best for a group of avatars | boolean                              | true    |
| ringColor | Color of the border to match it's parent background.                          | string                               |         |
