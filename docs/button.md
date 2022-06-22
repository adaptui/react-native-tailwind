# Button

Adapt UI provides five themes for `Button` with four styles and six interaction
states. Use this component to receive a specific request from the user.

#### Simple Usage

```
import { Button } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Button>Continue</Button>
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Variants](#variants)
- [Size](#size)
- [Prefix](#prefix)
- [Suffix](#suffix)
- [IconOnly](#icononly)
- [Props](#props)

## Themes

Adapt UI provides five themes for buttons: `base`, `primary`, `secondary`,
`success`, and `danger`. You can use this themed button based on your specific
scenarios.

### Usage

```
import { Button, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Button>Get Started</Button>
      <Button themeColor="primary">Register for free</Button>
      <Button themeColor="secondary">Watch Demo</Button>
      <Button themeColor="success">Subscribe to Newsletter</Button>
      <Button themeColor="danger">Delete</Button>
    </>
  )
}

```

## Variants

Adapt UI provides four different styles for buttons, namely `solid`, `subtle`,
`outline`, and `ghost` buttons. You can use these various styled button
components to give a better appearance and difference between your primary and
all other CTAs.

For instance, you can use the solid button for your primary CTA and the subtle
or outline button for secondary CTAs. Get creative using these different styled
buttons along with base themes. Solid button with a primary theme for your
primary CTAs, subtle or outline button with a secondary theme for secondary
CTAs, and even you can have tertiary CTAs with subtle or outline or even ghost
button with a base theme or your tertiary theme.

### Usage

```
import { Button, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Button>Buy this Stock</Button>
      <Button variant="subtle">Contact Us</Button>
      <Button variant="outline">Add Subtask</Button>
      <Button variant="ghost">Skip for now</Button>
    </>
  )
}

```

## Size

There are four different sizes for buttons in Adapt UI. Based on the hierarchy,
you can switch between different sizes.

### Usage

```
import { Button, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Button size="sm">Share</Button>
      <Button>Share</Button>
      <Button size="lg">Share</Button>
      <Button size="xl">Share</Button>
    </>
  )
}

```

## Prefix

The prefix is a slot at the beginning or prefix position of a component. Here in
the button, the prefix slot can be used to bring an icon, spinner, or, if we
need to think wild, maybe even an avatar. Prefix itself doesn’t have any unique
property. It’s a frame that hugs the component inside it.

### Usage

```
import { Button, useTheme, Icon, DefaultUser } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Button prefix={<Icon icon={<DefaultUser />} />} themeColor="success">
        Sign In
      </Button>
    </>
  )
}

```

## Suffix

The suffix is the same as the prefix, with only a difference in its position.
Suffix usually is at the end of a component. Here in the button, the prefix slot
can be used to bring an icon or a spinner to show the loading interaction of the
button component.

### Usage

```
import { Button, useTheme, Icon, CaretRight } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Button themeColor="primary" suffix={<Icon icon={<CaretRight />} />}>
        Continue
      </Button>
    </>
  )
}

```

## IconOnly

It’s a unique property for the button components used to switch button
components between buttons with text and icon-only variants. You get only one
slot for your icon.

### Usage

```
import { Button, useTheme, Icon, CaretRight, Add, Delete } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Button
        themeColor="primary"
        iconOnly={<Icon icon={<CaretRight />} />}
        style={tailwind.style("my-1")}
      />
      <Button
        themeColor="success"
        iconOnly={<Icon icon={<Add />} />}
        style={tailwind.style("my-1")}
      />
      <Button
        themeColor="danger"
        iconOnly={<Icon icon={<Delete />} />}
        style={tailwind.style("my-1")}
      />
    </>
  )
}

```

## Props

> Button implements `Touchable` accepting all `PressableProps`

| Name       | Description                                                          | Type                                            | Default |
| ---------- | -------------------------------------------------------------------- | ----------------------------------------------- | ------- |
| size       | The Button Size                                                      | `sm` `md` `lg` `xl`                             | `md`    |
| variant    | The Button Variants                                                  | `solid` `outline` `subtle` `ghost`              | `solid` |
| themeColor | The Button Theme                                                     | `base` `primary` `secondary` `success` `danger` | `base`  |
| suffix     | If added, the button will show an icon after the button's text.      | JSX.Element                                     |         |
| prefix     | If added, the button will show an icon before the button's text.     | JSX.Element                                     |         |
| iconOnly   | If provided, button only renders the icon                            | JSX.Element                                     |         |
| loading    | If true, button renders a spinner for loading state                  | boolean                                         | false   |
| spinner    | If provided, button renders this spinner when loading is set to true | JSX.Element                                     |         |
| textStyle  | Style to customise the text inside button                            | `TextStyle` from React Native                   |         |
