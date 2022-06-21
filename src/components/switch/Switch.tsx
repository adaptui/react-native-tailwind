import React, { forwardRef } from "react";
import {
  Gesture,
  GestureDetector,
  TapGestureHandler,
} from "react-native-gesture-handler";
import {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useControllableState } from "@chakra-ui/hooks";

import { AnimatedBox, Box, BoxProps, Text } from "../../primitives";
import { useTheme } from "../../theme";
import { cx, styleAdapter } from "../../utils";
import { createComponent } from "../../utils/createComponent";

export interface SwitchProps extends BoxProps {
  /**
   * Default Value of the switch
   * @default false
   */
  defaultState?: boolean;
  /**
   * Value of the switch, true means 'on', false means 'off'.
   */
  state?: boolean;
  /**
   * Callback called with the new value when it changes.
   */
  onStateChange?: (value: boolean) => void;
  /**
   * Disable the switch
   * @default false
   */
  disabled?: boolean;
  /**
   * The color used to tint the appearance of the switch when it’s in the on position.
   * @default 'bg-gray-900'
   */
  onStateColor?: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the off position.
   * @default 'bg-gray-400'
   */
  offStateColor?: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the pressed on state.
   * @default 'bg-gray-700'
   */
  onStatePressedColor?: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the pressed off state.
   * @default 'bg-gray-600'
   */
  offStatePressedColor?: string;
  /**
   * The color used to tint the appearance of the thumb.
   * @default 'white'
   */
  thumbTintColor?: string;
  /**
   * The size of the switch component.
   * Recomended size for Mobile
   * @default xl
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * The theme of the switch component.
   * @default base
   */
  themeColor?: "base" | "primary";
  /**
   * The Label of the switch component.
   */
  label?: string;
  /**
   * The Description of the switch component.
   */
  description?: string;
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 20,
  stiffness: 120,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const RNSwitch: React.FC<SwitchProps> = forwardRef<
  typeof TapGestureHandler,
  Partial<SwitchProps>
>(
  (
    {
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
      label,
      description,
      style,
      ...otherProps
    },
    _ref,
  ) => {
    const tailwind = useTheme();
    const switchTheme = useTheme("switchTheme");

    const [switchState, setSwitchState] = useControllableState({
      defaultValue: defaultState,
      value: state,
      onChange: onStateChange,
    });

    /**
     * setting track on color and initial track color from props also having a default fallback
     */
    const onStateColor = disabled
      ? (tailwind.getColor(
          cx(switchTheme.themeColor[themeColor]?.activeWrapper?.disabled),
        ) as string)
      : onStateColorFromProps ||
        (tailwind.getColor(
          cx(switchTheme.themeColor[themeColor]?.activeWrapper?.default),
        ) as string);

    const offStateColor = disabled
      ? (tailwind.getColor(
          cx(switchTheme.themeColor[themeColor]?.inActiveWrapper?.disabled),
        ) as string)
      : offStateColorFromProps ||
        (tailwind.getColor(
          cx(switchTheme.themeColor[themeColor]?.inActiveWrapper?.default),
        ) as string);

    const offStatePressedColor =
      offStatePressedColorFromProps ||
      (tailwind.getColor(
        cx(switchTheme.themeColor[themeColor]?.inActiveWrapper?.active),
      ) as string);
    const onStatePressedColor =
      onStatePressedColorFromProps ||
      (tailwind.getColor(
        cx(switchTheme.themeColor[themeColor]?.activeWrapper?.active),
      ) as string);

    const thumbTintColor =
      thumbTintColorFromProps || tailwind.getColor(cx(switchTheme.thumbColor));

    /**
     * The Switch Animation Helpers
     */
    const interpolatedWidths = switchTheme.size[size]?.switchInterpolateWidths;

    const translatedThumbDistance = switchTheme.size[size]?.thumbTranslateValue;
    const initTranslatedThumbDistance =
      switchTheme.size[size]?.thumbInitTranslateValue;
    const intermediateThumbTranslateValue =
      switchTheme.size[size]?.thumbIntermediateTranslateValue;

    const thumbAnimated = useSharedValue(switchState ? 1 : 0);

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

    const activeContainerState = tailwind.getColor(
      cx(switchTheme.themeColor[themeColor]?.container?.active),
    ) as string;
    const defaultContainerState = tailwind.getColor(
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
      })
      .onTouchesCancelled(() => {
        if (switchState) {
          thumbAnimated.value = withSpring(1, SPRING_CONFIG);
        } else {
          thumbAnimated.value = withSpring(0, SPRING_CONFIG);
        }
      });

    return (
      <GestureDetector gesture={switchTapGesture}>
        <AnimatedBox
          style={[
            tailwind.style(
              cx(
                label
                  ? description
                    ? switchTheme.size[size]?.labelWithDescription.base
                    : switchTheme.size[size]?.label.base
                  : "",
              ),
            ),
            styleAdapter(style, { pressed: false }, false),
            label ? (description ? {} : animatedContainerBackground) : {},
          ]}
          {...otherProps}
        >
          <Box
            style={tailwind.style(
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
                style={tailwind.style(
                  cx(
                    switchTheme.size[size]?.label?.text,
                    disabled
                      ? description
                        ? switchTheme.themeColor[themeColor]?.label.default
                        : switchTheme.themeColor[themeColor]?.label.disabled
                      : "",
                  ),
                )}
              >
                {label}
              </Text>
            ) : (
              label
            )}
            {description && typeof description === "string" ? (
              <Text
                style={tailwind.style(
                  cx(
                    switchTheme.size[size]?.labelWithDescription
                      ?.descriptionText,
                  ),
                )}
              >
                {description}
              </Text>
            ) : (
              description
            )}
          </Box>
          <AnimatedBox
            style={[
              tailwind.style(cx(switchTheme.size[size]?.switchContainerStyle)),
              animatedSwitchBackground,
            ]}
          >
            <AnimatedBox
              style={[
                tailwind.style(cx(switchTheme.size[size]?.thumbStyle)),
                animatedThumbStyle,
              ]}
            />
          </AnimatedBox>
        </AnimatedBox>
      </GestureDetector>
    );
  },
);

RNSwitch.displayName = "RNSwitch";

export const Switch = createComponent<Partial<SwitchProps>>(RNSwitch, {
  shouldMemo: true,
});
