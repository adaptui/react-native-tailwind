import { useHover } from '@react-native-aria/interactions';
import {
  OverlayContainer,
  useOverlayPosition,
} from '@react-native-aria/overlays';
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Platform, StyleSheet, ViewStyle } from 'react-native';
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
import { TooltipArrow } from './TooltipArrow';

const SPRING_CONFIG = {
  mass: 5,
  damping: 50,
  stiffness: 300,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const defaultArrowHeight = 12;
const defaultArrowWidth = 12;

const getDiagonalLength = (height: number, width: number) => {
  return Math.pow(height * height + width * width, 0.5);
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
  hasArrow: boolean;
}

interface TooltipContentProps extends TooltipProps {
  triggerRef: React.RefObject<unknown>;
}

const TooltipContent: React.FC<Partial<TooltipContentProps>> = (props) => {
  const {
    content,
    triggerRef,
    placement: placementProp,
    containerPadding,
    offset,
    hasArrow,
  } = props;
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
  const { overlayProps, arrowProps, placement } = useOverlayPosition({
    overlayRef: tooltipRef,
    targetRef: triggerRef as RefObject<unknown>,
    placement: placementProp,
    containerPadding,
    offset: offset || props.hasArrow ? 4 : 6,
    shouldFlip: true,
    isOpen: true,
  });

  const diagonalLength =
    getDiagonalLength(defaultArrowHeight, defaultArrowWidth) / 2;

  let finalArrowPlacementStyles: ViewStyle = {};
  if (placement?.includes('top')) {
    finalArrowPlacementStyles = {
      ...finalArrowPlacementStyles,
      bottom: Math.ceil((diagonalLength - defaultArrowHeight) / 2) + 2,
    };
  }

  if (placement?.includes('bottom')) {
    finalArrowPlacementStyles = {
      ...finalArrowPlacementStyles,
      top: Math.ceil((diagonalLength - defaultArrowHeight) / 2) + 2,
    };
  }

  if (placement?.includes('left')) {
    finalArrowPlacementStyles = {
      ...finalArrowPlacementStyles,
      right: Math.ceil((diagonalLength - defaultArrowWidth) / 2) + 2,
    };
  }

  if (placement?.includes('right')) {
    finalArrowPlacementStyles = {
      ...finalArrowPlacementStyles,
      left: Math.ceil((diagonalLength - defaultArrowWidth) / 2) + 2,
    };
  }

  const arrowTransformStyles: ViewStyle = {
    transform: [
      {
        translateX:
          placement === 'top' || placement === 'bottom'
            ? -defaultArrowWidth / 2
            : 0,
      },
      {
        translateY:
          placement === 'left' || placement === 'right'
            ? -defaultArrowHeight / 2
            : 0,
      },
      {
        rotate:
          placement === 'top'
            ? '0deg'
            : placement === 'bottom'
            ? '180deg'
            : placement === 'left'
            ? '-90deg'
            : '90deg',
      },
    ],
  };

  const getContainerStyle: Partial<ViewStyle> = useMemo(() => {
    if (placement === 'top') {
      return { marginBottom: diagonalLength };
    }

    if (placement === 'bottom') {
      return { marginTop: diagonalLength };
    }

    if (placement === 'left') {
      return { marginRight: diagonalLength };
    }

    if (placement === 'right') {
      return { marginLeft: diagonalLength };
    }
    return {};
  }, [diagonalLength, placement]);

  return (
    <AnimatedBox
      ref={tooltipRef}
      style={[
        tailwind.style('absolute'),
        overlayProps.style,
        tooltipAnimatedStyle,
      ]}
    >
      <Box
        style={[
          tailwind.style('px-2 py-1.5 bg-gray-800 rounded-lg'),
          getContainerStyle,
        ]}
      >
        {typeof content === 'string' ? (
          <Text
            style={tailwind.style(
              'text-cxs text-white text-center font-normal leading-4'
            )}
          >
            {content}
          </Text>
        ) : (
          content
        )}
      </Box>
      {hasArrow && (
        <Box
          style={[
            StyleSheet.absoluteFill,
            tailwind.style('w-3 h-3 z-10'),
            arrowProps.style,
            arrowTransformStyles,
            finalArrowPlacementStyles,
          ]}
        >
          <TooltipArrow />
        </Box>
      )}
    </AnimatedBox>
  );
};

export const RNTooltip: React.FC<Partial<TooltipProps>> = (props) => {
  const {
    content,
    placement = 'bottom',
    containerPadding = 0,
    offset = 6,
    hasArrow = false,
  } = props;
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  const tailwind = useTheme();
  const tooltipTriggerRef = useRef();
  const { isHovered, hoverProps } = useHover({}, tooltipTriggerRef);

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
    ...hoverProps,
  });

  return (
    <Box style={tailwind.style('relative')}>
      {TooltipTrigger}
      {Platform.OS === 'web'
        ? isHovered && (
            <OverlayContainer>
              <TooltipContent
                triggerRef={tooltipTriggerRef}
                content={content}
                placement={placement}
                offset={offset}
                containerPadding={containerPadding}
                hasArrow={hasArrow}
              />
            </OverlayContainer>
          )
        : isTooltipVisible && (
            <OverlayContainer>
              <TooltipContent
                triggerRef={tooltipTriggerRef}
                content={content}
                placement={placement}
                offset={offset}
                containerPadding={containerPadding}
                hasArrow={hasArrow}
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
