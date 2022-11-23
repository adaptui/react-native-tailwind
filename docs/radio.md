# Radio

Adapt UI provides three themes for the radio button with three sizes and five
interaction states.

It can be used when you want to set the selection from a series of option to
only one.

![simulator_screenshot_A7616CF6-7CC8-49F2-9272-CA4E33F963FB](https://user-images.githubusercontent.com/35562287/203497847-8277987b-870b-4552-acd4-43eb6835b896.png)

#### Simple Usage

```js
import {
  Box,
  Radio,
  RadioGroup,
  useTheme,
} from "@adaptui/react-native-tailwind";

export default function App() {

  const [value, setValue] = useState("cod");
    
  return (
      <RadioGroup value={value} onChange={setValue}>
        <Radio value="creditcard" label="Use credit card" />
        <Radio value="payviaupi" label="Pay via UPI" />
        <Radio value="netbanking" label="Netbanking" />
        <Radio value="cod" label="Cash on delivery" />
      </RadioGroup>
  )
}

```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Orientation](#orientation)
- [RadioGroupProps](#radiogroupprops)
- [RadioProps](#radioprops)

## Themes

Adapt UI provides three themes for radio buttons: `base`, `primary`, and
`danger`.

You can use these themed radio button components based on your specific
scenarios.

![simulator_screenshot_6D115784-B9D3-4360-8541-8DD2A6AB60B6](https://user-images.githubusercontent.com/35562287/203498297-b22cd3a2-f949-42d7-aad8-cea46ba42e3c.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { RadioGroup, Radio, Box, useTheme } from "@adaptui/react-native-tailwind"
export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup>
          <Radio label="Breakfast" value="Breakfast" />
          <Radio label="Dinner" value="Dinner" />
          <Radio label="Breakfast and Dinner" value="Breakfast&Dinner" />
        </RadioGroup>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup themeColor="primary">
          <Radio label="System" value="system" />
          <Radio label="Dark" value="dark" />
          <Radio label="Light" value="light" />
        </RadioGroup>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <RadioGroup themeColor="danger">
          <Radio label="Default" value="default" />
          <Radio label="Comfortable" value="comfortable" />
          <Radio label="Compact" value="compact" />
        </RadioGroup>
      </Box>
    </>
  )
}

```
</details>

## Size

There are three different sizes for the radio buttons in Adapt UI: `sm`, `md` &
`lg`

Based on the hierarchy, you can switch between different sizes.

![simulator_screenshot_B4125467-5D08-43E8-8852-21F0968625F2](https://user-images.githubusercontent.com/35562287/203498129-f78cadba-3b00-4792-95c0-6328a80ce7c9.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
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
</details>

## Orientation

Orientation is the property to describe the layout of the component. 
Radio groups can be stacked horizontally and vertically. This property helps you to pick one for yourself. Defaults to `vertical` 

![simulator_screenshot_9788F3DC-DD9D-4552-9C78-91C353F9BE6C](https://user-images.githubusercontent.com/35562287/203501195-36bae197-e9b3-4211-8035-ecb07410146a.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import {
  Box,
  Radio,
  RadioGroup,
  useTheme,
} from "@adaptui/react-native-tailwind";

export default function App() {

  const [value, setValue] = useState("cod");
    
  return (
    <RadioGroup orientation="horizontal" value={value} onChange={setValue}>
      <Radio value="private" label="Private Sector" />
      <Radio value="public" label="Public Sector" />
      <Radio value="freelancer" label="Freelancer" />
      <Radio value="business" label="Business" />
    </RadioGroup>
  )
}
```
</details>

### RadioGroupProps

| Name         | Description                                              | Type                      | Default    |
|--------------|----------------------------------------------------------|---------------------------|------------|
| size         | Size of Radio                                            | `sm` `md` `lg`            | `md`       |
| themeColor   | Theme of Radio                                           | `base` `primary` `danger` | `base`     |
| orientation  | The orientation of Radio Group items                     | `vertical` `horizontal`   | `vertical` |
| value        | The selected value of Radio Group (controlled)           | string                    |            |
| defaultValue | The default selected value of Radio Group (uncontrolled) | string                    |            |
| onChange     | The callback onChange of selected value                  | (value: string) => void   |            |
| isDisabled   | Is Radio Group Disabled                                  | boolean                   | false      |

### RadioProps

| Name        | Description                                                        | Type    | Default |
|-------------|--------------------------------------------------------------------|---------|---------|
| label       | The label for Radio                                                | string  |         |
| description | A description for Radio                                            | string  |         |
| value       | A unique value of Radio for controlling the state                  | string  |         |
| isDisabled  | Is the Radio Item disabled                                         | boolean | false   |
| isInvalid   | Is the Radio Item valid, if true Radio gets themeColor of `danger` | boolean | false   |
