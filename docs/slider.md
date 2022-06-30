# Slider

Adapt UI provides Slider component which can be used when users have to select
options from a given range of values

#### Simple Usage

```js
import {
  Box,
  Slider,
  useTheme,
} from "@adaptui/react-native-tailwind";

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
- [Props](#props)

## Themes

Adapt UI provides three themes for radio buttons: `base`, `primary`, and
`danger`.

You can use these themed radio button components based on your specific
scenarios.

### Usage

```js
import {
  Box,
  Slider,
  useTheme,
} from "@adaptui/react-native-tailwind";

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

## Sizes

There are four different sizes for the slider component in Adapt UI: `sm`, `md`,
`lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```js
import {
  Box,
  Slider,
  useTheme,
} from "@adaptui/react-native-tailwind";

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

## Range

Adapt UI provides an option to customize your Slider component which can be used
when users have to select values of range, like for example, Price Range of
Product.

```js
import {
  Box,
  Slider,
  useTheme,
} from "@adaptui/react-native-tailwind";

export default function App() {
  const theme = useTheme();
  return (
    <Box style={tailwind.style("mx-5 my-5")}>
      <Slider minValue={1000} maxValue={50000} range={true} showTooltip />
    </Box>
  )
}
```

## Props

| Name           | Description                                                      | Type                      | Default |
| -------------- | ---------------------------------------------------------------- | ------------------------- | ------- |
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

> Using onDragValue will have some Performance issues as `runOnJS` gets called
> on dragging
