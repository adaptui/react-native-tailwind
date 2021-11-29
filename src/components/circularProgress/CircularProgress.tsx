import React from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';
import { useTheme } from 'react-native-system';
import { useCircularProgressProps } from './CircularProgressProps';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type CircularProgressSizes = 'sm' | 'md' | 'lg' | 'xl';

export interface CircularProgressProps {
  /**
   * The size of the Circle
   */
  size: CircularProgressSizes;
  /**
   * Stroke Width of the Circle Border
   */
  strokeWidth: number;
  /**
   * Color of Progress value
   */
  progressTrackColor: string;
  /**
   * The Circle Base Track color
   */
  trackColor: string;
  /**
   * The progress value
   * If null makes it indeterminate
   * @default null
   */
  value?: number | null;
  /**
   * The max progress value
   * Helps in relative calculation of the progress with the value
   * @default 100
   */
  max: number;
}

const SPRING_CONFIG = {
  mass: 1,
  damping: 15,
  stiffness: 130,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

export const CircularProgress: React.FC<Partial<CircularProgressProps>> = (
  props
) => {
  const {
    _circularProgressProps: {
      value,
      size,
      max,
      progressTrackColor,
      trackColor,
      strokeWidth,
    },
  } = useCircularProgressProps(props);
  const circularProgressTheme = useTheme('circularProgress');

  // Indeterminate Check
  const isIndeterminate = React.useMemo(
    () => value === null || value === undefined,
    [value]
  );

  // Circle parameters
  const radius = circularProgressTheme.size[size];
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  // Animation for value based progress
  const progressValue = useDerivedValue(() =>
    !isIndeterminate ? value || 0 : 0
  );
  const animatedCircleProps = useAnimatedProps(() => {
    const maxPercentage = (100 * progressValue.value) / max;
    const strokeDashoffset =
      circleCircumference - (circleCircumference * maxPercentage) / 100;
    return {
      strokeDashoffset: withSpring(strokeDashoffset, SPRING_CONFIG),
    };
  });
  const multiplier = 10;

  // Loop Animation for Indeterminate progress
  const circularTranslate = useSharedValue(19);
  React.useEffect(() => {
    circularTranslate.value = withDelay(
      300,
      withRepeat(
        withTiming(0, {
          duration: 1500,
          easing: Easing.linear,
        }),
        -1,
        false
      )
    );
  }, [circularTranslate]);
  const indeterminateAnimatedCircleProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: circularTranslate.value * multiplier,
    };
  });

  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
    >
      <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle}`}>
        <Circle
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
        {isIndeterminate && (
          <AnimatedCircle
            stroke={progressTrackColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
            strokeDasharray={circleCircumference}
            strokeLinecap="round"
            animatedProps={indeterminateAnimatedCircleProps}
          />
        )}
        {!isIndeterminate && (
          <AnimatedCircle
            stroke={progressTrackColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
            strokeDasharray={circleCircumference}
            strokeLinecap="round"
            animatedProps={animatedCircleProps}
          />
        )}
      </G>
    </Svg>
  );
};
