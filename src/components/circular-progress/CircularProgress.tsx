import React, { forwardRef } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, G } from "react-native-svg";

import { Box, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx } from "../../utils";

Animated.addWhitelistedNativeProps({ text: true });

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedG = Animated.createAnimatedComponent(G);

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export type CircularProgressSizes = "sm" | "md" | "lg" | "xl";
export type CircularProgressTheme = "base" | "primary";

export interface CircularProgressProps extends BoxProps {
  /**
   * The size of the Circle
   */
  size: CircularProgressSizes;
  /**
   * The size of the Circle
   */
  themeColor: CircularProgressTheme;
  /**
   * Stroke Width of the Circle Border
   */
  strokeWidth: number;
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
   * Should show progress value
   * @default false
   */
  hint: boolean;
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
      strokeWidth = 2,
      progressTrackColor,
      trackColor,
      value,
      min = 0,
      max = 100,
      hint = false,
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

    // Circle parameters
    const radius = isIndeterminate
      ? circularProgressTheme.size[size]?.default
      : hint
      ? circularProgressTheme.size[size]?.withHintSize
      : circularProgressTheme.size[size]?.default;
    const halfCircle = radius + strokeWidth;
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
    const progress = useSharedValue(-1);

    const indeterminateAnimatedCircularProgress = useAnimatedProps(() => {
      return {
        strokeDashoffset: interpolate(
          progress.value,
          [-1, 1],
          [circleCircumference, -circleCircumference],
        ),
      };
    });

    React.useEffect(() => {
      progress.value = withRepeat(
        withTiming(1, {
          duration: 1750,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        }),
        -1,
        false,
      );
    }, [progress]);
    const animatedTextProps = useAnimatedProps(() => {
      return { text: `${progressValue.value}%` } as unknown as TextInputProps;
    });

    return (
      <Box ref={ref} {...otherProps}>
        <Svg
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
          <AnimatedG rotation={"-90"} origin={`${halfCircle}, ${halfCircle}`}>
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
              cx="50%"
              cy="50%"
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
                cx="50%"
                cy="50%"
                strokeLinecap="round"
                strokeDasharray={`${circleCircumference} ${circleCircumference}`}
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
                cx="50%"
                cy="50%"
                strokeDasharray={circleCircumference}
                strokeLinecap="round"
                animatedProps={animatedCircleProps}
              />
            )}
          </AnimatedG>
        </Svg>
        {!isIndeterminate && hint && (
          <AnimatedTextInput
            underlineColorAndroid="transparent"
            editable={false}
            defaultValue={`${progressValue.value}`}
            style={[
              StyleSheet.absoluteFillObject,
              tailwind.style(
                cx(
                  circularProgressTheme.text.base,
                  circularProgressTheme.size[size]?.text,
                ),
              ),
            ]}
            animatedProps={animatedTextProps}
          />
        )}
      </Box>
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
