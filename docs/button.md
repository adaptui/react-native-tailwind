# Button

Adapt UI provides five themes for `Button` with four variant. Use this component
to receive a specific request from the user.

![simulator_screenshot_B8B371AC-3850-46D9-96C5-27F1D400A07B](https://user-images.githubusercontent.com/35562287/175280578-b5bfe58b-6129-429e-a120-9e7340f2414d.png)

#### Simple Usage

```
import { Button } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Button>Get Started</Button>
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

![simulator_screenshot_CDE9AA6A-4264-49EA-9BF6-579FE99F3E45](https://user-images.githubusercontent.com/35562287/175274104-8c261360-0d0c-4753-bb51-c72514144049.png)

<details>
<summary>
  <h3>Usage</h3>
</summary>
  
```
import { Button, useTheme } from "@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <>
<Button>Get Started</Button> <Button themeColor="primary">Register for
free</Button> <Button themeColor="secondary">Watch Demo</Button>
<Button themeColor="success">Subscribe to Newsletter</Button>
<Button themeColor="danger">Delete</Button> </> ) }

```
</details>


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

![simulator_screenshot_644B7A72-EBA3-4296-B05A-1B55E58CBB57](https://user-images.githubusercontent.com/35562287/175274648-0d5c852f-82a9-49c4-a9a3-9e3401c27f8c.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```

import { Button, useTheme } from "@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <>
<Button>Buy this Stock</Button> <Button variant="subtle">Contact Us</Button>
<Button variant="outline">Add Subtask</Button> <Button variant="ghost">Skip for
now</Button> </> ) }

```

</details>

## Size

There are four different sizes for buttons in Adapt UI: `sm`, `md`, `lg` & `xl`.
Based on the hierarchy, you can switch between different sizes.

![simulator_screenshot_C3201852-F472-442E-9EFF-D928BFCD4AFC](https://user-images.githubusercontent.com/35562287/175275224-59d11951-fd45-4717-bc82-bbbdf4772fa0.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```

import { Button, useTheme } from "@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <>
<Button size="sm">Share</Button> <Button>Share</Button>
<Button size="lg">Share</Button> <Button size="xl">Share</Button> </> ) }

```

</details>

## Prefix

The prefix is a slot at the beginning or prefix position of a component. Here in
the button, the prefix slot can be used to bring an icon, spinner, or, if we
need to think wild, maybe even an avatar. Prefix itself doesn’t have any unique
property. It’s a frame that hugs the component inside it.

![simulator_screenshot_3CAB6EBE-4566-44A8-BBDA-0228F9B7F22C](https://user-images.githubusercontent.com/35562287/175275961-ec61f262-164c-4976-9e76-dff39b97ad10.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```

import { Button, useTheme, Icon, DefaultUser } from
"@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <> <Button
prefix={<Icon icon={<DefaultUser />} />} themeColor="success"> Sign In </Button>
</> ) }

```

</details>

## Suffix

The suffix is the same as the prefix, with only a difference in its position.
Suffix usually is at the end of a component. Here in the button, the prefix slot
can be used to bring an icon or a spinner to show the loading interaction of the
button component.

![simulator_screenshot_C6A4D0D0-5F94-4E1D-B095-66878EABA9CD](https://user-images.githubusercontent.com/35562287/175276283-0ada6b3a-3494-495b-8996-ed68f3399b98.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```

import { Button, useTheme, Icon, CaretRight } from
"@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <> <Button
themeColor="primary" suffix={<Icon icon={<CaretRight />} />}> Continue </Button>
</> ) }

```

</details>

## IconOnly

It’s a unique property for the button components used to switch button
components between buttons with text and icon-only variants. You get only one
slot for your icon.

![simulator_screenshot_A40A8968-A3AD-46EA-AB78-A62E9FF1521C](https://user-images.githubusercontent.com/35562287/175276812-619d46b4-a948-43c5-a338-38e70d7359bd.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```

import { Button, useTheme, Icon, CaretRight, Add, Delete } from
"@adaptui/react-native-tailwind"

export default function App() { const tailwind = useTheme(); return ( <> <Button
themeColor="primary" iconOnly={<Icon icon={<CaretRight />} />}
style={tailwind.style("my-1")} /> <Button themeColor="success" iconOnly={<Icon
icon={<Add />} />} style={tailwind.style("my-1")} /> <Button themeColor="danger"
iconOnly={<Icon icon={<Delete />} />} style={tailwind.style("my-1")} /> </> ) }

```
</details>

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
```
