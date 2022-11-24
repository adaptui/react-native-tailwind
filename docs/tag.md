# Tag

Adapt UI provides 2 themes for `Tag` with three variant states which can be used
for items that need to be labeled, categorized, or organized using keywords that
describe them.

![simulator_screenshot_2BED2189-EDEE-4C23-BB64-C3D04727BA2D](https://user-images.githubusercontent.com/35562287/203706034-1e8487da-52fb-4331-84d6-f6b9d0d7e24f.png)

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

![simulator_screenshot_8C125A32-5E1F-4716-B62F-08BDD2A420D3](https://user-images.githubusercontent.com/35562287/203707882-abd893c1-6cc0-4964-82e7-fae050cbe991.png)

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

![simulator_screenshot_20A3DDD7-DE28-40B1-9A8C-510C7EB7F2D0](https://user-images.githubusercontent.com/35562287/203710272-fe25d68c-fbf1-4f77-805b-4f779ef7b554.png)

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

![simulator_screenshot_596B297D-7557-46F3-9188-B927BE27C004](https://user-images.githubusercontent.com/35562287/203711080-bca70ab7-5b53-4e8e-834c-a1a12f3b1e79.png)

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

![simulator_screenshot_8A97A56F-3E6D-47BD-92B6-73629E1C3EA9](https://user-images.githubusercontent.com/35562287/203711181-834d20b9-5e1a-4c06-b10b-f9ba7e2fdfde.png)

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

![simulator_screenshot_9A0C5D0C-46C9-49CE-A1D7-3A8B7568699A](https://user-images.githubusercontent.com/35562287/203711832-effe5849-7a49-49db-ad41-b247ac34a35a.png)


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

![simulator_screenshot_217418D1-E68D-44C2-97EF-BD9FB6B3A3FE](https://user-images.githubusercontent.com/35562287/203712282-034ce7f5-0883-4a72-aeb8-049f3dadcab0.png)

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
| textStyle  | The Text style of the Tag component                                           | `TextStyle` from React Native | {}      |
