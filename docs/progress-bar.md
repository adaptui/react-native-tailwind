# Progress

AdaptUI provides a Progress Component which can be used to give user feedback
for status of a task.

https://user-images.githubusercontent.com/35562287/203492661-8fad9be6-37cf-4386-8b4c-08ad91486cd8.mp4

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
- [Indeterminate](#indeterminate)

## Themes

Adapt UI provides two themes for the Progress Bar Component: `base` & `primary`

![simulator_screenshot_1D119F80-E17E-428E-AC6A-6B6927771F8F](https://user-images.githubusercontent.com/35562287/203491106-e81440d3-218b-4b84-8084-7e85123d4df8.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
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
</details>

## Size

There are four different sizes for Progress Bar Component in Adapt UI: `sm`,
`md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

![Simulator Screen Shot - iPhone 14 Pro - 2022-11-23 at 12 53 50](https://user-images.githubusercontent.com/35562287/203491592-9002a56a-f422-4520-9fcd-ba6356f46d56.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
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
</details>

## Indeterminate

By default the `<ProgressBar />` component shows indeterminate state of loading when the `value` prop is not set. 

https://user-images.githubusercontent.com/35562287/203492843-c93ff37d-e6dc-4811-a9aa-ae330a9ccc27.mp4

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { ProgressBar, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <ProgressBar label="Preparing your plan" />
      </Box>
    </>
  )
}

```
</details>

## Props

> ProgressBar implements Box accepting all `ViewProps`

| Name       | Description                                        | Type                          | Default |
|------------|----------------------------------------------------|-------------------------------|---------|
| size       | The size of the Progress Bar Component             | `sm` `md` `lg` `xl`           | `lg`    |
| themeColor | The theme of the Progress Bar Component            | `base` `primary`              | `base`  |
| value      | The progress value, if null makes it indeterminate | number                        | null    |
| trackStyle | The style of the active track bar                  | `ViewStyle` from React Native | {}      |
| label      | The Label for Progress Bar                         | string                        |         |
| hint       | The Hint for Progress Bar                          | string                        |         |
