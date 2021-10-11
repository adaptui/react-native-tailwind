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
import { useTailwindThemeContext } from '../../theme/context';

export const progressBarHeight = {
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
};

export interface ProgressProps {
  /**
   * The size of the Progress Bar component.
   * Recomended size for Mobile
   * @default xl
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * The progress value
   * If null makes it indeterminate
   * @default null
   */
  value?: number | null;
  /**
   * Track color containing the progress
   */
  trackColor?: string;
  /**
   * Track color of the progress value
   */
  progressTrackColor?: string;
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 15,
  stiffness: 130,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

export const ProgressBar: React.FC<ProgressProps> = ({
  size = 'xl',
  value,
  trackColor: trackColorProp,
  progressTrackColor: progressTrackColorProp,
}) => {
  const tailwind = useTailwindThemeContext();
  const isIndeterminate = value === null || value === undefined;
  const width = Dimensions.get('window').width;
  const trackColor =
    trackColorProp || (tailwind.getColor('bg-gray-800') as string);
  const progressTrackColor =
    progressTrackColorProp || (tailwind.getColor('bg-gray-200') as string);

  // Mapping value to width %
  const progressValue = useDerivedValue(
    () => `${isIndeterminate ? 0 : value}%`
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
        tailwind.style(
          `w-full h-[${progressBarHeight[size]}px] rounded-full overflow-hidden`
        ),
        { backgroundColor: trackColor },
      ]}
    >
      <AnimatedBox
        style={[
          tailwind.style(
            `absolute h-[${progressBarHeight[size]}px] bg-gray-800 rounded-full`
          ),
          { backgroundColor: progressTrackColor },
          isIndeterminate ? translatingStyle : animatingWidth,
        ]}
      />
    </AnimatedBox>
  );
};
