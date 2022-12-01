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

> Make sure you have the latest
> `react` `react-native` `react-native-reanimated` `react-native-gesture-handler` is
> installed.

> Also make sure to wrap your App with `GestureHandlerRootView` from
> `react-native-gesture-handler`, and `AdaptUIProvider` from
> `@adaptui/react-native-tailwind`

```jsx
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AdaptUIProvider } from "@adaptui/react-native-tailwind";
import tailwind from "twrnc";

const App = () => {
  return (
    <GestureHandlerRootView style={tailwind.style("flex-1")}>
      <SafeAreaView style={tailwind.style(`flex-1 android:mt-[${StatusBar.currentHeight || 0}px]`)}>
        <AdaptUIProvider>
          // Your App Root here
        </AdaptUIProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

```

## Simple Usage

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

- [Avatar Group](avatar-group.md)
- [Badge](badge.md)
- [Button](button.md)
- [Checkbox](checkbox.md)
- [Checkbox Group](checkbox-group.md)
- [Circular Progress](circular-progress.md)
- [Input](input.md)
- [Meter](meter.md)
- [Progress Bar](progress-bar.md)
- [Radio](radio.md)
- [Slider](slider.md)
- [Spinner](spinner.md)
- [Switch](switch.md)
- [Tag](tag.md)
- [Tooltip](tooltip.md)
