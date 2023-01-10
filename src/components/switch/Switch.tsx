import React, { forwardRef, useMemo } from "react";
import {
  Gesture,
  GestureDetector,
  TapGestureHandler,
} from "react-native-gesture-handler";
import {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useControllableState } from "@chakra-ui/hooks";

import { AnimatedBox, Box, BoxProps, Text } from "../../primitives";
import { getTextFontFamily, useTailwind, useTheme } from "../../theme";
import { cx, styleAdapter, useHaptic } from "../../utils";
import { createComponent } from "../../utils/createComponent";

export type SwitchSize = "sm" | "md" | "lg" | "xl";
export type SwitchTheme = "base" | "primary";
export interface SwitchProps extends BoxProps {
  /**
   * Default Value of the switch
   * @default false
   */
  defaultState: boolean;
  /**
   * Value of the switch, true means 'on', false means 'off'.
   */
  state: boolean;
  /**
   * Callback called with the new value when it changes.
   */
  onStateChange: (value: boolean) => void;
  /**
   * Disable the switch
   * @default false
   */
  disabled: boolean;
  /**
   * The color used to tint the appearance of the switch when it’s in the on position.
   * @default 'bg-gray-900'
   */
  onStateColor: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the off position.
   * @default 'bg-gray-400'
   */
  offStateColor: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the pressed on state.
   * @default 'bg-gray-700'
   */
  onStatePressedColor: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the pressed off state.
   * @default 'bg-gray-600'
   */
  offStatePressedColor: string;
  /**
   * The color used to tint the appearance of the thumb.
   * @default 'white'
   */
  thumbTintColor: string;
  /**
   * The size of the switch component.
   * Recomended size for Mobile
   * @default xl
   */
  size: SwitchSize;
  /**
   * The theme of the switch component.
   * @default base
   */
  themeColor: SwitchTheme;
  /**
   * The Label of the switch component.
   */
  label: string | null;
  /**
   * The Description of the switch component.
   */
  description: string | null;
  /**
   * When set to true, The Tap creates a Touch Feedback
   * Check more -> https://docs.expo.dev/versions/latest/sdk/haptics/
   * @default true
   */
  hapticEnabled: boolean;
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 20,
  stiffness: 120,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const RNSwitch: React.FC<Partial<SwitchProps>> = forwardRef<
  typeof TapGestureHandler,
  Partial<SwitchProps>
>((props, _ref) => {
  const { ts, gc } = useTailwind();
  const switchTheme = useTheme("switchTheme");

  const {
    onStateChange,
    state,
    defaultState = false,
    size = "xl",
    onStateColor: onStateColorFromProps,
    offStateColor: offStateColorFromProps,
    disabled = false,
    offStatePressedColor: offStatePressedColorFromProps,
    onStatePressedColor: onStatePressedColorFromProps,
    thumbTintColor: thumbTintColorFromProps,
    themeColor = "base",
    hapticEnabled = true,
    label,
    description,
    style,
    ...otherProps
  } = props;

  const [switchState, setSwitchState] = useControllableState({
    defaultValue: defaultState,
    value: state,
    onChange: onStateChange,
  });

  const thumbAnimated = useSharedValue(switchState ? 1 : 0);
  const hapticSelection = useHaptic();
  /**
   * Setting Active/Inactive and Default Colors
   */
  const onStateColor = disabled
    ? (gc(
        cx(switchTheme.themeColor[themeColor]?.activeWrapper?.disabled),
      ) as string)
    : onStateColorFromProps ||
      (gc(
        cx(switchTheme.themeColor[themeColor]?.activeWrapper?.default),
      ) as string);

  const offStateColor = disabled
    ? (gc(
        cx(switchTheme.themeColor[themeColor]?.inActiveWrapper?.disabled),
      ) as string)
    : offStateColorFromProps ||
      (gc(
        cx(switchTheme.themeColor[themeColor]?.inActiveWrapper?.default),
      ) as string);

  const offStatePressedColor =
    offStatePressedColorFromProps ||
    (gc(
      cx(switchTheme.themeColor[themeColor]?.inActiveWrapper?.active),
    ) as string);
  const onStatePressedColor =
    onStatePressedColorFromProps ||
    (gc(
      cx(switchTheme.themeColor[themeColor]?.activeWrapper?.active),
    ) as string);
  const thumbTintColor =
    thumbTintColorFromProps || gc(cx(switchTheme.thumbColor));
  /**
   * Setting Active/Inactive and Default Colors
   */

  /**
   * The Switch Animation Helpers
   */
  const interpolatedWidths = useMemo(() => {
    return switchTheme.size[size]?.switchInterpolateWidths;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const translatedThumbDistance = useMemo(() => {
    return switchTheme.size[size]?.thumbTranslateValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);
  const initTranslatedThumbDistance = useMemo(() => {
    return switchTheme.size[size]?.thumbInitTranslateValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);
  const intermediateThumbTranslateValue = useMemo(() => {
    return switchTheme.size[size]?.thumbIntermediateTranslateValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  useAnimatedReaction(
    () => switchState,
    () => {
      if (switchState) {
        thumbAnimated.value = withSpring(1, SPRING_CONFIG);
      } else {
        thumbAnimated.value = withSpring(0, SPRING_CONFIG);
      }
    },
  );

  const animatedSwitchBackground = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        thumbAnimated.value,
        [0, 0.3, 0.7, 1],
        [
          offStateColor,
          offStatePressedColor,
          onStatePressedColor,
          onStateColor,
        ],
      ),
    };
  });

  const activeContainerState = gc(
    cx(switchTheme.themeColor[themeColor]?.container?.active),
  ) as string;
  const defaultContainerState = gc(
    cx(switchTheme.themeColor[themeColor]?.container?.default),
  ) as string;

  const animatedContainerBackground = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        thumbAnimated.value,
        [0, 0.3, 0.7, 1],
        [
          defaultContainerState,
          activeContainerState,
          activeContainerState,
          defaultContainerState,
        ],
      ),
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: thumbTintColor,
      width: interpolate(
        thumbAnimated.value,
        [0, 0.3, 0.7, 1],
        interpolatedWidths,
      ),
      transform: [
        {
          translateX: interpolate(
            thumbAnimated.value,
            [0, 0.3, 0.7, 1],
            [
              initTranslatedThumbDistance,
              initTranslatedThumbDistance,
              translatedThumbDistance - intermediateThumbTranslateValue,
              translatedThumbDistance,
            ],
          ),
        },
      ],
    };
  });
  /**
   * The Switch Animation Helpers
   */

  /**
   * The Switch Tag Gesture
   */
  const switchTapGesture = Gesture.Tap()
    .enabled(!disabled)
    .maxDuration(99999999)
    .shouldCancelWhenOutside(true)
    .onBegin(() => {
      if (switchState) {
        thumbAnimated.value = withSpring(0.7, SPRING_CONFIG);
      } else {
        thumbAnimated.value = withSpring(0.3, SPRING_CONFIG);
      }
    })
    .onEnd(() => {
      if (switchState) {
        thumbAnimated.value = withSpring(0, SPRING_CONFIG);
      } else {
        thumbAnimated.value = withSpring(1, SPRING_CONFIG);
      }
      runOnJS(setSwitchState)(!switchState);
      hapticEnabled && runOnJS(hapticSelection)();
    })
    .onTouchesCancelled(() => {
      if (switchState) {
        thumbAnimated.value = withSpring(1, SPRING_CONFIG);
      } else {
        thumbAnimated.value = withSpring(0, SPRING_CONFIG);
      }
    });
  /**
   * The Switch Tag Gesture
   */

  return (
    <GestureDetector gesture={switchTapGesture}>
      <AnimatedBox
        style={[
          ts(
            cx(
              label
                ? description
                  ? switchTheme.size[size]?.labelWithDescription.base
                  : switchTheme.size[size]?.label.base
                : "",
            ),
          ),
          styleAdapter(style),
          label ? (description ? {} : animatedContainerBackground) : {},
        ]}
        {...otherProps}
      >
        <Box
          style={ts(
            cx(
              label
                ? description
                  ? switchTheme.size[size]?.labelWithDescription
                      .labelDescriptionWrapper
                  : switchTheme.size[size]?.label?.text
                : "",
            ),
          )}
        >
          {label && typeof label === "string" ? (
            <Text
              style={[
                ts(
                  cx(
                    switchTheme.size[size]?.label?.text,
                    disabled
                      ? description
                        ? switchTheme.themeColor[themeColor]?.label.default
                        : switchTheme.themeColor[themeColor]?.label.disabled
                      : "",
                  ),
                ),
                getTextFontFamily(switchTheme.size[size]?.label?.text),
              ]}
            >
              {label}
            </Text>
          ) : (
            label
          )}
          {description && typeof description === "string" ? (
            <Text
              style={[
                ts(
                  cx(
                    switchTheme.size[size]?.labelWithDescription
                      ?.descriptionText,
                  ),
                ),
                getTextFontFamily(
                  switchTheme.size[size]?.labelWithDescription?.descriptionText,
                ),
              ]}
            >
              {description}
            </Text>
          ) : (
            description
          )}
        </Box>
        <AnimatedBox
          style={[
            ts(cx(switchTheme.size[size]?.switchContainerStyle)),
            animatedSwitchBackground,
          ]}
        >
          <AnimatedBox
            style={[
              ts(cx(switchTheme.size[size]?.thumbStyle)),
              animatedThumbStyle,
            ]}
          />
        </AnimatedBox>
      </AnimatedBox>
    </GestureDetector>
  );
});

RNSwitch.displayName = "RNSwitch";

export const Switch = createComponent<Partial<SwitchProps>>(RNSwitch, {
  shouldMemo: true,
});
