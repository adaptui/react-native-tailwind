import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'react-native-system';
import { AnimatedBox, Box } from '../../../src/primitives';

const AnimatedRingComponent = () => {
  const boxRef = React.createRef<typeof Box>();
  const tailwind = useTheme();

  // Animation Code
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 4]),
        },
      ],
    };
  });
  React.useEffect(() => {
    ring.value = withDelay(
      1000,
      withRepeat(
        withTiming(1, {
          duration: 1500,
        }),
        -1,
        false
      )
    );
  }, []);
  return (
    <Box
      ref={boxRef}
      style={tailwind.style('items-center justify-center flex-1')}
    >
      <AnimatedBox
        style={[
          tailwind.style(
            'absolute m-10 h-20 w-20 rounded-md border-2 border-red-600'
          ),
          ringStyle,
        ]}
      />
    </Box>
  );
};

storiesOf('Animated Box', module).add('Square Loop Animation', () => (
  <AnimatedRingComponent />
));
