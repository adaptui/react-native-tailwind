# Avatar

Adapt UI `Avatar` component provides a way to display profile pictures, initials or a
fallback icon to represent a user

![simulator_screenshot_DB8EEAB1-D0D1-48F6-8495-49DFC12D17E2](https://user-images.githubusercontent.com/35562287/203246134-bc0f262f-8bfd-4f86-8e56-f83c337c26b1.png)

#### Simple Usage

```js
import { Avatar } from "@adaptui/react-native-tailwind";
export default function App() {
  return <Avatar src={{ uri: "https://i.pravatar.cc/300??img=39" }} />;
}
```

## Table of contents

- [Size](size)
- [Status](status)
- [Squared](squared)
- [Props](props)

## Size

Adapt UI  provides seven different sizes for Avatar, namely `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`/

![simulator_screenshot_08644040-F280-4EDE-89A0-F93B6AA2BED0](https://user-images.githubusercontent.com/35562287/203247187-81cc0c3a-ffa8-4562-98b2-8966ca2c7598.png)

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js
import { Avatar, useTheme } from "@adaptui/react-native-tailwind";
export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Avatar size="xs"  src={{ uri: "https://i.pravatar.cc/300??img=39" }}/> 
      <Avatar size="sm"  src={{ uri: "https://i.pravatar.cc/300??img=39" }}/> 
      <Avatar size="md" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar size="lg" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar size="2xl" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar size="3xl" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
    </>
  );
}
```

</details>

## Status

Adapt UI  provides four different options to convey the status for Avatar, namely `active`, `away`, `sleep`, & `typing`.

![simulator_screenshot_AF574547-68C3-4E75-8C71-55AEC5D7456B](https://user-images.githubusercontent.com/35562287/203248282-99ff2518-885e-422b-bbc3-b61ea9f81217.png)

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js
import { Avatar, useTheme } from "@adaptui/react-native-tailwind";
export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Avatar status="active" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar status="away" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar status="sleep" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar status="typing" src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
    </>
  );
}
```

</details>

## Squared

Adapt UI  provides two different options to style the Avatar, namely rounded and squared.

![simulator_screenshot_9A9D130D-937B-481C-9EA8-82C2132E0D03](https://user-images.githubusercontent.com/35562287/203249914-7b308e1d-fb19-4467-b203-6fadd084b361.png)


<details>
<summary>
  <h3>Usage</h3>
</summary>

```js
import { Avatar, useTheme } from "@adaptui/react-native-tailwind";
export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Avatar squared src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
      <Avatar src={{ uri: "https://i.pravatar.cc/300??img=39" }} />
    </>
  );
}
```

</details>

[![Edit CodeSandbox](https://img.shields.io/badge/Avatar-Open%20On%20Expo-%230971f1?style=for-the-badge&logo=expo&labelColor=151515)](https://snack.expo.dev/@timelessco/avatar-component---adaptui)

## Props

> Avatar implements Box accepting all `ViewProps`

| Name              | Description                                                                                      | Type                                         | Default |
|-------------------|--------------------------------------------------------------------------------------------------|----------------------------------------------|---------|
| size              | How large should avatar be? Defaults to 'md'                                                     | `xs` `sm` `md` `lg` `xl` `2xl` `3xl`         | `xl`    |
| src               | The image src attribute                                                                          | `ImageSourcePropType` from React Native      |         |
| imageProps        | Image Props                                                                                      | `ImageProps` from React Native except source |         |
| squared           | If true, Avatar gets rounded corners                                                             | boolean                                      |         |
| status            | Shows AvatarBadge with the given type                                                            | `active` `away` `sleep` `typing` or `null`   | `null`  |
| parentsBackground | Color to match the background in StatusIndicator's Background Color & StatusIndicator Ring Color | string                                       |         |
| name              | Name prop used for alt & calculate placeholder initials.                                         | string                                       |         |
