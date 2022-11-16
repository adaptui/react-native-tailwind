# Textarea

![SCR-20221116-gzi](https://user-images.githubusercontent.com/20360870/202104722-6d5cf79a-60a7-4a06-ac61-b92aa086bf4c.png)


Adapt UI provides one theme for text area component with three styles and eight interaction states. Use this component to receive information from the user.

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

  - [Themes](#themes)
  - [Variant](#variant)
  - [Size](#size)
  - [Icon](#icon)
  - [Interactions](#interactions)
  - [Props](#props)
## Themes

Adapt UI provides only one `base` theme for TextArea.

![SCR-20221116-gzi](https://user-images.githubusercontent.com/20360870/202104722-6d5cf79a-60a7-4a06-ac61-b92aa086bf4c.png)

<details>

<summary>
  <b>Usage</b>
</summary>

### Usage

```js
import { TextArea, Slot, Icon } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <TextArea
        placeholder="Type Something..."
      />
  )
}

```

</details>

## Variant

Adapt UI provides four different input field components styles: `outline`,
`subtle` and `underline`.

You can use these various styled input field components based on the necessity
and style you wish to provide to your design.

![SCR-20221116-h9c](https://user-images.githubusercontent.com/20360870/202107264-835c7781-9990-435f-a02a-7a08b3e2f04f.png)

<details>

<summary>
<b>Usage</b>
</summary>

### Usage

```js
import { TextArea } from "@adaptui/react-native-tailwind"

export default function App() {
  return (
    <>
      <TextArea placeholder="Type something" />
      <TextArea variant="outline" placeholder="Type something" />
      <TextArea variant="underline" placeholder="Type something" />
    </>
  )
}

```

</details>

## Size

There are four different sizes for input in Adapt UI: `sm`, `md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.


![SCR-20221116-hly](https://user-images.githubusercontent.com/20360870/202110537-fbccf81a-d7a7-46b1-86f8-cc6794cfec24.png)


<details>

<summary>
<b>Usage</b>
</summary>

### Usage

```js
import { TextArea } from "@adaptui/react-native-tailwind"

export default function App() {
  return (
    <>
      <TextArea size="sm" placeholder="Type something..." />
      <TextArea placeholder="Type Something" />
      <TextArea size="lg" placeholder="Type something..." />
      <TextArea size="xl" placeholder="Type something..." />
    </>
  )
}

```
</details>

### Interactions

We tried to bring the most commonly used interactions for the text area component. Adapt UI provides eight-input interactions: default, hover, active, focus, disabled, loading, error, and filled. These can give a complete cycle of text area interactions.

![SCR-20221116-i5r](https://user-images.githubusercontent.com/20360870/202116137-bac7d6eb-8eb5-4eb9-81fc-0a1293eb3d97.png)

<details>

<summary>
<b>Usage</b>
</summary>

### Usage

```js
import { TextArea } from "@adaptui/react-native-tailwind"

export default function App() {
  return (
    <>
      <TextArea placeholder="Type something..." loading={true} />
      <TextArea placeholder="Type Something" editable={true}  /> //disabled
      <TextArea placeholder="Type something..." invalid={true} />
    </>
  )
}

```

</details>

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
