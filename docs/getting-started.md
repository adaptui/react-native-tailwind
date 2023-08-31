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

const AppContainer = () => {
  const tailwind = useTheme();

  return (
    <GestureHandlerRootView style={tailwind.style("flex-1")}>
      <NavigationContainer>
        <SafeAreaProvider>
          // your app here
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <AdaptUIProvider>
      <AppContainer />
    </AdaptUIProvider>
  );
};

export default App;

```

## Further Instructions

### Fonts Loading (Android)

Our components look well with the Inter font on Android.

You can pick the fonts from [here](../font-assets/)

And link and load it up in your React Native project using [expo-font](https://docs.expo.dev/versions/latest/sdk/font/) library if using Expo.

The library works well with bare React Native workflow too.

Check out blogs on getting to know about [Adding Fonts to React Native](https://medium.com/@_iam_karthik/list/adding-fonts-to-react-native-93aee6bace40) in our [Publication](https://medium.com/timeless).

### Haptics

Haptics is a technology that allows devices to provide tactile feedback to users, simulating the sense of touch. So it can be used to enhance the user experience in a variety of ways, such as providing feedback when a button is pressed, alerting the user to an event, or guiding the user through a task.

In AdaptUI we have enabled the Haptics to all our Tappable components (Button, Tag, Radio, Checkbox and Switch) through [expo-haptics](https://docs.expo.dev/versions/latest/sdk/haptics/).

You will have to install this as a dependency to get your haptics working on our Tappable components.

You can use the haptics through our hook [`useHaptics`](../src//utils//useHaptic.ts)

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
