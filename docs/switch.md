# Switch

Adapt UI provides a Switch Component, an alternative for Checkbox Component.

It also allows a user to switch between enabled or disabled states.

#### Simple Usage

```
import { Switch } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Switch />
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Props](#props)

## Themes

Adapt UI provides two themes for the Switch Component: `base` & `primary`

### Usage

```
import { Switch, Search, Icon } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Switch />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Switch themeColor="primary" />
      </Box>
    </>
  )
}

```

## Size

There are four different sizes for Switch Component in Adapt UI: `sm`, `md`,
`lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```
import { Switch, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Switch size="sm" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Switch size="md" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Switch size="lg" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Switch />
      </Box>
    </>
  )
}

```

## Props

| Name                 | Description                                         | Type                     | Default |
| -------------------- | --------------------------------------------------- | ------------------------ | ------- |
| size                 | The size of the switch component                    | `sm` `md` `lg` `xl`      | `xl`    |
| themeColor           | The Theme of the switch component                   | `base` `primary`         | `base`  |
| defaultState         | The Default value of switch (uncontrolled)          | boolean                  | false   |
| state                | Value of switch, true means `on`, false means `off` | boolean                  | false   |
| onStateChange        | Callback called with the new value when it changes  | (value: boolean) => void |         |
| disabled             | disabled state of switch                            | boolean                  | false   |
| onStateColor         | The color used to appear in `on` position           | string                   |         |
| offStateColor        | The color used to appear in `off` position          | string                   |         |
| onStatePressedColor  | The color used in `pressed on` state                | string                   |         |
| offStatePressedColor | The color used in `pressed off` state               | string                   |         |
| thumbTintColor       | The color used for the thumb/knob                   | string                   |         |
| label                | The label of Switch Component                       | string                   |         |
| description          | The description of the Switch Component             | string                   |         |
