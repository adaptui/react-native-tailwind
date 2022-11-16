# Select

Adapt UI provides one theme for `Select` components with four styles and seven interaction states.

![simulator_screenshot_8A5D0D6E-7D61-4E89-925D-758D9C50D554](https://user-images.githubusercontent.com/35562287/202125786-e9626cb0-7298-462e-8e21-9a7748429bff.png)


#### Simple Usage

```js
import { Select } from "@adaptui/react-native-tailwind";

const themes: ItemData[] = [
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

export default function App() {
  return <Select options={themes} placeholder="Select theme" />;
}
```


## Working Preview

The Select component uses [Gorhom's React Native Bottomsheet](https://github.com/gorhom/react-native-bottom-sheet) to list the options you have provided through `options` prop. 

It uses `useControllableState` hook internally from chakra-ui to manage the state. 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/35562287/202174467-53e1d2f8-caed-4fc1-8f04-7a4a9c361084.gif)


## Table of Contents

- [Themes](#themes)
- [Variant](#variant)
- [Size](#size)
- [Prefix](#prefix)
- [Props](#props)

## Themes

Adapt UI provides only one `base` theme. You can add more themes by adding new variants and new design tokens if needed.

![simulator_screenshot_0998EA14-DD2E-4848-8ABF-ABBDE1981DDC](https://user-images.githubusercontent.com/35562287/202126465-3ee5aa8b-818b-4683-a7d7-80ad56734d85.png)

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
      <Select
        style={tailwind.style("w-60")}
        variant="subtle"
        size="xl"
        placeholder="Select a payment mode"
      />
    </> 
  ) 
}
```
</details>

## Variant

Adapt UI provides four select component styles: `outline`, `subtle`, `underline`, and `ghost`. 
You can use these various styled select components based on the necessity and style you wish to provide to your design.

![simulator_screenshot_E4CD1FC3-B47A-4E7B-9FE9-8A142608D856](https://user-images.githubusercontent.com/35562287/202127995-45a517ee-b7cb-4fcd-b88e-67aafabf0993.png)

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

![simulator_screenshot_F714FF22-4994-4635-BB23-9E0CF9ABF812](https://user-images.githubusercontent.com/35562287/202128316-6400bde3-81f4-4f52-852c-284a99294642.png)

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

![simulator_screenshot_45A7B053-DCC8-49D5-9AE9-EA0042DC3772](https://user-images.githubusercontent.com/35562287/202129117-d1e065d3-3c0c-496d-9b18-8365ff8afe19.png)

<details>
<summary>
  <h3>Usage</h3>
</summary>

```js
import { Select, useTheme, DefaultUser, Calendar, Icon } from "@adaptui/react-native-tailwind";

export default function App() {
  const tailwind = useTheme();
  return (
    <>
      <Select size="xl" placeholder="Pick a date" prefix={<Icon icon={<Calendar />} />}  />
      <Select size="xl" placeholder="Select user" prefix={<Icon icon={<DefaultUser />} />} />
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
