# Switch

Adapt UI provides a Switch Component, an alternative for Checkbox Component.

It also allows a user to switch between enabled or disabled states.

![simulator_screenshot_14180790-B42D-42A9-BB07-02EBA83784CA](https://user-images.githubusercontent.com/35562287/203720490-f9a87d9e-6d7a-4f57-b842-ee6d618d4e5b.png)

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

![simulator_screenshot_FBB31712-6893-42DB-991E-6FAEAEDD75BC](https://user-images.githubusercontent.com/35562287/203720807-f50c76ab-6fb6-497f-a652-6691647fa4ab.png)

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

![simulator_screenshot_1BC78AEB-B4EF-419B-9878-D3E81C97A941](https://user-images.githubusercontent.com/35562287/203721015-6efcf582-e52a-4031-a548-94a5f17db72f.png)

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

![simulator_screenshot_3E315378-0093-43C7-B44B-7E50EE913AD6](https://user-images.githubusercontent.com/35562287/203721151-527751b6-b642-45dc-bca8-de6c074b530a.png)

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

![simulator_screenshot_324BE720-7C7D-494D-B2AD-7C67896627BF](https://user-images.githubusercontent.com/35562287/203721256-f121d2b6-cacd-4437-b62b-3d54aba742d3.png)

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
