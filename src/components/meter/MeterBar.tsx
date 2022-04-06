import React, { forwardRef } from 'react';
import {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { AnimatedBox, Box } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';

export interface MeterBarProps {
  /**
   * Width of the Meter Bar
   */
  percent: number;
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 15,
  stiffness: 130,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const RNMeterBar: React.FC<Partial<MeterBarProps>> = forwardRef<
  typeof Box,
  Partial<MeterBarProps>
>((props, ref) => {
  const { percent } = props;
  const percentValue = useDerivedValue(() => (percent ? percent : 0));
  const tailwind = useTheme();
  const meterTheme = useTheme('meter');
  const animatedMeterStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(`${percentValue.value}%`, SPRING_CONFIG),
    };
  });
  return (
    <AnimatedBox
      ref={ref}
      style={[tailwind.style([meterTheme.bar.common]), animatedMeterStyle]}
    />
  );
});

RNMeterBar.displayName = 'RNMeterBar';

export const MeterBar = createComponent<Partial<MeterBarProps>>(RNMeterBar, {
  shouldMemo: true,
});
