import React, { forwardRef } from "react";
import { Dimensions, ViewStyle } from "react-native";
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { AnimatedBox, Box, BoxProps, Text } from "../../primitives";
import { getTextFontFamily, useTailwind, useTheme } from "../../theme";
import { createComponent, cx, styleAdapter } from "../../utils";

export type ProgressBarSizes = "sm" | "md" | "lg" | "xl";
export type ProgressBarTheme = "base" | "primary";

export interface ProgressProps extends BoxProps {
  /**
   * The size of the Progress Bar component.
   * @default lg
   */
  size: ProgressBarSizes;
  /**
   * The theme of the Progress Bar component.
   * @default base
   */
  themeColor: ProgressBarTheme;
  /**
   * The progress value
   * If null makes it indeterminate
   * @default null
   */
  value: number | null;
  /**
   * The progress track style
   */
  trackStyle: ViewStyle;
  /**
   * Label for the Meter
   */
  label: string | null;
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

export const RNProgressBar: React.FC<Partial<ProgressProps>> = forwardRef<
  typeof AnimatedBox,
  Partial<ProgressProps>
>((props, ref) => {
  const { ts } = useTailwind();
  const progressTheme = useTheme("progress");
  const {
    size = "lg",
    themeColor = "base",
    value,
    style,
    trackStyle = {},
    label,
    hint,
    ...otherProps
  } = props;

  const isIndeterminate = React.useMemo(
    () => value === null || value === undefined,
    [value],
  );
  const width = Dimensions.get("window").width;

  const progressValue = useDerivedValue(() =>
    !isIndeterminate ? `${value || 0}%` : "0%",
  );
  //@ts-ignore
  const animatingWidth = useAnimatedStyle(() => {
    return {
      width: withSpring(progressValue.value, SPRING_CONFIG),
    };
  });

  // Loop Translation progress when value is null
  const progressTranslate = useSharedValue(-1);
  React.useEffect(() => {
    progressTranslate.value = withRepeat(
      withTiming(1, {
        duration: 1500,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [progressTranslate]);

  const translatingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            progressTranslate.value,
            [-1, 0, 1],
            [-width, 0, width],
          ),
        },
      ],
      width: interpolate(progressTranslate.value, [-1, 0, 1], [70, 150, 70]),
    };
  });

  return (
    <Box
      ref={ref}
      style={[ts([progressTheme.wrapper]), styleAdapter(style)]}
      {...otherProps}
    >
      {(label || hint) && (
        <Box style={ts("flex-row")}>
          {label && (
            <Text
              style={ts(
                cx(
                  progressTheme.label.common,
                  progressTheme.size[size]?.label,
                  hint ? progressTheme.label.hasHint : "",
                ),
                getTextFontFamily(progressTheme.label.common),
              )}
            >
              {label}
            </Text>
          )}
          {label && hint && (
            <Text
              style={[
                ts(
                  cx(progressTheme.hint.common, progressTheme.size[size]?.hint),
                ),
                getTextFontFamily(progressTheme.hint.common),
              ]}
            >
              {hint}
            </Text>
          )}
        </Box>
      )}
      <AnimatedBox
        style={[
          ts(
            cx(
              progressTheme.size[size]?.container,
              progressTheme.themeColor[themeColor]?.track,
            ),
          ),
        ]}
      >
        {isIndeterminate && (
          <AnimatedBox
            style={[
              ts(
                cx(
                  progressTheme.size[size]?.bar,
                  progressTheme.themeColor[themeColor]?.filled,
                ),
              ),
              styleAdapter(trackStyle),
              translatingStyle,
            ]}
          />
        )}
        {!isIndeterminate && (
          <AnimatedBox
            style={[
              ts(
                cx(
                  progressTheme.size[size]?.bar,
                  progressTheme.themeColor[themeColor]?.filled,
                ),
              ),
              styleAdapter(trackStyle),
              animatingWidth,
            ]}
          />
        )}
      </AnimatedBox>
    </Box>
  );
});

RNProgressBar.displayName = "RNProgressBar";

export const ProgressBar = createComponent<Partial<ProgressProps>>(
  RNProgressBar,
  {
    shouldMemo: true,
  },
);
