# Spinner

AdaptUI provides a Spinner Component which gives visual cues to actions that are
processing or awaiting a course change or results.

#### Simple Usage

```
import {
  Box,
  Spinner,
  useTheme,
} from "@adaptui/react-native-tailwind";

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
- [Props](#props)

## Themes

Adapt UI provides three themes for spinner: `base`, `primary`, `secondary`,
`success` and `danger`.

You can use these themed spinner components based for your specific scenarios.

### Usage

```
import {
  Box,
  Slider,
  useTheme,
} from "@adaptui/react-native-tailwind";

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

## Size

There are five different sizes for the slider component in Adapt UI: `xs`, `sm`,
`md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```
import {
  Box,
  Slider,
  useTheme,
} from "@adaptui/react-native-tailwind";

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

## Props

| Name       | Description                        | Type                                            | Default       |
| ---------- | ---------------------------------- | ----------------------------------------------- | ------------- |
| size       | How large should the spinner be?   | `xs` `sm` `md` `lg` `xl`                        | `md`          |
| track      | Should spinner track be displayed? | `visible` `transparent`                         | `transparent` |
| themeColor | Spinner Theme                      | `base` `primary` `secondary` `success` `danger` | `base`        |
