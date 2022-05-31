import React, { useMemo } from 'react';
import { Platform } from 'react-native';
import { Popover } from 'react-native-popper';
import { Box, Text } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent, RenderPropType } from '../../utils';
import TooltipArrow from './TooltipArrow';

export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
  | 'right top'
  | 'right bottom'
  | 'left top'
  | 'left bottom';

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

export type TooltipAlign = 'end' | 'start' | 'center';

export type TooltipTriggerAction = 'press' | 'hover' | 'longPress' | undefined;

export interface TooltipProps {
  /**
   *  Tooltip/Popover Position
   * @default bottom
   */
  side: TooltipSide;
  /**
   * Tooltip/Popover Alignment
   * @default center
   */
  align: TooltipAlign;
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
  action: 'onPress' | 'onPressIn' | 'onLongPress';
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

export const RNTooltip: React.FC<Partial<TooltipProps>> = (props) => {
  const tailwind = useTheme();
  const tooltipTheme = useTheme('tooltip');

  const {
    trigger,
    content,
    side = 'bottom',
    align = 'center',
    mainOffset = 0,
    crossOffset = 0,
    hasArrow = false,
    shouldFlip = true,
    action = 'onPress',
  } = props;

  const placement = useMemo(() => {
    if (align === 'center') {
      return side;
    } else if (align === 'start') {
      if (side === 'top' || side === 'bottom') {
        return `${side} left`;
      } else {
        return `${side} top`;
      }
    } else {
      if (side === 'top' || side === 'bottom') {
        return `${side} right`;
      } else {
        return `${side} bottom`;
      }
    }
  }, [side, align]) as TooltipPlacement;

  const tooltipTriggerAction = useMemo(() => {
    if (Platform.OS === 'web') {
      return 'hover';
    } else {
      if (action === 'onPress') {
        return 'press';
      } else {
        return 'longPress';
      }
    }
  }, [action]) as TooltipTriggerAction;

  const getArrowPosition = (arrowPlacement: TooltipPlacement) => {
    if (arrowPlacement.split(' ')[0] === 'top') {
      return {
        transform: [{ rotate: '0deg' }, { translateX: -6 }],
        bottom: -4,
      };
    } else if (arrowPlacement?.split(' ')[0] === 'bottom') {
      return {
        transform: [{ rotate: '0deg' }, { translateX: -6 }],
      };
    } else if (arrowPlacement?.split(' ')[0] === 'left') {
      return {
        transform: [{ rotate: '0deg' }, { translateY: -6 }, { translateX: 5 }],
      };
    } else if (arrowPlacement?.split(' ')[0] === 'right') {
      return {
        transform: [{ rotate: '0deg' }, { translateY: -6 }, { translateX: -1 }],
      };
    }
    return {};
  };
  return (
    <Popover
      offset={mainOffset}
      crossOffset={crossOffset}
      shouldFlip={shouldFlip}
      placement={placement}
      on={tooltipTriggerAction}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      trigger={trigger}
    >
      {Platform.OS !== 'web' && <Popover.Backdrop />}
      <Popover.Content>
        {hasArrow && (
          <Popover.Arrow
            height={16}
            width={16}
            style={getArrowPosition(placement)}
          >
            <TooltipArrow placement={placement} />
          </Popover.Arrow>
        )}
        <Box style={tailwind.style(tooltipTheme.contentWrapper)}>
          {typeof content === 'string' ? (
            <Text style={tailwind.style(tooltipTheme.content)}>{content}</Text>
          ) : (
            content
          )}
        </Box>
      </Popover.Content>
    </Popover>
  );
};

RNTooltip.displayName = 'RNTooltip';

export const Tooltip = createComponent<Partial<TooltipProps>>(RNTooltip, {
  shouldMemo: true,
});
