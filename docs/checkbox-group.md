# Checkbox Group

AdaptUI exports a `<CheckboxGroup />` component to help manage the checked state
of its children Checkbox components and conveniently pass a few shared style
props to each.

See the [props](#props) table at the bottom of this page for a list of the
shared props.

Also check the Indeterminate case [here.](checkbox.md#indeterminate)

#### Preview

https://user-images.githubusercontent.com/35562287/175327232-2f1774b7-8110-4f60-8901-e911fe11af74.mp4

#### Simple Usage

```
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
        <Checkbox value="watermelon" label="Watermelon" />
        <Checkbox value="sapota" label="Sapota" />
        <Checkbox value="cherry" label="Cherry" />
      </CheckboxGroup>
      <Box style={tailwind.style("mt-2")}>
        <Text>Picked fruits</Text>
        {value.map((item, index) => {
          return (
            <Text style={tailwind.style("my-1")} key={index}>
              - {item}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};

```

## Props

| Name         | Description                        | Type                      | Default    |
| ------------ | ---------------------------------- | ------------------------- | ---------- |
| orientation  | Checkbox Group Orientation         | `vertical` `horizontal`   | `vertical` |
| value        | Array of Checkbox Values           | string[]                  |            |
| defaultValue | Default State of Children Checkbox | string[]                  |            |
| onChange     | On State Change Callback           | (value: string[]) => void |            |
| isDisabled   | Checkbox Group Disabled State      | boolean                   | false      |
