# Meter

AdaptUI provides a Meter Component which can be used to define a scalar
measurement within a known range, or a fractional value.

![simulator_screenshot_4CB9DD6B-3ADF-4C20-BE91-30896435990D](https://user-images.githubusercontent.com/35562287/203483320-5a1dea63-ae1b-433c-88fc-72c70d2493b8.png)


#### Simple Usage

```js
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

![simulator_screenshot_5EEF8780-73D6-4AD6-A9E3-686415240C4E](https://user-images.githubusercontent.com/35562287/203483779-7672817c-d46d-4c27-b363-a536108200aa.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Meter, Search, Icon } from "@adaptui/react-native-tailwind"
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
</details>

## Size

There are four different sizes for Meter Component in Adapt UI: `sm`, `md`, `lg`
& `xl`

Based on the hierarchy, you can switch between different sizes.

![simulator_screenshot_E7362C3F-A665-4A0A-8AEC-C65B97522BD4](https://user-images.githubusercontent.com/35562287/203484259-7cbccdc0-422e-427d-b010-067c0fd63256.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Meter, useTheme } from "@adaptui/react-native-tailwind"

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
</details>


## Props

| Name        | Description                                                                                                                     | Type                       | Default |
|-------------|---------------------------------------------------------------------------------------------------------------------------------|----------------------------|---------|
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
