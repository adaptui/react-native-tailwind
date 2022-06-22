# Radio

Adapt UI provides three themes for the radio button with three sizes and five
interaction states.

#### Simple Usage

```
import {
  Box,
  Radio,
  RadioGroup,
  useTheme,
} from "@adaptui/react-native-tailwind";

export default function App() {
  return (
      <RadioGroup>
        <Radio value="Apple" label="Apple" />
        <Radio value="Orange" label="Orange" />
        <Radio value="watermelon" label="Watermelon" />
        <Radio value="sapota" label="Sapota" />
        <Radio value="cherry" label="Cherry" />
      </RadioGroup>
  )
}

```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [RadioGroupProps](#radiogroupprops)
- [RadioProps](#radioprops)

## Themes

Adapt UI provides three themes for radio buttons: `base`, `primary`, and
`danger`.

You can use these themed radio button components based on your specific
scenarios.

### Usage

```
import { RadioGroup, Radio, Box, useTheme } from "@adaptui/react-native-tailwind"
export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup>
          <Radio label="Apple" value="apple" />
          <Radio label="Orange" value="orange" />
        </RadioGroup>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup themeColor="danger">
          <Radio label="Default" value="default" />
          <Radio label="Comfortable" value="comfortable" />
          <Radio label="Compact" value="compact" />
        </RadioGroup>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup themeColor="primary">
          <Radio label="Auto" value="auto" />
          <Radio label="Dark" value="dark" />
          <Radio label="Light" value="light" />
        </RadioGroup>
      </Box>
    </>
  )
}

```

## Sizes

There are three different sizes for the radio buttons in Adapt UI: `sm`, `md` &
`lg`

Based on the hierarchy, you can switch between different sizes.

### Usage

```
import { RadioGroup, Radio, Box, useTheme } from "@adaptui/react-native-tailwind"
export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup size="sm">
          <Radio label="Auto" value="auto" />
          <Radio label="Dark" value="dark" />
          <Radio label="Light" value="light" />
        </RadioGroup>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup themeColor="danger">
          <Radio label="Auto" value="auto" />
          <Radio label="Dark" value="dark" />
          <Radio label="Light" value="light" />
        </RadioGroup>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup size="lg" themeColor="primary">
          <Radio label="Auto" value="auto" />
          <Radio label="Dark" value="dark" />
          <Radio label="Light" value="light" />
        </RadioGroup>
      </Box>
    </>
  )
}
```

### RadioGroupProps

| Name         | Description                                              | Type                      | Default    |
| ------------ | -------------------------------------------------------- | ------------------------- | ---------- |
| size         | Size of Radio                                            | `sm` `md` `lg`            | `md`       |
| themeColor   | Theme of Radio                                           | `base` `primary` `danger` | `base`     |
| orientation  | The orientation of Radio Group items                     | `vertical` `horizontal`   | `vertical` |
| value        | The selected value of Radio Group (controlled)           | string                    |            |
| defaultValue | The default selected value of Radio Group (uncontrolled) | string                    |            |
| onChange     | The callback onChange of selected value                  | (value: string) => void   |            |
| isDisabled   | Is Radio Group Disabled                                  | boolean                   | false      |

### RadioProps

| Name        | Description                                                        | Type    | Default |
| ----------- | ------------------------------------------------------------------ | ------- | ------- |
| label       | The label for Radio                                                | string  |         |
| description | A description for Radio                                            | string  |         |
| value       | A unique value of Radio for controlling the state                  | string  |         |
| isDisabled  | Is the Radio Item disabled                                         | boolean | false   |
| isInvalid   | Is the Radio Item valid, if true Radio gets themeColor of `danger` | boolean | false   |
