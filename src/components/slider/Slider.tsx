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
  withTiming,
} from 'react-native-reanimated';
import { AnimatedBox, Box } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';

Animated.addWhitelistedNativeProps({ text: true });

export type SliderSizes = 'sm' | 'md' | 'lg' | 'xl';

export interface SliderProps {
  size: SliderSizes;
  defaultValue: number;
  onDragValue: (value: number) => void;
  onDragEndValue: (value: number) => void;
  minValue: number;
  maxValue: number;
  step: number;
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
    defaultValue = 0,
    minValue = 0,
    maxValue = 100,
    step = 1,
  } = props;
  const knobRef = useRef();

  const zerothPosition = sliderTheme.knob.knobRadius[size];
  const sliderWidth = useSharedValue(0);

  const currentPosition = useSharedValue(0);
  const dragginPosition = useSharedValue(0);

  const isKnobDragging = useSharedValue(false);

  const activeKnobColor = tailwind.getColor(sliderTheme.knob.active);
  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: dragginPosition.value }],
    borderColor: isKnobDragging.value ? activeKnobColor : 'transparent',
  }));

  const animatedFilledTrackStyle = useAnimatedStyle(() => ({
    width: dragginPosition.value + 9,
  }));

  const gesturePan = Gesture.Pan()
    .onBegin(() => (isKnobDragging.value = true))
    .shouldCancelWhenOutside(false)
    .minDistance(1)
    .maxPointers(1)
    .onStart(() => {
      dragginPosition.value = currentPosition.value;
    })
    .onUpdate((e) => {
      const newPosition = currentPosition.value + e.translationX;
      dragginPosition.value = Math.min(
        sliderWidth.value,
        Math.max(0, newPosition)
      );
    })
    .onEnd(() => {
      currentPosition.value = dragginPosition.value;
      const value = computedValue(
        currentPosition,
        sliderWidth,
        minValue,
        maxValue,
        step
      );
      if (onDragEndValue && isKnobDragging.value) {
        runOnJS(onDragEndValue)(value);
      }
    })
    .onFinalize(() => {
      isKnobDragging.value = false;
    });

  useAnimatedReaction(
    () => {
      const value = computedValue(
        dragginPosition,
        sliderWidth,
        minValue,
        maxValue,
        step
      );
      return value;
    },
    (newValue, oldValue) => {
      if (onDragValue && isKnobDragging.value && newValue !== oldValue) {
        runOnJS(onDragValue)(newValue);
      }
    }
  );

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      sliderWidth.value = event.nativeEvent.layout.width - 2 * zerothPosition;
      const transX = computedTranslateFromValue(
        defaultValue,
        event.nativeEvent.layout.width - 2 * zerothPosition,
        minValue,
        maxValue
      );
      dragginPosition.value = withTiming(transX);
      currentPosition.value = transX;
    },
    [
      sliderWidth,
      zerothPosition,
      defaultValue,
      minValue,
      maxValue,
      dragginPosition,
      currentPosition,
    ]
  );

  return (
    <AnimatedBox
      onLayout={onLayout}
      style={tailwind.style(sliderTheme.wrapper)}
      ref={ref}
    >
      <AnimatedBox
        style={[
          tailwind.style([
            sliderTheme.track.common,
            sliderTheme.track.size[size],
          ]),
          sliderTheme.track.position[size],
        ]}
      />
      <AnimatedBox
        style={[
          tailwind.style([
            sliderTheme.filledTrack.common,
            sliderTheme.filledTrack.size[size],
          ]),
          sliderTheme.filledTrack.position[size],
          animatedFilledTrackStyle,
        ]}
      />
      <GestureDetector gesture={gesturePan}>
        <AnimatedBox
          ref={knobRef}
          style={[
            tailwind.style([
              sliderTheme.knob.common,
              sliderTheme.knob.size[size],
            ]),
            animatedKnobStyle,
          ]}
        />
      </GestureDetector>
    </AnimatedBox>
  );
});

RNSlider.displayName = 'RNSlider';

export const Slider = createComponent<Partial<SliderProps>>(RNSlider, {
  shouldMemo: true,
});
