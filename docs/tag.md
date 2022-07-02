# Tag

Adapt UI provides 2 themes for `Tag` with three variant states which can be used
for items that need to be labeled, categorized, or organized using keywords that
describe them.

#### Simple Usage

```js
import { Tag } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Tag>@adaptui/react-native-tailwind</Tag>
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Variants](#variants)
- [Size](#size)
- [Prefix](#prefix)
- [Suffix](#suffix)
- [Props](#props)

## Themes

Adapt UI provides three themes for the Tag Component: `base` & `primary`

### Usage

```js
import { Box, Tag } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Tag />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Tag themeColor="primary" />
      </Box>
    </>
  )
}

```

## Variant

Adapt UI provides three different styles for Tags, namely `solid`, `subtle` and `outline` Tags.

### Usage

```js
import { Box, Tag } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Tag />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Tag variant="subtle" />
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Tag variant="outline" />
      </Box>
    </>
  )
}

```

## Size

There are four different sizes for Tag Component in Adapt UI: `sm`, `md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```js
import { Box, Tag } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
    <>
      <Box style={tailwind.style("my-2")}>
        <Tag size="sm">Continue<Tag/>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Tag>Continue<Tag/>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Tag size="lg">Continue<Tag/>
      </Box>
      <Box style={tailwind.style("my-2")}>
        <Tag size="xl">Continue<Tag/>
      </Box>
    </>
  )
}

```

## Prefix

The prefix is a slot at the beginning or prefix position of a component. Here in
the Tag, the prefix slot can be used to bring an icon, spinner, or, if we need
to think wild, maybe even an avatar. Prefix itself doesn’t have any unique
property. It’s a frame that hugs the component inside it.

### Usage

```js
import { Tag, useTheme, Icon, Location } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Tag
        prefix={<Icon icon={<Location />} />}
        style={tailwind.style("my-1")}
        themeColor="primary"
        variant="outline"
      >
        Chennai
      </Tag>
    </>
  )
}

```

## Suffix

The suffix is the same as the prefix, with only a difference in its position.
Suffix usually is at the end of a component. Here in the Tag, the prefix slot
can be used to bring an icon or a spinner to show the loading interaction of the
Tag component.

### Usage

```js
import { Tag, useTheme, Icon, CaretRight } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Tag
        suffix={<Icon icon={<CaretRight />} />}
        style={tailwind.style("my-1")}
        themeColor="primary"
        variant="subtle"
      >
        Primary Subtle
      </Tag>
    </>
  )
}

```

#### Suffix Special Case

Setting a prop `closable` to true would render a `<Close />` icon.

### Usage

```js
import { Tag, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Tag closable style={tailwind.style("my-1")} themeColor="primary">
        Close
      </Tag>
    </>
  )
}

```

## Props

> Tag implements `Touchable` accepting all `PressableProps`

| Name       | Description                                                                   | Type                          | Default |
| ---------- | ----------------------------------------------------------------------------- | ----------------------------- | ------- |
| size       | The Tag Size                                                                  | `sm` `md` `lg` `xl`           | `md`    |
| variant    | The Tag Variants                                                              | `solid` `outline` `subtle`    | `solid` |
| themeColor | The Tag Theme                                                                 | `base` `primary`              | `base`  |
| suffix     | If added, the Tag will show an icon after the Tag's text.                     | JSX.Element                   |         |
| prefix     | If added, the Tag will show an icon before the Tag's text.                    | JSX.Element                   |         |
| closable   | Is Tag closable/removable? Setting it true will render a Close Icon in Suffix | boolean                       | false   |
| textStyle  | he Text style of the Tag component                                            | `TextStyle` from React Native | {}      |
