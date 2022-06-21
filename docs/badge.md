# Badge

Adapt UI provides five themes for `Badge` with three styles. Use this component
to show the status of an activity.

#### Simple Usage

```
import { Badge } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Badge>Beta</Badge>
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Variant](#variant)
- [Size](#size)
- [Prefix](#prefix)
- [Props](#props)

## Themes

Adapt UI provides five themes for badges: `base`, `primary`, `secondary`,
`success`, and `danger`.

You can use this themed badge based on your specific scenarios.

### Usage

```
import { Badge, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Badge>Completed</Badge>
      <Badge themeColor="primary">Processing</Badge>
      <Badge themeColor="secondary">Waiting</Badge>
      <Badge themeColor="success">Success</Badge>
      <Badge themeColor="danger">Cancelled</Badge>
    </>
  )
}

```

## Variant

Adapt UI provides three different styles for badges, namely `solid`, `subtle`,
and `outline`. You can use these various styled badge components to give a
better visual hierarchy.

### Usage

```
import { Badge, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Badge>Solid</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="outline">Outline</Badge>
    </>
  )
}

```

## Size

Adapt UI provides three different sizes for badges, namely `sm`, `md`, and `lg`.

### Usage

```
import { Badge, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Badge size="sm">Small</Badge>
      <Badge>Medium</Badge>
      <Badge size="lg">Large</Badge>
    </>
  )
}

```

## Prefix

The prefix is a slot at the beginning or prefix position of a component. Here in
the badge, the prefix slot can be used to bring an icon, spinner, or, if we need
to think wild, maybe even an avatar. Prefix itself doesn’t have any unique
property. It’s a frame that hugs the component inside it.

### Usage

```
import { Badge, useTheme, Icon, Check } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Badge prefix={<Icon icon={<Check />} />} themeColor="success">
        Completed
      </Badge>
    </>
  )
}

```

[![Edit CodeSandbox](https://img.shields.io/badge/Badge-Open%20On%20Expo-%230971f1?style=for-the-badge&logo=expo&labelColor=151515)](https://snack.expo.dev/@timelessco/badge-component--adaptui)

## Props

> Badge implements Box accepting all `ViewProps`

| Name       | Description                                                | Type                                            | Default |
| ---------- | ---------------------------------------------------------- | ----------------------------------------------- | ------- |
| size       | How large should badge be? Defaults to 'md'                | `sm` `md` `lg`                                  | `md`    |
| variant    | How the badge should look?                                 | `outline` `subtle` `solid`                      | `solid` |
| themeColor | How the badge should be themed?                            | `base` `primary` `secondary` `success` `danger` | `base`  |
| prefix     | If added, the tag will show an icon before the tag's text. | JSX.Element                                     |         |
| textProps  | Props for the underlying Text Component                    | `TextProps` from React Native                   | {}      |
