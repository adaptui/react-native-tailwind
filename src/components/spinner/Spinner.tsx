import React, { forwardRef } from "react";
import { ColorValue } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Defs, G, LinearGradient, Stop } from "react-native-svg";

import { AnimatedBox, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, styleAdapter } from "../../utils";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type SpinnerSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerTheme =
  | "base"
  | "primary"
  | "secondary"
  | "success"
  | "danger";

export type SpinnerTrackVisibility = "visible" | "transparent";

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
  track: SpinnerTrackVisibility;
  /**
   * Spinner Theme
   * @default base
   */
  themeColor: SpinnerTheme;
  /**
   * Spinner Stroke
   * Accepts tailwind color string
   * like border-gray-300, border-green-400
   */
  stroke: string;
}

const RNSpinner: React.FC<Partial<SpinnerProps>> = forwardRef<
  typeof AnimatedBox,
  Partial<SpinnerProps>
>((props, ref) => {
  const tailwind = useTheme();
  const spinnerTheme = useTheme("spinner");

  const {
    size = "md",
    track = "transparent",
    themeColor = "base",
    stroke,
    style,
  } = props;

  // Circle parameters
  const radius = 44;

  const progress = useSharedValue(0);
  const rotate = useSharedValue(0);

  const spinnerStroke = stroke
    ? tailwind.getColor(stroke)
    : tailwind.getColor(spinnerTheme.themeColor[themeColor]);

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
      finished => {
        if (!finished) {
          progress.value = 0;
        }
      },
    );
    rotate.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }),
      -1,
      false,
      finished => {
        if (!finished) {
          rotate.value = 0;
        }
      },
    );
    return () => {
      cancelAnimation(progress);
      cancelAnimation(rotate);
    };
  }, [progress, rotate]);
  return (
    <AnimatedBox
      ref={ref}
      style={[
        tailwind.style(spinnerTheme.size[size]),
        styleAdapter(style),
        animatedSvgStyle,
      ]}
    >
      <Svg width="100%" height="100%" viewBox={"0 0 100 100"}>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor={spinnerStroke} />
            <Stop offset="100%" stopColor={spinnerStroke} stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <G rotation={"-90"} origin="50, 50">
          <Circle
            stroke={
              tailwind.getColor(
                track === "transparent"
                  ? spinnerTheme.track[track]
                  : spinnerTheme.track[track][themeColor],
              ) as ColorValue
            }
            strokeWidth={10}
            fill="transparent"
            r={radius}
            cx={50}
            cy={50}
          />
          <AnimatedCircle
            stroke="url(#gradient)"
            strokeWidth={10}
            r={radius}
            cx={50}
            cy={50}
            strokeLinecap="round"
            strokeDasharray="276 276"
            animatedProps={indeterminateAnimatedCircularProgress}
          />
        </G>
      </Svg>
    </AnimatedBox>
  );
});

RNSpinner.displayName = "RNSpinner";

export const Spinner = createComponent<Partial<SpinnerProps>>(RNSpinner, {
  shouldMemo: true,
});
