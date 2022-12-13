import React from "react";
import { Platform } from "react-native";
import { Popover } from "react-native-popper";

import { Box, Text } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, RenderPropType } from "../../utils";

import TooltipArrow from "./TooltipArrow";

export type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right"
  | "right top"
  | "right bottom"
  | "left top"
  | "left bottom";

export type TooltipTriggerAction = "press" | "hover" | "longPress" | undefined;

export interface TooltipProps {
  /**
   *  Tooltip/Popover Placement
   * @default bottom
   */
  placement: TooltipPlacement;
  /**
   * Content of Tooltip
   */
  content: RenderPropType;
  /**
   * Trigger for the Tooltip
   */
  trigger: RenderPropType;
  /**
   * Action in which to show the Tooltip
   * @default onPress
   */
  action: TooltipTriggerAction;
  /**
   * Distance between popover and trigger's main axis
   * @default 0
   */
  mainOffset: number;
  /**
   * Distance between popover and trigger's cross axis
   * @default 0
   */
  crossOffset: number;
  /**
   * Tooltip Renders with an Arrow
   * @default false
   */
  hasArrow: boolean;
  /**
   * Whether the popover should flip if there's less space.
   * @default true
   */
  shouldFlip: boolean;
  /**
   * Is the Tooltip Open for Controlled popovers
   */
  isTooltipOpen: boolean;
  /**
   * A callback to listen to change events also to set state for controlled popovers.
   */
  handleTooltipState: (isOpen: boolean) => void;
}

export const RNTooltip: React.FC<Partial<TooltipProps>> = props => {
  const tailwind = useTheme();
  const tooltipTheme = useTheme("tooltip");

  const {
    trigger,
    content,
    placement = "bottom",
    mainOffset = 0,
    crossOffset = 0,
    hasArrow = false,
    shouldFlip = true,
    action = Platform.OS === "web" ? "hover" : "press",
  } = props;

  return (
    <Popover
      offset={mainOffset}
      crossOffset={crossOffset}
      shouldFlip={shouldFlip}
      placement={placement}
      on={action}
      // @ts-ignore
      trigger={trigger}
    >
      {Platform.OS !== "web" && <Popover.Backdrop />}
      <Popover.Content>
        {hasArrow && <TooltipArrow />}
        <Box style={tailwind.style(cx(tooltipTheme.contentWrapper))}>
          {typeof content === "string" ? (
            <Text style={tailwind.style(cx(tooltipTheme.content))}>
              {content}
            </Text>
          ) : (
            (content as React.ReactNode)
          )}
        </Box>
      </Popover.Content>
    </Popover>
  );
};

RNTooltip.displayName = "RNTooltip";

export const Tooltip = createComponent<Partial<TooltipProps>>(RNTooltip, {
  shouldMemo: true,
});
