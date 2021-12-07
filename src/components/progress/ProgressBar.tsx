import React from 'react';
import { Dimensions } from 'react-native';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { AnimatedBox } from '../../primitives/AnimatedBox';
import { useTheme } from '../../theme/context';
import { useProgressBarProps } from './ProgressProps';

export type ProgressBarSizes = 'sm' | 'md' | 'lg' | 'xl';

export interface ProgressProps {
  /**
   * The size of the Progress Bar component.
   * @default lg
   */
  size: ProgressBarSizes;
  /**
   * The progress value
   * If null makes it indeterminate
   * @default null
   */
  value: number | null;
  /**
   * Track color containing the progress
   * @default 'bg-gray-200'
   */
  trackColor: string;
  /**
   * Track color of the progress value
   * @default 'bg-gray-800'
   */
  progressTrackColor: string;
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 15,
  stiffness: 130,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

export const ProgressBar: React.FC<Partial<ProgressProps>> = (props) => {
  const tailwind = useTheme();
  const progressStyles = useTheme('progress');
  const { trackColor, progressTrackColor, value, size } =
    useProgressBarProps(props);
  const isIndeterminate = React.useMemo(
    () => value === null || value === undefined,
    [value]
  );
  const width = Dimensions.get('window').width;

  const progressValue = useDerivedValue(() =>
    !isIndeterminate ? `${value || 0}%` : '0%'
  );
  const animatingWidth = useAnimatedStyle(() => {
    return {
      width: withSpring(progressValue.value, SPRING_CONFIG),
    };
  });

  // Loop Translation progress when value is null
  const progressTranslate = useSharedValue(-1);
  React.useEffect(() => {
    progressTranslate.value = withDelay(
      400,
      withRepeat(
        withTiming(1, {
          duration: 1200,
          easing: Easing.linear,
        }),
        -1,
        false
      )
    );
  }, [progressTranslate]);

  const translatingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            progressTranslate.value,
            [-1, 0, 1],
            [-width, 0, width]
          ),
        },
      ],
      width: interpolate(progressTranslate.value, [-1, 0, 1], [70, 150, 70]),
    };
  });

  return (
    <AnimatedBox
      style={[
        tailwind.style(progressStyles.container[size]),
        { backgroundColor: trackColor },
      ]}
    >
      {isIndeterminate && (
        <AnimatedBox
          style={[
            tailwind.style(progressStyles.bar[size]),
            { backgroundColor: progressTrackColor },
            translatingStyle,
          ]}
        />
      )}
      {!isIndeterminate && (
        <AnimatedBox
          style={[
            tailwind.style(progressStyles.bar[size]),
            { backgroundColor: progressTrackColor },
            animatingWidth,
          ]}
        />
      )}
    </AnimatedBox>
  );
};
