# Progress

AdaptUI provides a Progress Component which can be used to give user feedback
for status of a task

#### Simple Usage

```js
import { ProgressBar } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <ProgressBar />
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Props](#props)

## Themes

Adapt UI provides two themes for the Progress Bar Component: `base` & `primary`

### Usage

```js
import { ProgressBar, useTheme } from "@adaptui/react-native-tailwind"
export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <ProgressBar />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <ProgressBar themeColor="primary" />
      </Box>
    </>
  )
}
```

## Size

There are four different sizes for Progress Bar Component in Adapt UI: `sm`,
`md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```js
import { ProgressBar, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <ProgressBar size="sm" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <ProgressBar />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <ProgressBar size="lg" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <ProgressBar size="xl" />
      </Box>
    </>
  )
}

```

## Props

> ProgressBar implements Box accepting all `ViewProps`

| Name       | Description                                        | Type                          | Default |
| ---------- | -------------------------------------------------- | ----------------------------- | ------- |
| size       | The size of the Progress Bar Component             | `sm` `md` `lg` `xl`           | `lg`    |
| themeColor | The theme of the Progress Bar Component            | `base` `primary`              | `base`  |
| value      | The progress value, if null makes it indeterminate | number                        | null    |
| trackStyle | The style of the active track bar                  | `ViewStyle` from React Native | {}      |
| label      | The Label for Progress Bar                         | string                        |         |
| hint       | The Hint for Progress Bar                          | string                        |         |
