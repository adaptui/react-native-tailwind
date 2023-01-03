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
import { useTailwind, useTheme } from "../../theme";
import { createComponent, cx, RenderPropType } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { SliderFilledTrack } from "./SliderFilledTrack";
import { SliderTooltip } from "./SliderTooltip";
import { SliderTrack } from "./SliderTrack";

export type SliderSizes = "sm" | "md" | "lg" | "xl";
export type SliderTheme = "base" | "primary";

export interface SliderProps {
  /**
   * The size of Slider and Knob
   * @default md
   */
  size: SliderSizes;
  /**
   * The size of Slider and Knob
   * @default base
   */
  themeColor: SliderTheme;
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
  const { ts, gc } = useTailwind();
  const sliderTheme = useTheme("slider");
  const {
    size = "md",
    themeColor = "base",
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

  const zerothPosition = sliderTheme.size[size]?.knob?.knobRadius;
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

  const animatedKnobOneStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: knobOneDraggingPostion.value }],
      borderWidth: isKnobOneDragging.value ? withSpring(2) : withSpring(0),
      zIndex: knobOneCurrentPosition.value === sliderWidth.value ? 9999 : 10,
    }),
    [
      knobOneCurrentPosition.value,
      knobTwoCurrentPosition.value,
      sliderWidth.value,
    ],
  );

  const animatedKnobTwoStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: knobTwoDraggingPostion.value }],
      borderWidth: isKnobTwoDragging.value ? withSpring(2) : withSpring(0),
      zIndex: knobTwoCurrentPosition.value === sliderWidth.value ? 10 : 9999,
    }),
    [
      knobTwoCurrentPosition.value,
      knobOneCurrentPosition.value,
      sliderWidth.value,
    ],
  );

  const animatedFilledTrackStyle = useAnimatedStyle(() => ({
    width: range
      ? knobTwoDraggingPostion.value - knobOneDraggingPostion.value
      : knobOneDraggingPostion.value,
    left: range ? knobOneDraggingPostion.value : 0,
  }));

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
      defaultValue,
      knobOneCurrentPosition,
      knobOneDraggingPostion,
      knobTwoCurrentPosition,
      knobTwoDraggingPostion,
      maxValue,
      minValue,
      range,
      sliderWidth,
      zerothPosition,
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
      style={ts(cx(sliderTheme.wrapper))}
      ref={ref}
    >
      <SliderTrack size={size} themeColor={themeColor} />
      <SliderFilledTrack
        size={size}
        themeColor={themeColor}
        animatedStyles={animatedFilledTrackStyle}
      />
      <AnimatedBox
        accessible={true}
        accessibilityRole="adjustable"
        accessibilityLabel={`Thumb to set ${range ? "min" : ""} value`}
        accessibilityActions={[
          { name: "increment", label: "incrementKnobOne" },
          { name: "decrement", label: "decrementKnobOne" },
        ]}
        onAccessibilityAction={(event: any) => {
          switch (event.nativeEvent.actionName) {
            case "increment":
              if (
                knobOneDraggingValue.value <
                (range ? knobTwoDraggingValue.value : maxValue)
              ) {
                knobOneDraggingValue.value += step;
              }
              break;
            case "decrement":
              if (knobOneDraggingValue.value > minValue) {
                knobOneDraggingValue.value -= step;
              }
              break;
          }
        }}
        onMagicTap={() => (isKnobOneDragging.value = true)}
        animatedProps={knobOneAnimatedProps}
        style={[
          ts(
            cx(
              sliderTheme.knob.common,
              sliderTheme.size[size].knob.size,
              sliderTheme.themeColor[themeColor]?.knob,
              disabled ? sliderTheme.knob.disabled : "",
            ),
          ),
          { bottom: -sliderTheme.size[size]?.knob?.position },
          animatedKnobOneStyle,
        ]}
      >
        <GestureDetector gesture={knobOnePanGestureHandler}>
          <AnimatedBox
            style={[StyleSheet.absoluteFill, ts(cx(sliderTheme.iconWrapper))]}
            ref={knobOneRef}
          >
            {/* @ts-ignore */}
            {knobIcon && knobIcon?.type === Icon
              ? createIcon({
                  icon: knobIcon,
                  iconStyle: ts(cx(sliderTheme.size[size]?.knobIcon?.default)),
                  iconFill: gc(
                    cx(
                      disabled
                        ? sliderTheme.knobIcon.disabled
                        : sliderTheme.knobIcon.activeFill,
                    ),
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
              style={[ts(cx(sliderTheme.tooltip.common))]}
              animatedProps={knobOneAnimatedTextProps}
            />
          }
          draggingValue={knobOneDraggingPostion}
          isDragging={isKnobOneDragging}
        />
      )}
      {range && (
        <AnimatedBox
          accessible={true}
          accessibilityRole="adjustable"
          accessibilityLabel={"Thumb to set max value"}
          accessibilityActions={[
            { name: "increment", label: "incrementKnobTwo" },
            { name: "decrement", label: "decrementKnobTwo" },
          ]}
          onAccessibilityAction={(event: any) => {
            switch (event.nativeEvent.actionName) {
              case "increment":
                if (knobTwoDraggingValue.value < maxValue) {
                  knobTwoDraggingValue.value += step;
                }
                break;
              case "decrement":
                if (knobTwoDraggingValue.value > knobOneDraggingValue.value) {
                  knobTwoDraggingValue.value -= step;
                }
                break;
            }
          }}
          animatedProps={knobTwoAnimatedProps}
          onMagicTap={() => (isKnobTwoDragging.value = true)}
          style={[
            ts(
              cx(
                sliderTheme.knob.common,
                sliderTheme.size[size]?.knob?.size,
                sliderTheme.themeColor[themeColor]?.knob,
                disabled ? sliderTheme.knob.disabled : "",
              ),
            ),
            { bottom: -sliderTheme.size[size]?.knob?.position },
            animatedKnobTwoStyle,
          ]}
        >
          <GestureDetector gesture={knobTwoPanGestureHandler}>
            <AnimatedBox
              style={[StyleSheet.absoluteFill, ts(cx(sliderTheme.iconWrapper))]}
              ref={knobTwoRef}
            >
              {/* @ts-ignore */}
              {knobIcon && knobIcon?.type === Icon
                ? createIcon({
                    icon: knobIcon,
                    iconStyle: ts(
                      cx(cx(sliderTheme.size[size]?.knobIcon?.default)),
                    ),
                    iconFill: gc(
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
              style={[ts(cx(sliderTheme.tooltip.common))]}
              animatedProps={knobTwoAnimatedTextProps}
            />
          }
          draggingValue={knobTwoDraggingPostion}
          isDragging={isKnobTwoDragging}
        />
      )}
    </AnimatedBox>
  );
});

RNSlider.displayName = "RNSlider";

export const Slider = createComponent<Partial<SliderProps>>(RNSlider, {
  shouldMemo: true,
});
