import React, { useEffect, useMemo, useRef } from "react";
import { LayoutChangeEvent, StyleSheet, ViewStyle } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

import { AnimatedBox, Box } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
import { createComponent } from "../../utils";
import { TooltipProps } from "../tooltip";

import { SliderSizes } from "./Slider";

const TooltipArrow: React.FC = () => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 5" fill="none">
      <Path
        d="M11.1466 0C16.3801 0 -4.3808 0 0.853735 0C2.7834 0 4.5931 5 6.00014 5C7.40719 5 9.23748 0 11.1466 0Z"
        fill="#171717"
      />
    </Svg>
  );
};
interface SliderTooltipProps extends TooltipProps {
  triggerRef: React.RefObject<unknown>;
  draggingValue: Animated.SharedValue<number>;
  isDragging: Animated.SharedValue<boolean>;
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

const RNSliderTooltip: React.FC<Partial<SliderTooltipProps>> = props => {
  const defaultDraggingValue = useSharedValue(0);
  const defaultIsDraggingValue = useSharedValue(0);
  const tooltipWidth = useSharedValue(0);
  const {
    content,
    draggingValue = defaultDraggingValue,
    isDragging = defaultIsDraggingValue,
    knobRadius = 0,
    size = "md",
  } = props;

  const { ts } = useTailwind();
  const sliderTheme = useTheme("slider");

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
      bottom: 0.5,
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
      display: isDragging.value ? "flex" : "none",
      left: knobRadius - tooltipWidth.value / 2,
      bottom: sliderTheme.size[size]?.tooltip.position * 2,
    };
  }, [tooltipWidth.value]);

  return (
    <AnimatedBox
      ref={tooltipRef}
      onLayout={(e: LayoutChangeEvent) =>
        (tooltipWidth.value = Math.round(e.nativeEvent.layout.width))
      }
      style={[ts(sliderTheme?.tooltip?.default), tooltipAnimatedStyle]}
    >
      <Box style={[ts(sliderTheme?.tooltip?.wrapper), getContainerStyle]}>
        {content as React.ReactNode}
      </Box>
      <AnimatedBox
        style={[
          StyleSheet.absoluteFill,
          ts(sliderTheme?.tooltip?.arrowWrapper),
          animatedArrowStyle,
        ]}
      >
        <TooltipArrow />
      </AnimatedBox>
    </AnimatedBox>
  );
};

RNSliderTooltip.displayName = "RNSliderTooltip";

export const SliderTooltip = createComponent<Partial<SliderTooltipProps>>(
  RNSliderTooltip,
  {
    shouldMemo: true,
  },
);
