# Switch

Adapt UI provides a Switch Component, an alternative for Checkbox Component.

It also allows a user to switch between enabled or disabled states.

#### Simple Usage

```js
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
- [Label](#label)
- [Description](#description)
- [Props](#props)

## Themes

Adapt UI provides two themes for the Switch Component: `base` & `primary`

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
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
</details>

## Size

There are four different sizes for Switch Component in Adapt UI: `sm`, `md`,
`lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
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
</details>

## Label

As the name suggests, it provides a label with a switch component. Since this is an independent property, you can have labels with different themes, interactions, or even sizes.

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Switch, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Switch label="Notify me about replies to threads" />
      </Box>
    </>
  )
}
```
</details>

## Description

This property can give you description text along with the label.

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Switch, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Switch 
          label="Notify Weekly reports" 
          description="Status updates on projects in your portfolios" 
        />
      </Box>
    </>
  )
}
```
</details>

## Props

| Name                 | Description                                         | Type                     | Default |
|----------------------|-----------------------------------------------------|--------------------------|---------|
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
