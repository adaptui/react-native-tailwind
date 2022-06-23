# Avatar Group

`Avatar Group` component provides a way to stack display profile pictures,
initials or a fallback icon to represent a user as a group

- Use the `max` prop to limit the no of avatars to show. This will truncate the
  avatars and show a "+X" value (where X is the remaining avatars).
- To size all the avatars equally, pass the `size` prop.

#### Simple Usage

```
import { AvatarGroup, Avatar } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <>
        <AvatarGroup>
          <Avatar src={{ uri: "https://i.pravatar.cc/300??img=6" }} />
          <Avatar src={{ uri: "https://i.pravatar.cc/300??img=13" }} />
          <Avatar src={{ uri: "https://i.pravatar.cc/300??img=25" }} />
          <Avatar src={{ uri: "https://i.pravatar.cc/300??img=33" }} />
          <Avatar src={{ uri: "https://i.pravatar.cc/300??img=45" }} />
        </AvatarGroup>
      </>
  )
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
