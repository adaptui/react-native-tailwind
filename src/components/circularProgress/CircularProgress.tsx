import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
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
import { Box, useTheme } from '../../index';
import { useCircularProgressProps } from './CircularProgressProps';

Animated.addWhitelistedNativeProps({ text: true });

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

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
   * The `value` of the progress indicator.
   *
   * If `null` the circular progress will be in `indeterminate` state
   * @default null
   */
  value?: number | null;
  /**
   * The minimum value of the progress
   * @default 0
   */
  min: number;
  /**
   * The maximum value of the
   * @default 100
   */
  max: number;
  /**
   * Should show progress value
   * @default false
   */
  hint: boolean;
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
      min,
      max,
      progressTrackColor,
      trackColor,
      strokeWidth,
      hint,
    },
  } = useCircularProgressProps(props);
  const tailwindStyle = useTheme().style;
  const circularProgressTheme = useTheme('circularProgress');

  // Indeterminate Check
  const isIndeterminate = React.useMemo(
    () => value === null || value === undefined,
    [value]
  );

  // Circle parameters
  const radius = isIndeterminate
    ? circularProgressTheme.defaultSize[size]
    : hint
    ? circularProgressTheme.withHintSize[size]
    : circularProgressTheme.defaultSize[size];
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  // Animation for value based progress
  const progressValue = useDerivedValue(() =>
    !isIndeterminate ? value || 0 : 0
  );
  const animatedCircleProps = useAnimatedProps(() => {
    /**
     * Converting a value to percentage based on lower and upper bound values from props
     *
     * value => the value in number
     * min => the minimum value
     * max => the maximum value
     */
    const maxPercentage = ((progressValue.value - min) * 100) / (max - min);
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
          duration: 1800,
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
  const animatedTextProps = useAnimatedProps(() => {
    return { text: `${progressValue.value}%` } as unknown as TextInputProps;
  });
  return (
    <Box>
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
      {!isIndeterminate && hint && (
        <AnimatedTextInput
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue={`${progressValue.value}%`}
          style={[
            StyleSheet.absoluteFillObject,
            tailwindStyle([
              circularProgressTheme.text.base,
              circularProgressTheme.text.size[size],
            ]),
          ]}
          animatedProps={animatedTextProps}
        />
      )}
    </Box>
  );
};
