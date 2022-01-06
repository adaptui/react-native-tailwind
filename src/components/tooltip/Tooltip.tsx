import {
  OverlayContainer,
  useOverlayPosition,
} from '@react-native-aria/overlays';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { AnimatedBox, Box, Text } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent, RenderPropType } from '../../utils';
import { composeEventHandlers, mergeRefs } from '../../utils/mergeRefs';

const SPRING_CONFIG = {
  mass: 5,
  damping: 50,
  stiffness: 300,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

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

export interface TooltipProps {
  placement: TooltipPlacement;
  content: RenderPropType;
  containerPadding: number;
  offset: number;
}

interface TooltipContentProps extends TooltipProps {
  triggerRef: React.RefObject<unknown>;
}

const TooltipContent: React.FC<Partial<TooltipContentProps>> = (props) => {
  const { content, triggerRef, placement, containerPadding, offset } = props;
  const tailwind = useTheme();
  const tooltipRef = useRef();
  const tooltipAnimation = useSharedValue(0);
  useEffect(() => {
    tooltipAnimation.value = withSpring(1, SPRING_CONFIG);
    return () => {
      tooltipAnimation.value = withSpring(0, SPRING_CONFIG);
    };
  }, [tooltipAnimation]);
  const tooltipAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(tooltipAnimation.value, [0, 1], [0, 1]),
      transform: [
        { scale: interpolate(tooltipAnimation.value, [0, 1], [0.95, 1]) },
      ],
    };
  });
  const { overlayProps } = useOverlayPosition({
    overlayRef: tooltipRef,
    targetRef: triggerRef as RefObject<unknown>,
    placement,
    containerPadding,
    offset,
    shouldFlip: true,
    isOpen: true,
  });

  return (
    <AnimatedBox
      ref={tooltipRef}
      style={[
        tailwind.style(
          'absolute px-2 py-1.5 bg-gray-800 rounded-lg shadow-lg '
        ),
        overlayProps.style,
        tooltipAnimatedStyle,
      ]}
    >
      {typeof content === 'string' ? (
        <Text
          style={tailwind.style('text-cxs text-white font-normal leading-4')}
        >
          {content}
        </Text>
      ) : (
        content
      )}
    </AnimatedBox>
  );
};

export const RNTooltip: React.FC<Partial<TooltipProps>> = (props) => {
  const {
    content,
    placement = 'bottom',
    containerPadding = 0,
    offset = 10,
  } = props;
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  const tailwind = useTheme();
  const tooltipTriggerRef = useRef();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const TooltipTrigger = React.cloneElement(props.children, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref: mergeRefs([props.children.ref, tooltipTriggerRef]),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ['onPressIn']: composeEventHandlers(props.children.onPressIn, showTooltip),
    ['onPressOut']: composeEventHandlers(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props.children.onPressOut,
      hideTooltip
    ),
  });

  return (
    <Box style={tailwind.style('relative')}>
      {TooltipTrigger}
      {isTooltipVisible && (
        <OverlayContainer>
          <TooltipContent
            triggerRef={tooltipTriggerRef}
            content={content}
            placement={placement}
            offset={offset}
            containerPadding={containerPadding}
          />
        </OverlayContainer>
      )}
    </Box>
  );
};

RNTooltip.displayName = 'RNTooltip';

export const Tooltip = createComponent<Partial<TooltipProps>>(RNTooltip, {
  shouldMemo: true,
});
