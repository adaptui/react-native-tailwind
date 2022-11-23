# Slider

Adapt UI provides two themes for sliders with four sizes and five interaction states. 
Use this component to receive input from the user.

#### Simple Usage

```js
import { Box, Slider, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider />
      </Box>
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Range](#range)
- [Knob](#knob)
- [Tooltip](#tooltip)
- [Props](#props)

## Themes

Adapt UI provides two themes for radio buttons: `base` and `primary`

You can use these themed Slider components based on your specific
scenarios.

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Box, Slider, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider themeColor="primary" />
      </Box>
    </>
  )
}
```
</details>

## Size

There are four different sizes for the slider component in Adapt UI: `sm`, `md`,
`lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { Box, Slider, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <Box style={tailwind.style("flex-1 justify-center bg-white-900")}>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider size='sm' />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider size="lg" />
      </Box>
      <Box style={tailwind.style("mx-5 my-5")}>
        <Slider size="xl" />
      </Box>
    </Box>
  )
}
```
</details>

## Range

Adapt provides a range slider component. You can switch between the default slider and range slider using the range prop.
Range sliders are usually used to get two set of input values from the user.

<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { Box, Slider, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <Box style={tailwind.style("mx-5 my-5")}>
      <Slider minValue={1000} maxValue={50000} range />
    </Box>
  )
}
```
</details>

## Knob

Show or hide the knob in the slider using this property. The knob will also have an icon on it. Use knob and knob icon property in the right panel to hide or show both knob and knob icons.

<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { Box, Slider, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <Box style={tailwind.style("mx-5 my-5")}>
      <Slider knobIcon={<Icon icon={<Equals />} />} />
    </Box>
  )
}
```
</details>

## Tooltip

This property can bring the tooltip above the selected knob. Note that the slider should be in an active state to use this property.

**Note**: Tooltip property is used only when the slider is in active interaction.

<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { Box, Slider, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <Box style={tailwind.style("mx-5 my-5")}>
      <Slider showTooltip />
    </Box>
  )
}
```
</details>

## Props

| Name           | Description                                                      | Type                      | Default |
|----------------|------------------------------------------------------------------|---------------------------|---------|
| size           | The size of slider and knob                                      | `sm` `md` `lg` `xl`       | `md`    |
| themeColor     | The theme of Slider                                              | `base` `primary`          | `base`  |
| defaultValue   | Default value of Slider                                          | number[]                  |         |
| onDragValue    | On Knob Dragging Callback with Value                             | (value: number[]) => void |         |
| onDragEndValue | On Knob Drag End Callback with Value                             | (value: number[]) => void |         |
| minValue       | Minimum value of Slider                                          | number                    |         |
| maxValue       | Maximum value of Slider                                          | number                    |         |
| step           | Step value of Slider                                             | number                    |         |
| range          | Set to true when you need a range slide                          | boolean                   | false   |
| knobIcon       | An Icon to render inside Knob or a component to replace the Knob | JSX.Element               |         |
| disabled       | Is Slider disabled                                               | boolean                   |         |
| showTooltip    | Should the slider show value in a tooltip                        | boolean                   |         |

> Using `onDragValue`eee will have some Performance issues because its called using `runOnJS`, all other functions are executed in UI Thread.
