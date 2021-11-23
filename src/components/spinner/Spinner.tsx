import React, { useEffect } from 'react';
import { ViewProps } from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { AnimatedBox, useTheme } from 'react-native-system';
import { useSpinnerProps } from './SpinnerProps';

type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerLibProps {
  size: SpinnerSizes;
  stroke: 'visible' | 'transparent';
}

export interface SpinnerProps extends SpinnerLibProps, ViewProps {}

export const Spinner: React.FC<Partial<SpinnerProps>> = (props) => {
  const { _spinnerProps } = useSpinnerProps(props);
  const ring = useSharedValue(0);
  useEffect(() => {
    ring.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, [ring]);
  const spinnerLoadingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${ring.value}deg`,
        },
      ],
    };
  });

  const tailwind = useTheme();
  const spinnerTheme = useTheme('spinner');
  return (
    <AnimatedBox
      style={[
        tailwind.style([
          spinnerTheme.base,
          spinnerTheme.stroke[_spinnerProps.stroke],
          spinnerTheme.size[_spinnerProps.size],
        ]),
        props.style,
        spinnerLoadingStyle,
      ]}
    />
  );
};
