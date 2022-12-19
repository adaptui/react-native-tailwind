# Tooltip

AdaptUI provides a Tooltip Component which can be used to provide a brief,
informative message when a user interacts with an element.

<div align='center'>
<img src="https://user-images.githubusercontent.com/35562287/208374706-a85e0bc5-f6c4-4ef4-8c6e-bfb42f69c349.png" style="width:375px;" />
</div>
  
#### Simple Usage

```js
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

This component uses `<Popover>` component from
[`react-native-popper`](https://github.com/intergalacticspacehighway/react-native-popper)

## Props

| Name               | Description                                                                      | Type                      | Default |
|--------------------|----------------------------------------------------------------------------------|---------------------------|---------|
| placement          | Tooltip placement with respect to the trigger placement                          | TooltipPlacement          |         |
| trigger            | The trigger of the Tooltip                                                       | JSXELement                |         |
| content            | The content of the Tooltip                                                       | JSXELement or string      |         |
| action             | Action in which to show the Tooltip                                              | JSXELement or string      |         |
| mainOffset         | Distance between popover and trigger's main axis                                 | number                    | 0       |
| crossOffset        | Distance between popover and trigger's cross axis                                | number                    | 0       |
| hasArrow           | Whether popover should have an arrow                                             | boolean                   | false   |
| shouldFlip         | Whether the popover should flip if there's less space                            | boolean                   | true    |
| isTooltipOpen      | Is the Tooltip Open for Controlled popovers                                      | boolean                   |         |
| handleTooltipState | A callback to listen to change events also to set state for controlled popovers. | (isOpen: boolean) => void |         |

> type TooltipPlacement `top` `bottom` `left` `right` `top left` `top right` `bottom left` `bottom right` `right top` `right bottom` `left top` 
