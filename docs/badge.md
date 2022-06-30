# Badge

Adapt UI provides five themes for `Badge` with three styles. Use this component
to show the status of an activity.

![simulator_screenshot_371B4CAB-C08A-4EE3-85DE-EF990FC831B1](https://user-images.githubusercontent.com/35562287/175248712-b872b752-801b-403e-ad2f-9993800cac54.png)

#### Simple Usage

```js
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

![simulator_screenshot_23A30580-3C27-435B-9A6C-F2D15534AEB3](https://user-images.githubusercontent.com/35562287/175240643-43af3704-e476-410f-807c-21bd662528f6.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Badge, useTheme } from "@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <>
<Badge>Completed</Badge> <Badge themeColor="primary">Processing</Badge>
<Badge themeColor="secondary">Waiting</Badge>
<Badge themeColor="success">Success</Badge>
<Badge themeColor="danger">Cancelled</Badge> </> ) }

```
</details>

## Variant

Adapt UI provides three different styles for badges, namely `solid`, `subtle`,
and `outline`. You can use these various styled badge components to give a
better visual hierarchy.


![Simulator Screen Shot - iPhone 12 - 2022-06-23 at 13 00 29](https://user-images.githubusercontent.com/35562287/175241854-7bb5ea10-b12a-4647-9cac-41b0d0a10bfb.png)

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js

import { Badge, useTheme } from "@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <>
<Badge>Solid</Badge> <Badge variant="subtle">Subtle</Badge>
<Badge variant="outline">Outline</Badge> </> ) }

```

</details>

## Size

Adapt UI provides three different sizes for badges, namely `sm`, `md`, and `lg`.

![Simulator Screen Shot - iPhone 12 - 2022-06-23 at 13 05 56](https://user-images.githubusercontent.com/35562287/175242915-c4df0bf3-c74a-4a2f-b3b2-f76a0b7e2827.png)

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js

import { Badge, useTheme } from "@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <>
<Badge size="sm">Small</Badge> <Badge>Medium</Badge>
<Badge size="lg">Large</Badge> </> ) }

```

</details>

## Prefix

The prefix is a slot at the beginning or prefix position of a component. Here in
the badge, the prefix slot can be used to bring an icon, spinner, or, if we need
to think wild, maybe even an avatar. Prefix itself doesn’t have any unique
property. It’s a frame that hugs the component inside it.

![simulator_screenshot_13BEF27A-9C5C-4404-84D0-65DE9A9C1387](https://user-images.githubusercontent.com/35562287/175243281-80b1a421-5856-4487-b028-b023e7ba1a67.png)


<details>
<summary>
  <h3>Usage</h3>
</summary>

```js

import { Badge, useTheme, Icon, Check } from "@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <> <Badge
prefix={<Icon icon={<Check />} />} themeColor="success"> Completed </Badge> </>
) }

```

</details>

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
```
