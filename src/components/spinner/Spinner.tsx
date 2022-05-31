import React, { forwardRef, useEffect } from 'react';
import { ViewProps } from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { AnimatedBox } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';
import { useSpinnerProps } from './SpinnerProps';

export type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerLibProps {
  size: SpinnerSizes;
  track: 'visible' | 'transparent';
}

export interface SpinnerProps extends SpinnerLibProps, ViewProps {}

const RNSpinner: React.FC<Partial<SpinnerProps>> = forwardRef<
  typeof AnimatedBox,
  Partial<SpinnerProps>
>((props, ref) => {
  const { _spinnerLibProps } = useSpinnerProps(props);
  const spinnerLoopAnimation = useSharedValue(0);
  useEffect(() => {
    spinnerLoopAnimation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false
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

  const tailwind = useTheme();
  const spinnerTheme = useTheme('spinner');
  return (
    <AnimatedBox
      ref={ref}
      style={[
        tailwind.style([
          spinnerTheme.base,
          spinnerTheme.track[_spinnerLibProps.track],
          spinnerTheme.size[_spinnerLibProps.size],
        ]),
        props.style, // Accepts View Style to overide the Default Spinner Style
        spinnerLoadingStyle,
      ]}
    />
  );
});

RNSpinner.displayName = 'RNSpinner';

export const Spinner = createComponent<Partial<SpinnerProps>>(RNSpinner, {
  shouldMemo: true,
});
