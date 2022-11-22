# Circular Progress

AdaptUI provides a component Circular Progress which is used to indicate the
progress for determinate and indeterminate processes.

There are two types of progress indicators: `determinate` and `indeterminate`.

- Determinate progress: fills the circular track with color, as the indicator
  moves from 0 to 360 degrees.

- Indeterminate progress: grows and shrinks the indicator while moving along the
  circular track.

#### Simple Usage

```js
import React from "react";
import {
  Box,
  CircularProgress,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const CircularProgressScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center items-center px-2 bg-white-900",
      )}
    >
      <CircularProgress />
    </Box>
  );
};

```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Customised](#customised)
- [Props](#props)

## Themes

Adapt UI provides two themes for Circular Progress: `base` & `primary`

You can use this themed Circular Progress based on your specific scenarios.

### Usage

```js
import { CircularProgress, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <CircularProgress />
      <CircularProgress themeColor="primary" />
    </>
  )
}

```

## Size

Adapt UI provides three different sizes for badges, namely `sm`, `md`, `lg` and
`xl`.

### Usage

```js
import React from "react";
import {
  Box,
  CircularProgress,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const CircularProgressScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center items-center px-2 bg-white-900",
      )}
    >
      <CircularProgress size="sm" />
      <CircularProgress />
      <CircularProgress size="lg" />
      <CircularProgress size="xl" />
    </Box>
  );
};

```

## Customised

We can easily customise the sizing Circular Progress component with the style
prop and setting a different color to the prop `progressTrackColor`

### Usage

```js
import React from "react";
import {
  Box,
  CircularProgress,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const CircularProgressScreen = () => {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style(
        "flex-1 justify-center items-center px-2 bg-white-900",
      )}
    >
      <CircularProgress
        style={tailwind.style("w-48 h-48")}
        themeColor="primary"
        progressTrackColor={tailwind.getColor("text-green-600")}
      />
    </Box>
  );
};

```

## Props

> Circular Progress implements Box accepting all `ViewProps`

| Name               | Description                                                                       | Type                | Default |
|--------------------|-----------------------------------------------------------------------------------|---------------------|---------|
| size               | Size of Circular Progress                                                         | `sm` `md` `lg` `xl` | `md`    |
| themeColor         | Theme of Circular Progress                                                        | `base` `primary`    | `base`  |
| strokeWidth        | Stroke Width of SVG Circle                                                        | number              | 2       |
| progressTrackColor | Active Track Color of Circle                                                      | string              |         |
| trackColor         | Inactive Track Color of Circle                                                    | string              |         |
| value              | The `value` of the progress indicator, If `null` sets it to `indeterminate` state | number              | null    |
| min                | The minimum value of the progress                                                 | number              | 0       |
| max                | The maximum value of the progress                                                 | number              | 100     |
| hint               | The hint positioned inside the circle                                             | string              |         |
