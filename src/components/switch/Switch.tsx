import { useControllableState } from '@chakra-ui/hooks';
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

const thumbShadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,

  elevation: 5,
};

export interface SwitchProps {
  /**
   * Default Value of the switch
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
   */
  disabled?: boolean;
  /**
   * The color used to tint the appearance of the switch when it’s in the on position.
   */
  onStateColor?: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the off position.
   */
  offStateColor?: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the pressed on state.
   */
  onStatePressedColor?: string;
  /**
   * The color used to tint the appearance of the switch when it’s in the pressed off state.
   */
  offStatePressedColor?: string;
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
  onStateChange,
  state,
  defaultState,
  size = 'xl',
  onStateColor: onStateColorProp,
  offStateColor: offStateColorProp,
  disabled = false,
  offStatePressedColor: offStatePressedColorProp,
  onStatePressedColor: onStatePressedColorProp,
}) => {
  const tailwind = useTailwindThemeContext();
  const [switchState, setSwitchState] = useControllableState({
    defaultValue: defaultState,
    value: state,
    onChange: onStateChange,
  });

  /**
   * setting track on color and initial track color from props also having a default fallback
   */
  const onStateColor = disabled
    ? (tailwind.getColor('bg-gray-500') as string)
    : onStateColorProp || (tailwind.getColor('bg-gray-800') as string);

  const offStateColor = disabled
    ? (tailwind.getColor('bg-gray-300') as string)
    : offStateColorProp || (tailwind.getColor('bg-gray-200') as string);

  const offStatePressedColor =
    offStatePressedColorProp || (tailwind.getColor('bg-gray-300') as string);
  const onStatePressedColor =
    onStatePressedColorProp || (tailwind.getColor('bg-gray-700') as string);

  /**
   * The Switch Animation Helpers
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
        [offStateColor, offStatePressedColor, onStatePressedColor, onStateColor]
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

  const memoizedOnSwitchPressCallback = React.useCallback(() => {
    setSwitchState(!switchState);
  }, [switchState, setSwitchState]);

  return (
    <TapGestureHandler
      enabled={!disabled}
      maxDurationMs={99999999}
      shouldCancelWhenOutside={false}
      onHandlerStateChange={(event) => {
        if (event.nativeEvent.state === State.BEGAN) {
          if (switchState) {
            thumbAnimated.value = withSpring(0.7, SPRING_CONFIG);
          } else {
            thumbAnimated.value = withSpring(0.3, SPRING_CONFIG);
          }
        } else if (event.nativeEvent.state === State.FAILED) {
          if (switchState) {
            thumbAnimated.value = withSpring(1, SPRING_CONFIG);
          } else {
            thumbAnimated.value = withSpring(0, SPRING_CONFIG);
          }
        } else if (event.nativeEvent.state === State.END) {
          if (switchState) {
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
          style={[
            tailwind.style(defaultThumbStyle[size]),
            animatedThumbStyle,
            thumbShadowStyle,
          ]}
        />
      </AnimatedBox>
    </TapGestureHandler>
  );
};
