# Input

Adapt UI provides two themes for input with four styles and eight interaction
states. Use this component to receive information from the user.

#### Simple Usage

```js
import { Input } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Input placeholder="Search" />
  )
}
```

## Table of Contents

- [Themes](#themes)
- [Variant](#variant)
- [Size](#size)
- [Props](#props)

## Themes

Adapt UI provides only one `base` theme for Input.

### Usage

```js
import { Input, Search, Icon } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Input
        prefix={<Icon icon={<Search />} />}
        placeholder="Search any places, stays or experiences"
      />
  )
}

```

## Variant

Adapt UI provides four different input field components styles: `outline`,
`subtle`, `underline`, and `ghost`.

You can use these various styled input field components based on the necessity
and style you wish to provide to your design.

### Usage

```js
import { Input, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Input placeholder="Full name" />
      <Input variant="subtle" placeholder="Full name" />
      <Input variant="underline" placeholder="Enter installment amount" />
      <Input variant="ghost" placeholder="Enter landmark" />
    </>
  )
}

```

## Size

There are four different sizes for input in Adapt UI: `sm`, `md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```js
import { Input, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Input size="sm" placeholder="Full name" />
      <Input placeholder="Full name" />
      <Input size="lg" placeholder="Full name" />
      <Input size="xl" placeholder="Full name" />
    </>
  )
}

```

## Props

> Input implements TextInput from React Native accepting all `TextInputProps`

| Name          | Description                                                    | Type                                   | Default   |
| ------------- | -------------------------------------------------------------- | -------------------------------------- | --------- |
| size          | Size of Input                                                  | `sm` `md` `lg` `xl`                    | `md`      |
| variant       | How will the Input look?                                       | `outline` `subtle` `underline` `ghost` | `outline` |
| suffix        | If added, the Input will show an icon after the Input's text.  | JSX.Element                            | null      |
| prefix        | If added, the Input will show an icon before the Input's text. | JSX.Element                            | null      |
| invalid       | Set to true, when Input Value is invalid                       | boolean                                | false     |
| loading       | If true, Input renders a spinner in suffix slot                | boolean                                | false     |
| \_prefixProps | Touchable props for the prefix element                         | `PressableProps`                       | {}        |
| \_suffixProps | Touchable props for the suffix element                         | `PressableProps`                       | {}        |
