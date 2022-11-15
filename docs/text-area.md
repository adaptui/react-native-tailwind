# Textarea

Adapt UI provides textarea with three styles and six interaction
states. Use this component to receive information from the user.

#### Simple Usage

```js
import { TextArea } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <TextArea placeholder="Type Something...." />
  )
}
```

## Table of Contents

- [Textarea](#textarea)
      - [Simple Usage](#simple-usage)
  - [Table of Contents](#table-of-contents)
  - [Themes](#themes)
    - [Usage](#usage)
  - [Variant](#variant)
    - [Usage](#usage-1)
  - [Size](#size)
    - [Usage](#usage-2)
  - [Props](#props)

## Themes

Adapt UI provides only one `base` theme for TextArea.

### Usage

```js
import { TextArea, Slot, Icon } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <TextArea
        suffix={<Icon icon={<Slot />} />} //with icon
        placeholder="Search any places, stays or experiences"
      />
  )
}

```

## Variant

Adapt UI provides four different input field components styles: `outline`,
`subtle` and `underline`.

You can use these various styled input field components based on the necessity
and style you wish to provide to your design.

### Usage

```js
import { TextArea, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <TextArea placeholder="Address" />
      <TextArea variant="outline" placeholder="Type Something" />
      <TextArea variant="underline" placeholder="Enter installment amount" />
    </>
  )
}

```

## Size

There are four different sizes for input in Adapt UI: `sm`, `md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

### Usage

```js
import { TextArea, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <TextArea size="sm" placeholder="Type Something" />
      <TextArea placeholder="Type Something" />
      <TextArea size="lg" placeholder="Type Something" />
      <TextArea size="xl" placeholder="Type Something" />
    </>
  )
}

```

## Props

> TextArea implements TextInput from React Native accepting all `TextInputProps`

| Name          | Description                                                                          | Type                           | Default  |
| ------------- | ------------------------------------------------------------------------------------ | ------------------------------ | -------- |
| size          | Size of TextArea                                                                     | `sm` `md` `lg` `xl`            | `md`     |
| variant       | How will the TextArea look?                                                          | `outline` `subtle` `underline` | `subtle` |
| suffix        | If added, the TextArea will show an icon on the bottom right of the TextArea's text. | JSX.Element                    | null     |
| editable      | If true, TextArea is disabled                                                        | boolean                        | false    |
| invalid       | Set to true, when TextArea Value is invalid                                          | boolean                        | false    |
| loading       | If true, TextArea renders a spinner in suffix slot                                   | boolean                        | false    |
| \_suffixProps | Touchable props for the suffix element                                               | `PressableProps`               | {}       |
