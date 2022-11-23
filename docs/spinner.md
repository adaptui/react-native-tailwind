# Spinner

AdaptUI provides a Spinner Component which gives visual cues to actions that are
processing or awaiting a course change or results.

https://user-images.githubusercontent.com/35562287/203554680-4730f72f-284f-4cca-8eda-387e389cd869.mp4


#### Simple Usage

```js
import { Box, Spinner, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
      <Box style={tailwind.style("mx-5 my-5")}>
        <Spinner />
      </Box>
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Track](#track)
- [Props](#props)

## Themes

Adapt UI provides three themes for spinner: `base`, `primary`, `secondary`,
`success` and `danger`.

You can use these themed spinner components based for your specific scenarios.

https://user-images.githubusercontent.com/35562287/203555600-9f1cc3b2-6f3c-4235-93e1-13cd8c6a5be1.mp4

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Box, Spinner, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <>
      <Spinner
        style={tailwind.style("my-2")}
      />
      <Spinner
        style={tailwind.style("my-2")}
        themeColor="primary"
      />
      <Spinner
        style={tailwind.style("my-2")}
        themeColor="secondary"
      />
      <Spinner
        style={tailwind.style("my-2")}
        themeColor="success"
      />
      <Spinner
        style={tailwind.style("my-2")}
        themeColor="danger"
      />
    </>
  )
}
```
</details>

## Size

There are five different sizes for the Spinner component in Adapt UI: `xs`, `sm`,
`md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

https://user-images.githubusercontent.com/35562287/203555717-a9ed5820-e28b-4041-a576-2b67b45303b8.mp4

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Box, Spinner, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <>
      <Spinner
        style={tailwind.style("my-2")}
        size="xs"
      />
      <Spinner
        style={tailwind.style("my-2")}
        size="sm"
      />
      <Spinner
        style={tailwind.style("my-2")}
      />
      <Spinner
        style={tailwind.style("my-2")}
        size="lg"
      />
      <Spinner
        style={tailwind.style("my-2")}
        size="xl"
      />
    </>
  )
}
```
</details>

## Track

We have two different-looking spinners which have visible or transparent track of the spinner.

https://user-images.githubusercontent.com/35562287/203556438-1f2255c1-3b95-41ae-bf1e-3df05e99c3a1.mp4

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Box, Spinner, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <>
      <Spinner
        style={tailwind.style("my-2")}
        themeColor={value}
        key={index}
        track="visible"
      />
    </>
  )
}
```
</details>

## Props

| Name       | Description                        | Type                                            | Default       |
|------------|------------------------------------|-------------------------------------------------|---------------|
| size       | How large should the spinner be?   | `xs` `sm` `md` `lg` `xl`                        | `md`          |
| track      | Should spinner track be displayed? | `visible` `transparent`                         | `transparent` |
| themeColor | Spinner Theme                      | `base` `primary` `secondary` `success` `danger` | `base`        |
