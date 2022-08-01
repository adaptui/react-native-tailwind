import { useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import {
  AnimatedBox,
  AnimatedBoxOptions,
  useAnimatedBox,
} from "../../primitives/animated-box";
import { useTheme } from "../../theme";
import { cx, styleAdapter } from "../../utils";
import { GetThemeValue } from "../../utils/global-types";
import {
  As,
  createComponentType,
  createElement,
  createHook,
  Props,
} from "../../utils/system";

export const useSpinner = createHook<SpinnerOptions>(
  ({
    size = "md",
    themeColor = "base",
    track = "transparent",
    label = "Loading...",
    ...props
  }) => {
    const tailwind = useTheme();
    const spinnerTheme = useTheme("spinner");

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

    const style = [
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
      { borderWidth: spinnerTheme.borderWidth },
      styleAdapter(props.style),
      spinnerLoadingStyle,
    ];

    props = {
      ...props,
      accessibilityLabel: label,
      style,
      // Web Prop
      "data-testid": "testid-spinner",
    };
    props = useAnimatedBox(props);

    return props;
  },
);

export const SpinnerNew = createComponentType<SpinnerOptions>(props => {
  const htmlProps = useSpinner(props);

  return createElement(AnimatedBox, htmlProps);
}, "Spinner");

export type SpinnerOptions<T extends As = typeof AnimatedBox> = Omit<
  AnimatedBoxOptions<T>,
  "size"
> & {
  /**
   * How large should the spinner be?
   *
   * @default md
   */
  size?: keyof GetThemeValue<"spinner", "size">;

  /**
   * How the spinner should be themed?
   *
   * @default base
   */
  themeColor?: keyof GetThemeValue<"spinner", "themeColor">;

  /**
   * How the spinner should be displayed?
   *
   * @default transparent
   */
  track?: keyof GetThemeValue<"spinner", "track">;

  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   *
   * @default Loading...
   */
  label?: string;
};

export type SpinnerNewProps<T extends As = typeof AnimatedBox> = Props<
  SpinnerOptions<T>
>;
