# Checkbox Group

Adapt UI provides two themes for the `CheckboxGroup` with three sizes. 

These are groups of checkboxes stacked horizontally or vertically. 
So any changes made in the checkbox component will reflect here too.

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
