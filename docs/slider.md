# Slider

Adapt UI provides two themes for sliders with four sizes and five interaction states. 
Use this component to receive input from the user.

![Simulator Screen Shot - iPhone 14 Pro - 2022-11-23 at 17 13 58](https://user-images.githubusercontent.com/35562287/203538689-745727d4-049a-4a2d-a654-486628e8f14e.png)


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

![simulator_screenshot_58CD9E44-692A-4CB7-A371-ED086FBB674B](https://user-images.githubusercontent.com/35562287/203539046-e1867de8-3f73-468a-b11e-919a9fadffdb.png)

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

![simulator_screenshot_0A373306-0737-4B3B-8D9C-D1CB77471C7E](https://user-images.githubusercontent.com/35562287/203539267-7e7391ff-c498-43a5-8a16-cfc15c7d8e18.png)

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

![simulator_screenshot_F74AF5F7-46B1-4214-BDED-453FEB3DA862](https://user-images.githubusercontent.com/35562287/203539501-8371f7d5-fcd0-4e24-bbde-90ce182e919e.png)

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
      <Slider range />
    </Box>
  )
}
```
</details>

## Knob

Show or hide the knob in the slider using this property. The knob will also have an icon on it. Use knob and knob icon property in the right panel to hide or show both knob and knob icons.

![simulator_screenshot_A8B58DE9-F33E-4DEC-838D-C359849987EC](https://user-images.githubusercontent.com/35562287/203539721-7cb8f25c-cc41-42b1-9331-dcf9290a9f4f.png)

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

![simulator_screenshot_1632A25F-12FC-4DFB-B873-E11B6E64A057](https://user-images.githubusercontent.com/35562287/203539888-4bfda7d5-6194-4eb3-8aac-3b788ef80195.png)

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

> Using `onDragValue` will have some Performance issues because its called using `runOnJS`, all other functions are executed in UI Thread.
