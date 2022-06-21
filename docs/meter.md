# Meter

AdaptUI provides a Meter Component which can be used to define a scalar
measurement within a known range, or a fractional value.

#### Simple Usage

```
import { Meter } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Meter intervals={3} value={0.55} />
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Props](#props)

## Themes

Adapt UI provides three themes for the Meter Component: `base`, `primary` and
`success`

### Usage

```
import { Input, Search, Icon } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Meter />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Meter themeColor="primary" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Meter themeColor="success" />
      </Box>
    </>
  )
}

```

## Size

There are four different sizes for Meter Component in Adapt UI: `sm`, `md`, `lg`
& `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```
import { Input, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Meter size="sm" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Meter />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Meter size="lg" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Meter size="xl" />
      </Box>
    </>
  )
}

```

## Props

| Name        | Description                                                                                                                     | Type                       | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------- |
| size        | Size of Meter Component                                                                                                         | `sm` `md` `lg` `xl`        | `md`    |
| themeColor  | Theme of Meter Component                                                                                                        | `base` `primary` `success` | `base`  |
| value       | A floating point number that represents the current value of the measured range. This must be between the min and the max value | number                     |         |
| min         | Indicates the lower bound of the measured range. This must be less than the max value (if specified).                           | number                     | 0       |
| max         | Indicates the upper bound of the measured range. This must be greater than the min value (if specified).                        | number                     | 1       |
| optimum     | This attribute indicates the optimum value and must be within the range of min and max values                                   | number                     |         |
| intervals   | This attribute indicates the no of intervals the meter component has                                                            | number                     | 1       |
| flatBorders | If true, meter bar intervals will have flat broders                                                                             | boolean                    | false   |
| label       | Label for the Meter Component                                                                                                   | string                     |         |
| hint        | Hint for the Meter Component                                                                                                    | string                     |         |
