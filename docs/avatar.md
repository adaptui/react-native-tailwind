# Avatar

`Avatar` component provides a way to display profile pictures, initials or a
fallback icon to represent a user

#### Simple Usage

```
import { Avatar } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Avatar src={{ uri: 'https://i.pravatar.cc/300??img=39' }} />
  )
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
