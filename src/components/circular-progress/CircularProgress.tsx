import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, G } from "react-native-svg";

import { AnimatedBox, Box, BoxProps, Text } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, styleAdapter } from "../../utils";

Animated.addWhitelistedNativeProps({ text: true });

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type CircularProgressSizes = "sm" | "md" | "lg" | "xl";
export type CircularProgressTheme = "base" | "primary";

export interface CircularProgressProps extends BoxProps {
  /**
   * The size of the Circle
   * @default md
   */
  size: CircularProgressSizes;
  /**
   * The size of the Circle
   * @default base
   */
  themeColor: CircularProgressTheme;
  /**
   * Color of Progress value
   */
  progressTrackColor: string;
  /**
   * The Circle Base Track color
   */
  trackColor: string;
  /**
   * The `value` of the progress indicator.
   * If `null` the circular progress will be in `indeterminate` state
   * @default null
   */
  value?: number | null;
  /**
   * The minimum value of the progress
   * @default 0
   */
  min: number;
  /**
   * The maximum value of the
   * @default 100
   */
  max: number;
  /**
   * Hint for the Meter
   */
  hint: string;
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 15,
  stiffness: 130,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const RNCircularProgress: React.FC<Partial<CircularProgressProps>> = forwardRef<
  typeof Box,
  Partial<CircularProgressProps>
>(
  (
    {
      size = "md",
      themeColor = "base",
      progressTrackColor,
      trackColor,
      value,
      min = 0,
      max = 100,
      hint = false,
      style,
      ...otherProps
    },
    ref,
  ) => {
    const tailwind = useTheme();
    const circularProgressTheme = useTheme("circularProgress");

    // Indeterminate Check
    const isIndeterminate = React.useMemo(
      () => value === null || value === undefined,
      [value],
    );

    const strokeWidth = hint ? 5 : 10;

    // Circle parameters
    const radius = 44;
    const circleCircumference = 2 * Math.PI * radius;

    // Animation for value based progress
    const progressValue = useDerivedValue(() =>
      !isIndeterminate ? value || 0 : 0,
    );
    const animatedCircleProps = useAnimatedProps(() => {
      /**
       * Converting a value to percentage based on lower and upper bound values from props
       *
       * value => the value in number
       * min => the minimum value
       * max => the maximum value
       */
      const maxPercentage = ((progressValue.value - min) * 100) / (max - min);
      const strokeDashoffset =
        circleCircumference - (circleCircumference * maxPercentage) / 100;
      return {
        strokeDashoffset: withSpring(strokeDashoffset, SPRING_CONFIG),
      };
    });

    // Indeterminate Progress
    const progress = useSharedValue(0);
    const rotate = useSharedValue(0);
    const animatedSvgStyle = useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [0, 360]);
      return {
        transform: [
          {
            rotate: `${rotateValue}deg`,
          },
        ],
      };
    });
    const indeterminateAnimatedCircularProgress = useAnimatedProps(() => {
      return {
        strokeDashoffset: interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, -276, -(276 * 2)],
        ),
      };
    });

    React.useEffect(() => {
      progress.value = withRepeat(
        withTiming(1, {
          duration: 1500,
          easing: Easing.linear,
        }),
        -1,
        false,
      );
      rotate.value = withRepeat(
        withTiming(1, {
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        }),
        -1,
        false,
      );
    }, [progress, rotate]);

    const circularProgressBoxDimensions = {
      width: hint
        ? circularProgressTheme.size[size]?.withHintSize
        : circularProgressTheme.size[size]?.default,
      height: hint
        ? circularProgressTheme.size[size]?.withHintSize
        : circularProgressTheme.size[size]?.default,
    };

    return (
      <AnimatedBox
        ref={ref}
        style={[
          circularProgressBoxDimensions,
          styleAdapter(style),
          isIndeterminate && animatedSvgStyle,
        ]}
        {...otherProps}
      >
        <Svg width="100%" height="100%" viewBox={"0 0 100 100"}>
          <G rotation={"-90"} origin="50, 50">
            <Circle
              stroke={
                trackColor
                  ? trackColor
                  : tailwind.getColor(
                      cx(
                        circularProgressTheme.themeColor[themeColor]
                          ?.trackColor,
                      ),
                    )
              }
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={50}
              cy={50}
            />
            {isIndeterminate && (
              <AnimatedCircle
                stroke={
                  progressTrackColor
                    ? progressTrackColor
                    : tailwind.getColor(
                        cx(
                          circularProgressTheme.themeColor[themeColor]
                            ?.progressTrackColor,
                        ),
                      )
                }
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={50}
                cy={50}
                strokeLinecap="round"
                strokeDasharray="276 276"
                animatedProps={indeterminateAnimatedCircularProgress}
              />
            )}
            {!isIndeterminate && (
              <AnimatedCircle
                stroke={
                  progressTrackColor
                    ? progressTrackColor
                    : tailwind.getColor(
                        cx(
                          circularProgressTheme.themeColor[themeColor]
                            ?.progressTrackColor,
                        ),
                      )
                }
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={50}
                cy={50}
                strokeLinecap="round"
                strokeDasharray={circleCircumference}
                animatedProps={animatedCircleProps}
              />
            )}
          </G>
        </Svg>
        {!isIndeterminate && hint && (
          <Box
            style={[
              StyleSheet.absoluteFillObject,
              tailwind.style("justify-center items-center bg-transparent"),
            ]}
          >
            <Text
              style={[
                tailwind.style(
                  cx(
                    circularProgressTheme.text,
                    circularProgressTheme.size[size]?.text,
                  ),
                ),
              ]}
            >
              {hint}
            </Text>
          </Box>
        )}
      </AnimatedBox>
    );
  },
);

RNCircularProgress.displayName = "RNCircularProgress";

export const CircularProgress = createComponent<Partial<CircularProgressProps>>(
  RNCircularProgress,
  {
    shouldMemo: true,
  },
);
