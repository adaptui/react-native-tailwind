# Tooltip

AdaptUI provides a Tooltip Component which can be used to provide a brief,
informative message when a user interacts with an element.

#### Simple Usage

```
import { Tooltip, Button } from "@adaptui/react-native-tailwind"
export default function App() {
  return (
      <Tooltip
        hasArrow
        placement="top"
        trigger={
          <Button
            style={tailwind.style("my-1")}
            prefix={<Icon icon={<Clock />} />}
            themeColor="success"
            size="sm"
          >
            Progress on Top
          </Button>
        }
        content="2 out 3 tasks completed"
      />
  )
}
```

This component uses <Popover> component from
[`react-native-popper`](https://github.com/intergalacticspacehighway/react-native-popper)

## Props

| Name               | Description                                                                      | Type                                                                                                                                  | Default  |
| ------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| placement          | Tooltip placement                                                                | `top` `bottom` `left` `right` `top left` `top right` `bottom left` `bottom right` `right top` `right bottom` `left top` `left bottom` | `bottom` |
| trigger            | The trigger of the Tooltip                                                       | JSXELement                                                                                                                            |          |
| content            | The content of the Tooltip                                                       | JSXELement or string                                                                                                                  |          |
| action             | Action in which to show the Tooltip                                              | JSXELement or string                                                                                                                  |          |
| mainOffset         | Distance between popover and trigger's main axis                                 | number                                                                                                                                | 0        |
| crossOffset        | Distance between popover and trigger's cross axis                                | number                                                                                                                                | 0        |
| hasArrow           | Whether popover should have an arrow                                             | boolean                                                                                                                               | false    |
| shouldFlip         | Whether the popover should flip if there's less space                            | boolean                                                                                                                               | true     |
| isTooltipOpen      | Is the Tooltip Open for Controlled popovers                                      | boolean                                                                                                                               |          |
| handleTooltipState | A callback to listen to change events also to set state for controlled popovers. | (isOpen: boolean) => void                                                                                                             |          |
