# Checkbox Group

Adapt UI provides two themes for the `CheckboxGroup` with three sizes. 

These are groups of checkboxes stacked horizontally or vertically. 
So any changes made in the checkbox component will reflect here too.

![simulator_screenshot_5B121795-0688-496F-91CA-26C28FE23E2A](https://user-images.githubusercontent.com/35562287/203286255-a6d2be49-2606-4de0-99a9-9cd53105622e.png)

#### Simple Usage

```js
import React from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Text,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const App = () => {
  const tailwind = useTheme();
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Box style={tailwind.style("flex-1 px-2 justify-center bg-white-900")}>
      <Text>Pick fruits to eat</Text>
      <CheckboxGroup value={value} onChange={setValue}>
        <Checkbox value="apple" label="Apple" />
        <Checkbox value="orange" label="Orange" />
        <Checkbox isDisabled value="watermelon" label="Watermelon" />
        <Checkbox value="strawberry" label="Strawberry" />
        <Checkbox value="cherry" label="Cherry" />
      </CheckboxGroup>
    </Box>
  );
};

```

## Table of contents

- [Themes](#themes)
- [Sizes](#sizes)
- [Indeterminate](#indeterminate)
- [Orientation](#orientation)


## Themes

Adapt UI provides two themes for checkbox groups: `base` and `primary`. 
You can use these themed checkbox groups based on your specific scenarios.

![simulator_screenshot_5CEC669D-067D-48AB-8B3A-632C2D2A85D0](https://user-images.githubusercontent.com/35562287/203289544-5b8e3595-f993-4177-8014-e8cd0b5ee06b.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { CheckboxGroup, useTheme } from "@adaptui/react-native-tailwind"
export default function App() { 
  const tailwind = useTheme();
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <>
      <CheckboxGroup
        themeColor="primary"
        value={value}
        onChange={setValue}
      >
        <Checkbox value="artic" label="Artic" />
        <Checkbox value="national-parks" label="National Parks" />
        <Checkbox isDisabled value="camping" label="Camping" />
        <Checkbox value="beaches" label="Beaches" />
        <Checkbox value="caves" label="Caves" />
        <Checkbox value="farms" label="Farms" />
      </CheckboxGroup>
    </> 
  ) 
}
```
</details>

## Sizes

There are three different sizes for the checkbox group in Adapt UI, `sm`, `md` and `lg`. 
Based on the hierarchy, you can switch between different sizes.
  
![simulator_screenshot_982D4B28-85CF-4AC2-99C9-C6EABFA977E4](https://user-images.githubusercontent.com/35562287/203288193-64a25b4e-3521-4f84-9ad2-57d19a26d518.png)
  
<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { CheckboxGroup, useTheme } from "@adaptui/react-native-tailwind"
export default function App() { 
  const tailwind = useTheme();
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <>
      <CheckboxGroup
        size="lg"
        value={value}
        onChange={setValue}
      >
        <Checkbox value="artic" label="Artic" />
        <Checkbox value="national-parks" label="National Parks" />
        <Checkbox isDisabled value="camping" label="Camping" />
        <Checkbox value="beaches" label="Beaches" />
        <Checkbox value="caves" label="Caves" />
        <Checkbox value="farms" label="Farms" />
      </CheckboxGroup>
    </> 
  ) 
}
```
</details>

## Indeterminate

This property can make the checkbox group into an indeterminate group where one checkbox will act as a master, which has a set of checkboxes under it.

![simulator_screenshot_E202A2A8-A406-4C5A-B3B1-6D1826742D2D](https://user-images.githubusercontent.com/35562287/203288537-63c432ad-a14c-44bc-8345-a778da68fccf.png)
  
<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import {
  Box,
  Checkbox,
  CheckboxGroup,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const App = () => { 
  const tailwind = useTheme(); 
  return ( 
    <Box style={tailwind.style("h-full justify-center items-center bg-white-900")}>
      <CheckboxGroup> 
        <Checkbox label="Fund Category" isIndeterminate /> 
        <Box style={tailwind.style("ml-[25px]")}> 
          <Checkbox value="Equity" label="Equity" />
          <Checkbox value="Debt" label="Debt" />
          <Checkbox value="Hybrid" label="Hybrid" />
          <Checkbox value="International Equity" label="International Equity" />
          <Checkbox value="Solution Oriented" label="Solution Oriented" /> 
        </Box>
      </CheckboxGroup> 
    </Box> 
  ); 
};

```
</details>

## Orientation

Stack is the property to describe the layout of the component. Checkbox groups can be stacked horizontally and vertically.

This property helps you to pick one for yourself, defaults to `vertical`. 
  
![simulator_screenshot_199E5E05-2DF0-4469-8E9C-5A854667F5CB](https://user-images.githubusercontent.com/35562287/203289204-882dcc11-bb00-4448-94cf-75fded46be35.png)
  
<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { CheckboxGroup, useTheme } from "@adaptui/react-native-tailwind"
export default function App() { 
  const tailwind = useTheme();
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <>
      <CheckboxGroup
        orientation="horizontal"
        value={value}
        onChange={setValue}
      >
        <Checkbox value="artic" label="Artic" />
        <Checkbox value="national-parks" label="National Parks" />
        <Checkbox isDisabled value="camping" label="Camping" />
        <Checkbox value="beaches" label="Beaches" />
        <Checkbox value="caves" label="Caves" />
        <Checkbox value="farms" label="Farms" />
      </CheckboxGroup>
    </> 
  ) 
}
```
</details>


## Props

| Name         | Description                        | Type                      | Default    |
|--------------|------------------------------------|---------------------------|------------|
| orientation  | Checkbox Group Orientation         | `vertical` `horizontal`   | `vertical` |
| value        | Array of Checkbox Values           | string[]                  |            |
| defaultValue | Default State of Children Checkbox | string[]                  |            |
| onChange     | On State Change Callback           | (value: string[]) => void |            |
| isDisabled   | Checkbox Group Disabled State      | boolean                   | false      |
