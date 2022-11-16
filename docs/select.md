# Select

Adapt UI provides one theme for `Select` components with four styles and seven interaction states.



#### Simple Usage

```js
import { Select } from "@adaptui/react-native-tailwind";
export default function App() {
  return <Select placeholder="Select theme" />;
}
```

## Table of Contents

- [Themes](#themes)
- [Variant](#variant)
- [Size](#size)
- [Prefix](#prefix)
- [Props](#props)

## Themes

Adapt UI provides only one `base` theme. You can add more themes by adding new variants and new design tokens if needed.

<details>

<summary>
  <h3>Usage</h3>
</summary>
  
```js
import { Select, useTheme } from "@adaptui/react-native-tailwind"

export default function App() { 
  const tailwind = useTheme(); 
  return (
    <>
     <Select placeholder="Select a payment mode" />;
    </> 
  ) 
}
```
</details>

## Variant

Adapt UI provides four select component styles: `outline`, `subtle`, `underline`, and `ghost`. 
You can use these various styled select components based on the necessity and style you wish to provide to your design.

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js
import { Select, useTheme } from "@adaptui/react-native-tailwind"

export default function App() {
  const tailwind = useTheme();
  return (
    <>
     <Select placeholder="Select a payment mode" />;
     <Select variant="subtle" placeholder="Select theme" />;
     <Select variant="underline" placeholder="Select an option" />;
     <Select variant="ghost" placeholder="Toggle list" />;

    </>
  )
}
```
</details>

## Size

There are four different sizes for select components in Adapt UI. Based on your requirement, you can switch between different sizes.

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js
import { Select, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Select size="sm" placeholder="Select gender" /> 
      <Select placeholder="Select gender" />
      <Select size="lg" placeholder="Select gender" />
      <Select size="xl" placeholder="Select gender" />
    </>
  );
}
```

</details>

## Prefix

The prefix is a slot at the beginning or prefix position of a component. Here in the select, the prefix slot can be used to bring icons. Prefix itself doesn't have any unique property.

Here in the select, we have an icon in the prefix slot. You can change the icon by passing an <Icon /> component to prefix prop.

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js
import { Select, useTheme } from "@adaptui/react-native-tailwind";

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Select size="xl" placeholder="Pick a date" />
      <Select size="xl" placeholder="Sandeep Prabhakaran" />
    </>
  );
}
```

</details>

## Props


> Select implements Touchable accepting all `PressableProps`

| Name          | Description                                                            | Type                                       | Default         |
|---------------|------------------------------------------------------------------------|--------------------------------------------|-----------------|
| options       | The Select Component options, which is rendered inside the Bottomsheet | ItemData[]*                                |                 |
| defaultState  | Default value of Select when it is uncontrolled                        | string                                     |                 |
| state         | Value of Select when it is controlled                                  | string                                     |                 |
| onStateChange | Callback called with the new value when it changes                     | (val: string) => void                      |                 |
| placeholder   | Default placeholder valye                                              | string                                     | "Select option" |
| size          | How large should the select be?                                        | `sm`, `md`, `lg`, `xl`                     | `md`            |
| variant       | How the select should look?                                            | `outline`, `subtle`, `underline` , `ghost` | `outline`       |
| prefix        | Prefix for the Select.                                                 | RenderPropType                             | null            |
| suffix        | Suffix for the Select.                                                 | RenderPropType                             | null            |
| invalid       | Set to True, if the value of the Select is invalid.                    | boolean                                    | false           |
| disabled      | Set to True, if the value of the Select is disabled.                   | boolean                                    | false           |
| snapPoints    | Bottomsheet Snap points                                                | string[]                                   | ["50%"]         |
