/**
 * Some of the code was taken from existing open source
 * Thanks to -> https://github.com/nghinv-software/react-native-slider
 */
import React, { forwardRef, useCallback, useRef } from "react";
import {
  LayoutChangeEvent,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { AnimatedBox, Box } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, RenderPropType } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { SliderFilledTrack } from "./SliderFilledTrack";
import { SliderTooltip } from "./SliderTooltip";
import { SliderTrack } from "./SliderTrack";

export type SliderSizes = "sm" | "md" | "lg" | "xl";
export interface SliderProps {
  /**
   * The size of Slider and Knob
   * @default md
   */
  size: SliderSizes;
  /**
   * Default Value of Slider
   * @default 0
   */
  defaultValue: number[];
  /**
   * On Knob Dragging callback with value
   */
  onDragValue: (value: number[]) => void;
  /**
   * On Knob Drag End callback with value
   */
  onDragEndValue: (value: number[]) => void;
  /**
   * Minimum Value of Slider
   * @default 0
   */
  minValue: number;
  /**
   * Maximum Value of Slider
   * @default 100
   */
  maxValue: number;
  /**
   * Step Value of Slider
   * @default 1
   */
  step: number;
  /**
   * Set to true when you need a range slider
   * @default false
   */
  range: boolean;
  /**
   * An Icon to render inside Knob or a Component to replace the Knob
   */
  knobIcon: RenderPropType;
  /**
   * Is Slider Disabled
   */
  disabled: boolean;
  /**
   * Should show tooltip having Slider Value
   */
  showTooltip: boolean;
}

function computedValue(
  translateX: Animated.SharedValue<number>,
  width: Animated.SharedValue<number>,
  min: number,
  max: number,
  step: number,
) {
  "worklet";

  const value = interpolate(
    translateX.value,
    [0, width.value],
    [min, max],
    Extrapolate.CLAMP,
  );
  return Math.round(value / step) * step;
}

function computedTranslateFromValue(
  value: number,
  width: number,
  min: number,
  max: number,
) {
  "worklet";
  return interpolate(value, [min, max], [0, width], Extrapolate.CLAMP);
}

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const RNSlider: React.FC<Partial<SliderProps>> = forwardRef<
  typeof Box,
  Partial<SliderProps>
>((props, ref) => {
  const tailwind = useTheme();
  const sliderTheme = useTheme("slider");
  const {
    size = "md",
    onDragValue,
    onDragEndValue,
    defaultValue = [0, 0],
    minValue = 0,
    maxValue = 100,
    step = 1,
    range = false,
    knobIcon,
    disabled = false,
    showTooltip = false,
  } = props;

  // Default Values Check
  if (defaultValue[0] > defaultValue[1]) {
    throw Error("Default values should be in increasing order");
  }

  const knobOneRef = useRef();
  const knobTwoRef = useRef();

  const zerothPosition = sliderTheme.knob.knobRadius[size];
  const sliderWidth = useSharedValue(0);

  /**
   * Knob One Animated Variables
   */
  const knobOneCurrentPosition = useSharedValue(0);
  const knobOneDraggingPostion = useSharedValue(0);
  const knobOneDraggingValue = useSharedValue(defaultValue[0] || minValue);

  const isKnobOneDragging = useSharedValue(false);

  /**
   * Knob Two Animated Variables
   */
  const knobTwoCurrentPosition = useSharedValue(0);
  const knobTwoDraggingPostion = useSharedValue(0);
  const knobTwoDraggingValue = useSharedValue(defaultValue[0] || minValue);

  const isKnobTwoDragging = useSharedValue(false);

  const animatedKnobOneStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: knobOneDraggingPostion.value }],
      borderWidth: isKnobOneDragging.value ? withSpring(2) : withSpring(0),
    }),
    [knobOneCurrentPosition],
  );

  const animatedKnobTwoStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: knobTwoDraggingPostion.value }],
      borderWidth: isKnobTwoDragging.value ? withSpring(2) : withSpring(0),
    }),
    [knobTwoCurrentPosition],
  );

  const knobOneZIndexValue = useAnimatedStyle(() => {
    return {
      zIndex: knobOneCurrentPosition.value === sliderWidth.value ? 9999 : 10,
    };
  }, [knobOneCurrentPosition]);

  const knobTwoZIndexValue = useAnimatedStyle(() => {
    return {
      zIndex: knobTwoCurrentPosition.value === sliderWidth.value ? 10 : 9999,
    };
  }, [knobTwoCurrentPosition]);

  const animatedFilledTrackStyle = useAnimatedStyle(() => ({
    width: range
      ? knobTwoDraggingPostion.value - knobOneDraggingPostion.value
      : knobOneDraggingPostion.value,
    left: range ? knobOneDraggingPostion.value : 0,
  }));

  const knobOnePanGestureHandler = Gesture.Pan()
    .onBegin(() => (isKnobOneDragging.value = true))
    .shouldCancelWhenOutside(false)
    .enabled(disabled ? !disabled : true)
    .minDistance(1)
    .maxPointers(1)
    .onStart(() => {
      knobOneDraggingPostion.value = knobOneCurrentPosition.value;
    })
    .onUpdate(e => {
      "worklet";
      const newPosition = knobOneCurrentPosition.value + e.translationX;
      if (range) {
        knobOneDraggingPostion.value = Math.min(
          knobTwoCurrentPosition.value,
          Math.max(0, newPosition),
        );
      } else {
        knobOneDraggingPostion.value = Math.min(
          sliderWidth.value,
          Math.max(0, newPosition),
        );
      }
      if (step > zerothPosition) {
        const knobOneValue = computedValue(
          knobOneDraggingPostion,
          sliderWidth,
          minValue,
          maxValue,
          step,
        );
        knobOneDraggingPostion.value = computedTranslateFromValue(
          knobOneValue,
          sliderWidth.value,
          minValue,
          maxValue,
        );
      }
    })
    .onEnd(() => {
      "worklet";
      knobOneCurrentPosition.value = knobOneDraggingPostion.value;
      const knobOneValue = computedValue(
        knobOneDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step,
      );
      const knobTwoValue = computedValue(
        knobTwoDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step,
      );
      if (onDragEndValue && isKnobOneDragging.value) {
        runOnJS(onDragEndValue)([knobOneValue, knobTwoValue]);
      }
    })
    .onFinalize(() => {
      isKnobOneDragging.value = false;
    });

  const knobTwoPanGestureHandler = Gesture.Pan()
    .onBegin(() => (isKnobTwoDragging.value = true))
    .shouldCancelWhenOutside(false)
    .enabled(disabled ? !disabled : true)
    .minDistance(1)
    .maxPointers(1)
    .onStart(() => {
      knobTwoDraggingPostion.value = knobTwoCurrentPosition.value;
    })
    .onUpdate(e => {
      "worklet";
      const newPosition = knobTwoCurrentPosition.value + e.translationX;
      if (range) {
        knobTwoDraggingPostion.value = Math.min(
          sliderWidth.value,
          Math.max(knobOneCurrentPosition.value, newPosition),
        );
      } else {
        knobTwoDraggingPostion.value = Math.min(
          sliderWidth.value,
          Math.max(0, newPosition),
        );
      }
      if (step > zerothPosition) {
        const knobTwoValue = computedValue(
          knobTwoDraggingPostion,
          sliderWidth,
          minValue,
          maxValue,
          step,
        );
        knobTwoDraggingPostion.value = computedTranslateFromValue(
          knobTwoValue,
          sliderWidth.value,
          minValue,
          maxValue,
        );
      }
    })
    .onEnd(() => {
      "worklet";
      knobTwoCurrentPosition.value = knobTwoDraggingPostion.value;
      const knobOneValue = computedValue(
        knobOneDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step,
      );
      const knobTwoValue = computedValue(
        knobTwoDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step,
      );
      if (onDragEndValue && isKnobTwoDragging.value) {
        runOnJS(onDragEndValue)([knobOneValue, knobTwoValue]);
      }
    })
    .onFinalize(() => {
      isKnobTwoDragging.value = false;
    });

  useAnimatedReaction(
    () => {
      const value = computedValue(
        knobOneDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step,
      );
      return value;
    },
    (newValue, oldValue) => {
      if (onDragValue && isKnobOneDragging.value && newValue !== oldValue) {
        const value = computedValue(
          knobTwoCurrentPosition,
          sliderWidth,
          minValue,
          maxValue,
          step,
        );
        runOnJS(onDragValue)([newValue, value]);
      }
    },
  );

  useAnimatedReaction(
    () => {
      const value = computedValue(
        knobTwoDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step,
      );
      return value;
    },
    (newValue, oldValue) => {
      if (onDragValue && isKnobTwoDragging.value && newValue !== oldValue) {
        const value = computedValue(
          knobOneCurrentPosition,
          sliderWidth,
          minValue,
          maxValue,
          step,
        );
        runOnJS(onDragValue)([value, newValue]);
      }
    },
  );

  const knobOneAnimatedTextProps = useAnimatedProps(() => {
    const computedDraggingValue = computedValue(
      knobOneDraggingPostion,
      sliderWidth,
      minValue,
      maxValue,
      step,
    );
    return {
      text: `${computedDraggingValue}`,
    } as unknown as TextInputProps;
  });

  const knobTwoAnimatedTextProps = useAnimatedProps(() => {
    const computedDraggingValue = computedValue(
      knobTwoDraggingPostion,
      sliderWidth,
      minValue,
      maxValue,
      step,
    );
    return {
      text: `${computedDraggingValue}`,
    } as unknown as TextInputProps;
  });

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      sliderWidth.value = event.nativeEvent.layout.width - 2 * zerothPosition;
      const knobOneDefaultValue = defaultValue[0] || 0;
      const transX = computedTranslateFromValue(
        knobOneDefaultValue,
        event.nativeEvent.layout.width - 2 * zerothPosition,
        minValue,
        maxValue,
      );
      knobOneDraggingPostion.value = withTiming(transX);
      knobOneCurrentPosition.value = transX;
      if (range) {
        const knobTwoDefaultValue = defaultValue[1] || 0;
        const transKnob2X = computedTranslateFromValue(
          knobTwoDefaultValue,
          event.nativeEvent.layout.width - 2 * zerothPosition,
          minValue,
          maxValue,
        );
        knobTwoDraggingPostion.value = withTiming(transKnob2X);
        knobTwoCurrentPosition.value = transKnob2X;
      }
    },
    [
      sliderWidth,
      zerothPosition,
      defaultValue,
      minValue,
      maxValue,
      knobOneDraggingPostion,
      knobOneCurrentPosition,
      range,
      knobTwoDraggingPostion,
      knobTwoCurrentPosition,
    ],
  );

  // Updating Knob One Position using Value
  useAnimatedReaction(
    () => {
      const translateValue = computedTranslateFromValue(
        knobOneDraggingValue.value,
        sliderWidth.value,
        minValue,
        maxValue,
      );
      return translateValue;
    },
    newValue => {
      knobOneDraggingPostion.value = withSpring(newValue);
      knobOneCurrentPosition.value = knobOneDraggingPostion.value;
    },
  );

  // Feeding on change value to the Talkback/Voiceover
  const knobOneAnimatedProps = useAnimatedProps(() => {
    return {
      accessibilityValue: {
        text: `The slider value is ${knobOneDraggingValue.value}`,
      },
    };
  });

  // Updating Knob Two Position using Value
  useAnimatedReaction(
    () => {
      const translateValue = computedTranslateFromValue(
        knobTwoDraggingValue.value,
        sliderWidth.value,
        minValue,
        maxValue,
      );
      return translateValue;
    },
    newValue => {
      knobTwoDraggingPostion.value = withSpring(newValue);
      knobTwoCurrentPosition.value = knobTwoDraggingPostion.value;
    },
  );

  // Feeding on change value to the Talkback/Voiceover
  const knobTwoAnimatedProps = useAnimatedProps(() => {
    return {
      accessibilityValue: {
        text: `The slider value is ${knobTwoDraggingValue.value}`,
      },
    };
  });

  return (
    <AnimatedBox
      onLayout={onLayout}
      style={tailwind.style(sliderTheme.wrapper)}
      ref={ref}
    >
      <SliderTrack size={size} />
      <SliderFilledTrack
        size={size}
        animatedStyles={animatedFilledTrackStyle}
      />
      <Box focusable style={tailwind.style("relative")}>
        <AnimatedBox
          accessible={true}
          accessibilityRole="adjustable"
          accessibilityLabel={`Thumb to set ${range ? "min" : ""} value`}
          accessibilityActions={[
            { name: "increment", label: "incrementKnobOne" },
            { name: "decrement", label: "decrementKnobOne" },
          ]}
          onAccessibilityAction={event => {
            switch (event.nativeEvent.actionName) {
              case "increment":
                // Alert.alert('Increment');
                if (
                  knobOneDraggingValue.value <
                  (range ? knobTwoDraggingValue.value : maxValue)
                ) {
                  knobOneDraggingValue.value += step;
                }
                break;
              case "decrement":
                // Alert.alert('Decrement');
                if (knobOneDraggingValue.value > minValue) {
                  knobOneDraggingValue.value -= step;
                }
                break;
            }
          }}
          onMagicTap={() => (isKnobOneDragging.value = true)}
          animatedProps={knobOneAnimatedProps}
          style={[
            tailwind.style(
              sliderTheme.knob.common,
              sliderTheme.knob.size[size],
              disabled ? sliderTheme.knob.disabled : "",
            ),
            knobOneZIndexValue,

            { bottom: -sliderTheme.knob.position[size] },
            animatedKnobOneStyle,
          ]}
        >
          <GestureDetector gesture={knobOnePanGestureHandler}>
            <AnimatedBox
              style={[
                StyleSheet.absoluteFill,
                tailwind.style("justify-center items-center"),
              ]}
              ref={knobOneRef}
            >
              {/* @ts-ignore */}
              {knobIcon && knobIcon?.type === Icon
                ? createIcon({
                    icon: knobIcon,
                    iconStyle: tailwind.style(sliderTheme.knobIcon.size[size]),
                    iconFill: tailwind.getColor(
                      disabled
                        ? sliderTheme.knobIcon.disabled
                        : sliderTheme.knobIcon.activeFill,
                    ),
                  })
                : knobIcon}
            </AnimatedBox>
          </GestureDetector>
        </AnimatedBox>
        {showTooltip && (
          <SliderTooltip
            size={size}
            triggerRef={knobOneRef}
            knobRadius={zerothPosition}
            content={
              <AnimatedTextInput
                underlineColorAndroid="transparent"
                editable={false}
                style={[tailwind.style(sliderTheme.tooltip.common)]}
                animatedProps={knobOneAnimatedTextProps}
              />
            }
            draggingValue={knobOneDraggingPostion}
            isDragging={isKnobOneDragging}
          />
        )}
      </Box>
      <Box focusable style={tailwind.style("relative")}>
        {range && (
          <AnimatedBox
            accessible={true}
            accessibilityRole="adjustable"
            accessibilityLabel={"Thumb to set max value"}
            accessibilityActions={[
              { name: "increment", label: "incrementKnobTwo" },
              { name: "decrement", label: "decrementKnobTwo" },
            ]}
            onAccessibilityAction={event => {
              switch (event.nativeEvent.actionName) {
                case "increment":
                  // Alert.alert('Increment');
                  if (knobTwoDraggingValue.value < maxValue) {
                    knobTwoDraggingValue.value += step;
                  }
                  break;
                case "decrement":
                  // Alert.alert('Decrement');
                  if (knobTwoDraggingValue.value > knobOneDraggingValue.value) {
                    knobTwoDraggingValue.value -= step;
                  }
                  break;
              }
            }}
            animatedProps={knobTwoAnimatedProps}
            onMagicTap={() => (isKnobTwoDragging.value = true)}
            style={[
              tailwind.style(
                sliderTheme.knob.common,
                sliderTheme.knob.size[size],
                disabled ? sliderTheme.knob.disabled : "",
              ),
              knobTwoZIndexValue,
              { bottom: -sliderTheme.knob.position[size] },
              animatedKnobTwoStyle,
            ]}
          >
            <GestureDetector gesture={knobTwoPanGestureHandler}>
              <AnimatedBox
                style={[
                  StyleSheet.absoluteFill,
                  tailwind.style("justify-center items-center"),
                ]}
                ref={knobTwoRef}
              >
                {/* @ts-ignore */}
                {knobIcon && knobIcon?.type === Icon
                  ? createIcon({
                      icon: knobIcon,
                      iconStyle: tailwind.style(
                        sliderTheme.knobIcon.size[size],
                      ),
                      iconFill: tailwind.getColor(
                        disabled
                          ? sliderTheme.knobIcon.disabled
                          : sliderTheme.knobIcon.activeFill,
                      ),
                    })
                  : knobIcon}
              </AnimatedBox>
            </GestureDetector>
          </AnimatedBox>
        )}
        {showTooltip && (
          <SliderTooltip
            size={size}
            triggerRef={knobTwoRef}
            knobRadius={zerothPosition}
            content={
              <AnimatedTextInput
                underlineColorAndroid="transparent"
                editable={false}
                style={[tailwind.style(sliderTheme.tooltip.common)]}
                animatedProps={knobTwoAnimatedTextProps}
              />
            }
            draggingValue={knobTwoDraggingPostion}
            isDragging={isKnobTwoDragging}
          />
        )}
      </Box>
    </AnimatedBox>
  );
});

RNSlider.displayName = "RNSlider";

export const Slider = createComponent<Partial<SliderProps>>(RNSlider, {
  shouldMemo: true,
});
