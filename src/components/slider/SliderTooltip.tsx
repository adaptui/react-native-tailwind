import React, { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { SliderSizes } from './Slider';
import { AnimatedBox, Box } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';
import { TooltipProps } from '../tooltip';
import { TooltipArrow } from '../tooltip/TooltipArrow';

interface SliderTooltipProps extends TooltipProps {
  triggerRef: React.RefObject<unknown>;
  draggingValue: SharedValue<number>;
  isDragging: SharedValue<boolean>;
  knobRadius: number;
  size: SliderSizes;
}

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

const RNSliderTooltip: React.FC<Partial<SliderTooltipProps>> = (props) => {
  const defaultDraggingValue = useSharedValue(0);
  const defaultIsDraggingValue = useSharedValue(0);
  const tooltipWidth = useSharedValue(0);
  const {
    content,
    draggingValue = defaultDraggingValue,
    isDragging = defaultIsDraggingValue,
    knobRadius = 0,
    size = 'md',
  } = props;

  const tailwind = useTheme();
  const sliderTheme = useTheme('slider');

  const tooltipRef = useRef();
  const tooltipAnimation = useSharedValue(0);
  useEffect(() => {
    tooltipAnimation.value = withSpring(1, SPRING_CONFIG);
    return () => {
      tooltipAnimation.value = withSpring(0, SPRING_CONFIG);
    };
  }, [tooltipAnimation]);

  const diagonalLength =
    getDiagonalLength(defaultArrowHeight, defaultArrowWidth) / 2;

  const getContainerStyle: Partial<ViewStyle> = useMemo(() => {
    return { marginBottom: diagonalLength };
  }, [diagonalLength]);

  const animatedArrowStyle = useAnimatedStyle(() => {
    return {
      top: undefined,
      left: tooltipWidth.value / 2 - defaultArrowWidth / 2,
    };
  }, [tooltipWidth.value]);

  const tooltipAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: isDragging.value ? withSpring(1) : withSpring(0),
      transform: [
        { scale: interpolate(tooltipAnimation.value, [0, 1], [0.95, 1]) },
        { translateX: draggingValue.value },
      ],
      display: isDragging.value ? 'flex' : 'none',
      left: knobRadius - tooltipWidth.value / 2,
      bottom: sliderTheme.tooltip.position[size] * 2 + 6,
    };
  }, [tooltipWidth.value]);

  return (
    <AnimatedBox
      ref={tooltipRef}
      onLayout={(e) =>
        (tooltipWidth.value = Math.round(e.nativeEvent.layout.width))
      }
      style={[tailwind.style('absolute'), tooltipAnimatedStyle]}
    >
      <Box
        style={[
          tailwind.style(
            'px-2 py-1.5 min-w-8 justify-center items-center bg-gray-800 rounded-lg'
          ),
          getContainerStyle,
        ]}
      >
        {content}
      </Box>
      <AnimatedBox
        style={[
          StyleSheet.absoluteFill,
          tailwind.style('w-3 h-3 z-10'),
          animatedArrowStyle,
        ]}
      >
        <TooltipArrow />
      </AnimatedBox>
    </AnimatedBox>
  );
};

RNSliderTooltip.displayName = 'RNSliderTooltip';

export const SliderTooltip = createComponent<Partial<SliderTooltipProps>>(
  RNSliderTooltip,
  {
    shouldMemo: true,
  }
);
