/**
 * Some of the code was taken from existing open source
 * Thanks to -> https://github.com/nghinv-software/react-native-slider
 */
import React, { forwardRef, useCallback, useRef } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { AnimatedBox, Box } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';
import { SliderFilledTrack } from './SliderFilledTrack';
import { SliderTrack } from './SliderTrack';

Animated.addWhitelistedNativeProps({ text: true });

export type SliderSizes = 'sm' | 'md' | 'lg' | 'xl';
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
}

function computedValue(
  translateX: Animated.SharedValue<number>,
  width: Animated.SharedValue<number>,
  min: number,
  max: number,
  step: number
) {
  'worklet';

  const value = interpolate(
    translateX.value,
    [0, width.value],
    [min, max],
    Extrapolate.CLAMP
  );
  return Math.round(value / step) * step;
}

function computedTranslateFromValue(
  value: number,
  width: number,
  min: number,
  max: number
) {
  'worklet';
  return interpolate(value, [min, max], [0, width], Extrapolate.CLAMP);
}

const RNSlider: React.FC<Partial<SliderProps>> = forwardRef<
  typeof Box,
  Partial<SliderProps>
>((props, ref) => {
  const tailwind = useTheme();
  const sliderTheme = useTheme('slider');
  const {
    size = 'md',
    onDragValue,
    onDragEndValue,
    defaultValue = [0, 0],
    minValue = 0,
    maxValue = 100,
    step = 1,
    range = false,
  } = props;

  // Default Values Check
  if (defaultValue[0] > defaultValue[1]) {
    throw Error('Default values should be in increasing order');
  }

  // onDragValue FPS Warning
  if (onDragValue) {
    console.warn(
      'onDragValue gets fired for every pixel moved causing frame drop, onDragEnd is recommended'
    );
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

  const isKnobOneDragging = useSharedValue(false);

  /**
   * Knob Two Animated Variables
   */
  const knobTwoCurrentPosition = useSharedValue(0);
  const knobTwoDraggingPostion = useSharedValue(0);

  const isKnobTwoDragging = useSharedValue(false);

  const animatedKnobOneStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: knobOneDraggingPostion.value }],
      borderWidth: isKnobOneDragging.value ? withSpring(2) : withSpring(0),
      zIndex: knobOneCurrentPosition.value === sliderWidth.value ? 9999 : 1,
    }),
    []
  );

  const animatedKnobTwoStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: knobTwoDraggingPostion.value }],
      borderWidth: isKnobTwoDragging.value ? withSpring(2) : withSpring(0),
      zIndex: knobTwoCurrentPosition.value === 0 ? 9999 : 1,
    }),
    []
  );

  const animatedFilledTrackStyle = useAnimatedStyle(() => ({
    width: range
      ? knobTwoDraggingPostion.value - knobOneDraggingPostion.value + 9
      : knobOneDraggingPostion.value + 9,
    left: range ? knobOneDraggingPostion.value + 9 : 0,
  }));

  const knobOnePanGestureHandler = Gesture.Pan()
    .onBegin(() => (isKnobOneDragging.value = true))
    .shouldCancelWhenOutside(false)
    .minDistance(1)
    .maxPointers(1)
    .onStart(() => {
      knobOneDraggingPostion.value = knobOneCurrentPosition.value;
    })
    .onUpdate((e) => {
      const newPosition = knobOneCurrentPosition.value + e.translationX;
      if (range) {
        knobOneDraggingPostion.value = Math.min(
          knobTwoCurrentPosition.value,
          Math.max(0, newPosition)
        );
      } else {
        knobOneDraggingPostion.value = Math.min(
          sliderWidth.value,
          Math.max(0, newPosition)
        );
      }
    })
    .onEnd(() => {
      knobOneCurrentPosition.value = knobOneDraggingPostion.value;
      const knobOneValue = computedValue(
        knobOneDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step
      );
      const knobTwoValue = computedValue(
        knobTwoDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step
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
    .minDistance(1)
    .maxPointers(1)
    .onStart(() => {
      knobTwoDraggingPostion.value = knobTwoCurrentPosition.value;
    })
    .onUpdate((e) => {
      const newPosition = knobTwoCurrentPosition.value + e.translationX;
      if (range) {
        knobTwoDraggingPostion.value = Math.min(
          sliderWidth.value,
          Math.max(knobOneCurrentPosition.value, newPosition)
        );
      } else {
        knobTwoDraggingPostion.value = Math.min(
          sliderWidth.value,
          Math.max(0, newPosition)
        );
      }
    })
    .onEnd(() => {
      knobTwoCurrentPosition.value = knobTwoDraggingPostion.value;
      const knobOneValue = computedValue(
        knobOneDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step
      );
      const knobTwoValue = computedValue(
        knobTwoDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step
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
        step
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
          step
        );
        runOnJS(onDragValue)([newValue, value]);
      }
    }
  );

  useAnimatedReaction(
    () => {
      const value = computedValue(
        knobTwoDraggingPostion,
        sliderWidth,
        minValue,
        maxValue,
        step
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
          step
        );
        runOnJS(onDragValue)([value, newValue]);
      }
    }
  );

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      sliderWidth.value = event.nativeEvent.layout.width - 2 * zerothPosition;
      const knobOneDefaultValue = defaultValue[0] || 0;
      const transX = computedTranslateFromValue(
        knobOneDefaultValue,
        event.nativeEvent.layout.width - 2 * zerothPosition,
        minValue,
        maxValue
      );
      knobOneDraggingPostion.value = withTiming(transX);
      knobOneCurrentPosition.value = transX;
      if (range) {
        const knobTwoDefaultValue = defaultValue[1] || 0;
        const transKnob2X = computedTranslateFromValue(
          knobTwoDefaultValue,
          event.nativeEvent.layout.width - 2 * zerothPosition,
          minValue,
          maxValue
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
    ]
  );

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
      <GestureDetector gesture={knobOnePanGestureHandler}>
        <AnimatedBox
          ref={knobOneRef}
          style={[
            tailwind.style([
              sliderTheme.knob.common,
              sliderTheme.knob.size[size],
            ]),
            animatedKnobOneStyle,
          ]}
        />
      </GestureDetector>
      {range && (
        <GestureDetector gesture={knobTwoPanGestureHandler}>
          <AnimatedBox
            ref={knobTwoRef}
            style={[
              tailwind.style([
                sliderTheme.knob.common,
                sliderTheme.knob.size[size],
              ]),
              animatedKnobTwoStyle,
            ]}
          />
        </GestureDetector>
      )}
    </AnimatedBox>
  );
});

RNSlider.displayName = 'RNSlider';

export const Slider = createComponent<Partial<SliderProps>>(RNSlider, {
  shouldMemo: true,
});
