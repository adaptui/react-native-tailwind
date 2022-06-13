import React, { forwardRef, useEffect } from "react";
import { ViewProps } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { AnimatedBox } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, styleAdapter } from "../../utils";

export type SpinnerSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerTheme =
  | "base"
  | "primary"
  | "secondary"
  | "success"
  | "danger";

export interface SpinnerLibProps {
  /**
   * How large should the spinner be?
   * @default md
   */
  size: SpinnerSizes;
  /**
   * How the spinner should be displayed?
   * @default transparent
   */
  track: "visible" | "transparent";
  /**
   * Spinner Theme
   * @default base
   */
  themeColor: SpinnerTheme;
}

export interface SpinnerProps extends SpinnerLibProps, ViewProps {}

const RNSpinner: React.FC<Partial<SpinnerProps>> = forwardRef<
  typeof AnimatedBox,
  Partial<SpinnerProps>
>(({ size = "md", track = "transparent", themeColor = "base", style }, ref) => {
  const spinnerLoopAnimation = useSharedValue(0);
  useEffect(() => {
    spinnerLoopAnimation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [spinnerLoopAnimation]);
  const spinnerLoadingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${spinnerLoopAnimation.value}deg`,
        },
      ],
    };
  });

  const tailwind = useTheme();
  const spinnerTheme = useTheme("spinner");
  return (
    <AnimatedBox
      ref={ref}
      style={[
        tailwind.style(
          cx(
            spinnerTheme.base,
            spinnerTheme.themeColor[themeColor],
            track === "visible"
              ? spinnerTheme.track[track]?.[themeColor]
              : spinnerTheme.track.transparent,
            spinnerTheme.size[size],
          ),
        ),
        styleAdapter(style, { pressed: false }, false), // Accepts View Style to overide the Default Spinner Style
        spinnerLoadingStyle,
      ]}
    />
  );
});

RNSpinner.displayName = "RNSpinner";

export const Spinner = createComponent<Partial<SpinnerProps>>(RNSpinner, {
  shouldMemo: true,
});
