# Input

Adapt UI provides one theme for input with four styles and eight interaction states. 
Use this component to receive information from the user.

![simulator_screenshot_DBBFCAB9-BC73-46E7-BB87-FC8417E25F8A](https://user-images.githubusercontent.com/35562287/203317460-c7a0c0e9-3ae5-43f1-9325-4834f38c20eb.png)

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
- [Prefix](#prefix)
- [Suffix](#suffix)
- [Props](#props)

## Themes

Adapt UI provides only one `base` theme for Input.

![simulator_screenshot_C22E067A-C1F2-40C2-83CA-7C3D4B400A84](https://user-images.githubusercontent.com/35562287/203317985-e9b87f72-4538-4766-b247-885556b59794.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
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
</details>

## Variant

Adapt UI provides four different input field components styles: `outline`,
`subtle`, `underline`, and `ghost`.

You can use these various styled input field components based on the necessity
and style you wish to provide to your design.

![simulator_screenshot_D438138D-0954-4894-AD54-7E6CFF10C6DC](https://user-images.githubusercontent.com/35562287/203319433-c06d2a01-08a7-4b38-bc9d-ac2d96230775.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
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
</details>


## Size

There are four different sizes for input in Adapt UI: `sm`, `md`, `lg` & `xl`

Based on the hierarchy, you can switch between different sizes.

![simulator_screenshot_82D4655C-40C4-481B-95C5-37BA200B9CA9](https://user-images.githubusercontent.com/35562287/203319797-ca2c4d68-8bcc-4d3b-a03e-72f7a6bead91.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

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
</details>


## Prefix

The prefix is a slot at a component's beginning or prefix position. Here in the input, the prefix slot can be used to bring an icon or, if we need to think wild, maybe even an avatar. Prefix itself doesn't have any unique property. 

There are no restrictions on what should be inside the prefix. Whatever component it is, it should work fine.

![simulator_screenshot_E0DE071C-13AB-4DD3-8F83-4AB1AE97ACD6](https://user-images.githubusercontent.com/35562287/203334964-c147bf16-7023-4ca4-a62f-8b9f8c8444be.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { Input, useTheme, Icon, Location } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Input
        placeholder={"Where are you going?"}
        prefix={<Icon icon={<Location />} />}
      />
    </>
  )
}
```
</details>

## Suffix

The suffix is the same as the prefix, with only a difference in its position. Suffix usually is at the end of a component. Here in the input field component, the suffix slot can bring an icon or a spinner to show the loading interaction of the input component.

![simulator_screenshot_BB79CC77-A590-4A22-9C55-9B90D8BF11C6](https://user-images.githubusercontent.com/35562287/203334831-5de40f3e-6feb-4261-b25e-0d0916acc78c.png)

<details>

<summary>
  <h3>Usage</h3>
</summary>

```js
import { Input, useTheme, Icon, Location } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Input
        textInputWrapperProps={{ style: tailwind.style("my-2") }}
        placeholder={"Enter email"}
        invalid
        suffix={<Icon icon={<Info />} />}
      />
    </>
  )
}
```
</details>

## Props

> Input implements TextInput from React Native accepting all `TextInputProps`

| Name          | Description                                                    | Type                                   | Default   |
|---------------|----------------------------------------------------------------|----------------------------------------|-----------|
| size          | Size of Input                                                  | `sm` `md` `lg` `xl`                    | `md`      |
| variant       | How will the Input look?                                       | `outline` `subtle` `underline` `ghost` | `outline` |
| suffix        | If added, the Input will show an icon after the Input's text.  | JSX.Element                            | null      |
| prefix        | If added, the Input will show an icon before the Input's text. | JSX.Element                            | null      |
| invalid       | Set to true, when Input Value is invalid                       | boolean                                | false     |
| loading       | If true, Input renders a spinner in suffix slot                | boolean                                | false     |
| \_prefixProps | Touchable props for the prefix element                         | `PressableProps`                       | {}        |
| \_suffixProps | Touchable props for the suffix element                         | `PressableProps`                       | {}        |
