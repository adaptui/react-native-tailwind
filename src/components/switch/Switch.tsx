import React from 'react';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useTailwindThemeContext } from '../../';
import { AnimatedBox } from '../../primitives';
import {
  defaultSwitchContainerStyle,
  defaultThumbStyle,
  switchInterpolateWidths,
  thumbInitTranslateValue,
  thumbIntermediateTranslateValue,
  thumbTranslateValue,
} from './switchStyles';

export interface SwitchProps {
  /**
   * Value of the switch, true means 'on', false means 'off'.
   */
  isOn: boolean;
  /**
   * Disable the switch
   */
  disabled?: boolean;
  /**
   * Callback called with the new value when it changes.
   */
  onValueChange: (value: boolean) => void;
  /**
   * The color used to tint the appearance of the switch when it’s in the on position.
   */
  onTrackColor?: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the off position.
   */
  initTrackColor?: string;
  /**
   * The color used to tint the appearance of the thumb.
   */
  thummbTintColor?: string;
  /**
   * The size of the switch component.
   * Recomended size for Mobile
   * @default xl
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 20,
  stiffness: 120,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

export const Switch: React.FC<SwitchProps> = ({
  onValueChange,
  isOn,
  size = 'xl',
  onTrackColor,
  initTrackColor,
}) => {
  const tailwind = useTailwindThemeContext();

  /**
   * setting track on color and initial track color from props also having a default fallback
   */
  const trackOnColor = onTrackColor || tailwind.getColor('bg-gray-800') || '';
  const trackInitColor =
    initTrackColor || tailwind.getColor('bg-gray-200') || '';

  /**
   * The interpolated widths based on size of switch
   */
  const interpolatedWidths = switchInterpolateWidths[size];

  const translatedThumbDistance = thumbTranslateValue[size];
  const initTranslatedThumbDistance = thumbInitTranslateValue[size];
  const intermediateThumbTranslateValue = thumbIntermediateTranslateValue[size];
  const thumbAnimated = useSharedValue(0);

  const animatedSwitchBackground = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        thumbAnimated.value,
        [0, 0.3, 0.7, 1],
        [trackInitColor, trackInitColor, trackOnColor, trackOnColor]
      ),
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        thumbAnimated.value,
        [0, 0.3, 0.7, 1],
        interpolatedWidths
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
            ]
          ),
        },
      ],
    };
  });

  const memoizedOnSwitchPressCallback = React.useCallback(
    () => onValueChange(!isOn),
    [isOn, onValueChange]
  );

  return (
    <TapGestureHandler
      maxDist={10}
      onHandlerStateChange={(event) => {
        if (event.nativeEvent.state === State.BEGAN) {
          if (isOn) {
            thumbAnimated.value = withSpring(0.7, SPRING_CONFIG);
          } else {
            thumbAnimated.value = withSpring(0.3, SPRING_CONFIG);
          }
        } else if (event.nativeEvent.state === State.FAILED) {
          if (isOn) {
            thumbAnimated.value = withSpring(1, SPRING_CONFIG);
          } else {
            thumbAnimated.value = withSpring(0, SPRING_CONFIG);
          }
        } else if (event.nativeEvent.state === State.END) {
          if (isOn) {
            thumbAnimated.value = withSpring(0, SPRING_CONFIG);
          } else {
            thumbAnimated.value = withSpring(1, SPRING_CONFIG);
          }
          setTimeout(memoizedOnSwitchPressCallback, 50);
        }
      }}
    >
      <AnimatedBox
        style={[
          tailwind.style(defaultSwitchContainerStyle[size]),
          animatedSwitchBackground,
        ]}
      >
        <AnimatedBox
          style={[tailwind.style(defaultThumbStyle[size]), animatedThumbStyle]}
        />
      </AnimatedBox>
    </TapGestureHandler>
  );
};
