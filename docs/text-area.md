# Textarea

![simulator_screenshot_ED7ABA23-96CB-42EC-B428-45ECA2EAC88A](https://user-images.githubusercontent.com/20360870/202635412-9ee5b2ce-2eef-4910-b137-2dd6566ef40c.png)


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
  - [Suffix](#suffix)
  - [Props](#props)
## Themes

Adapt UI provides only one `base` theme for TextArea.

![simulator_screenshot_CF05548F-87A9-4B9B-8298-42BCC812F415](https://user-images.githubusercontent.com/20360870/202165894-10ad9c82-ce7e-4251-be58-deac6ba98eb2.png)

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

Adapt UI provides four different input field components styles: `subtle`, `outline`,
 and `underline`.

You can use these various styled input field components based on the necessity
and style you wish to provide to your design.

![simulator_screenshot_ED7ABA23-96CB-42EC-B428-45ECA2EAC88A](https://user-images.githubusercontent.com/20360870/202635412-9ee5b2ce-2eef-4910-b137-2dd6566ef40c.png)

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
      <TextArea variant="subtle" placeholder="Whats happening" />
      <TextArea placeholder="Tell us about yourself" />
      <TextArea variant="underline" placeholder="Type your message here" />
    </>
  )
}

```

</details>

## Size

There are four different sizes for input in Adapt UI: `sm`, `md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.


![simulator_screenshot_B717A1F7-8750-4FBC-8616-B35A64853D61](https://user-images.githubusercontent.com/20360870/202188784-1aa674aa-62bc-4ec5-b207-e249c23795c2.png)


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
      <TextArea size="sm" placeholder="Whats happening" />
      <TextArea placeholder="Whats in your mind?" />
      <TextArea size="lg" placeholder="Type your message here" />
      <TextArea size="xl" placeholder="Tell us about yourself" />
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


### Suffix

The suffix is a slot at the beginning or suffix position of a component. Here in the Textarea, the suffix slot can be used to bring icons. Suffix itself doesn't have any unique property.

Here in the Textarea, we have an icon in the suffix slot. You can change the icon by passing an component to suffix prop.
The Icon will get hidden when the `loading` prop is true. 

![simulator_screenshot_669C1EEF-2D9A-4E3F-B378-6A58DCCA0DF9](https://user-images.githubusercontent.com/20360870/202167240-dd1bedc8-a5de-46a4-b6ee-b0f81c87cc1e.png)

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
      <TextArea placeholder="Type something..." 
       suffix={<Icon icon={<Slot />} />}
      />
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
