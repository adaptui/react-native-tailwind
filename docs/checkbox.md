# Checkbox

Adapt UI provides three different themes for the checkbox with three sizes and
five interaction states.

![simulator_screenshot_05833D67-18AC-4BC6-99B2-9443084EA834](https://user-images.githubusercontent.com/35562287/175283098-3cc71e01-a7b7-4c46-9d9b-cd6d8da114e6.png)

##### Simple Usage

```js
import { Checkbox } from "@adaptui/react-native-tailwind";
export default function App() {
  return <Checkbox label="Fruits" />;
}
```

## Table of Contents

- [Themes](#themes)
- [Size](#size)
- [Label](#label)
- [Description](#description)
- [Props](#props)

## Themes

Adapt UI provides three themes for the checkbox: `base`, `primary`, and
`danger`. You can use this themed checkbox based on your specific scenarios.

![simulator_screenshot_6F79193A-DB1E-4C9F-931D-19D1A80D628F](https://user-images.githubusercontent.com/35562287/175284798-0397a3fb-4466-4764-a438-68282d5d146d.png)

<details>
  <summary>
    <h3>Usage</h3>
  </summary>

```js
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox />
      <Checkbox themeColor="primary" />
      <Checkbox themeColor="danger" />
    </>
  );
}
```

</details>
  
## Size

There are three different sizes for checkboxes in Adapt UI. Based on the
hierarchy, you can switch between different sizes.

![simulator_screenshot_0B2CA7D5-32C7-42C7-8EF9-34191C1AA4F3](https://user-images.githubusercontent.com/35562287/175290187-e281a585-d847-4b66-890c-ae59b9d9185e.png)

<details>
  <summary>
    <h3>Usage</h3>
  </summary>

```js
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox size="sm" />
      <Checkbox />
      <Checkbox size="lg" />
    </>
  );
}
```

</details>

## Label

As the name suggests, it provides a label with a checkbox. Since this is an
independent property, you can have labels with different themes, interactions,
or even sizes.

![simulator_screenshot_5C491A13-980D-4D28-A67D-65053BF26AD2](https://user-images.githubusercontent.com/35562287/175291595-eea3cab0-8f00-4638-9981-9782c8633d7b.png)

<details>
  <summary>
    <h3>Usage</h3>
  </summary>

```js
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox label="Contact-less delivery" />
    </>
  );
}
```

</details>
  
## Description

This property can give you description text along with the label.

![simulator_screenshot_0E9496D0-7C24-4379-A2A5-6D43D99763F0](https://user-images.githubusercontent.com/35562287/175295163-39372b1c-0ef7-4ee9-a6e6-abd71f1133b2.png)

<details>
  <summary>
    <h3>Usage</h3>
  </summary>

```js
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox
        label="Get Prime feature during your flight"
        description="Pre-select your food, get more leg room seat and fast check-in. Extra charges apply."
      />
    </>
  );
}
```

</details>

## Indeterminate

In some scenarios, we have a checkbox group under a category. You can use
indeterminate property to switch between indeterminate or unchecked states. We
will use `<CheckboxGroup />` for the demo purpose.

![simulator_screenshot_692E2121-905B-4D02-A562-C74042B2DB42](https://user-images.githubusercontent.com/35562287/175297015-a93b669b-d65c-4644-bb13-6e876a4c453d.png)

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

## Props

| Name               | Description                          | Type                          | Default    |
| ------------------ | ------------------------------------ | ----------------------------- | ---------- |
| size               | Size of the checkbox                 | `sm` `md` `lg`                | `md`       |
| themeColor         | Theme of checkbox                    | `base` `primary` `danger`     | `base`     |
| isSelected         | Checkbox state (controlled)          | boolean                       | false      |
| defaultSelected    | Checkbox state (uncontrolled)        | boolean                       | false      |
| isIndeterminate    | Checkbox indeterminated state        | boolean                       | false      |
| setSelected        | Checkbox onState Change              | (isSelected: boolean) => void |            |
| isDisabled         | Checkbox Disabled State              | boolean                       | false      |
| isInvalid          | Checkbox Invalid State               | boolean                       | false      |
| value\*            | Checkbox state value (CheckboxGroup) | string                        |            |
| accessibilityLabel | Accessibility Label for Checkbox     | string                        | "Check me" |

> `value` prop is only required when using <Checkbox /> inside of CheckboxGroup

## Also Check

- [CheckboxGroup](checkbox-group.md)
