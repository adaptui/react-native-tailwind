# Getting Started

Collection of components that are accessible, composable, customizable from low
level to build your own UI & Design System

## :rocket: Installation

```sh
# npm
npm install @adaptui/react-native-tailwind

# Yarn
yarn add @adaptui/react-native-tailwind
```

> Make sure
> `react react-native react-native-reanimated react-native-gesture-handler` is
> installed.

> Also make sure to wrap your App with `GestureHandlerRootView` from
> `react-native-gesture-handler`, and `TailwindThemeProvider` from
> `@adaptui/react-native-tailwind`

## Usage

Code below will render an [Avatar](./Avatar.md)

See [Avatar](./Avatar.md) docs for more info.

```jsx
import React from "react";
import { Avatar, useTheme } from "@adaptui/react-native-tailwind";

function AvatarComponentScreen() {
  const tailwind = useTheme();

  return (
    <View
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <Avatar style={tailwind.style("my-1")} />
    </View>
  );
}
```

## Component Docs

- [Avatar](avatar.md)
- [AvatarGroup](avatar-group.md)
- [Badge](badge.md)
