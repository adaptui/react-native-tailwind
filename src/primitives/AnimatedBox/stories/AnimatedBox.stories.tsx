// stories/AnimatedBox.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AnimatedBox } from '../AnimatedBox';
import {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '../../../theme';
import { Box } from '../../Box';

export default {
  title: 'primitives/AnimatedBox',
  component: AnimatedBox,
} as ComponentMeta<typeof AnimatedBox>;

export const Default: ComponentStory<typeof AnimatedBox> = () => {
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
  }, [ring]);
  return (
    <Box
      ref={boxRef}
      style={tailwind.style('flex-1 h-full justify-center items-center')}
    >
      <AnimatedBox
        style={[
          tailwind.style(
            'm-10 h-20 w-20 rounded-md border-2 bg-white border-red-600'
          ),
          ringStyle,
        ]}
      />
    </Box>
  );
};

Default.args = {};
