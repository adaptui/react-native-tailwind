# Checkbox

Adapt UI provides three different themes for the checkbox with three sizes and
five interaction states.

##### Simple Usage

```
import { Checkbox } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Checkbox label="Fruits" />
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

Adapt UI provides three themes for the checkbox: `base`, `primary`, and
`danger`. You can use this themed checkbox based on your specific scenarios.

### Usage

```
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox />
      <Checkbox themeColor="primary" />
      <Checkbox themeColor="danger" />
    </>
  )
}

```

## Size

There are three different sizes for checkboxes in Adapt UI. Based on the
hierarchy, you can switch between different sizes.

### Usage

```
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox size="sm" />
      <Checkbox />
      <Checkbox size="lg" />
    </>
  )
}

```

## Label

As the name suggests, it provides a label with a checkbox. Since this is an
independent property, you can have labels with different themes, interactions,
or even sizes.

### Usage

```
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox label="Contact-less delivery" />
    </>
  )
}

```

## Description

This property can give you description text along with the label.

### Usage

```
import { Checkbox, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Checkbox
        label="Get Prime feature during your flight"
        description="Pre-select your food, get more leg room seat and fast check-in. Extra charges apply."
      />
    </>
  )
}

```

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
| value              | Checkbox state value (CheckboxGroup) | string                        |            |
| accessibilityLabel | Accessibility Label for Checkbox     | string                        | "Check me" |
