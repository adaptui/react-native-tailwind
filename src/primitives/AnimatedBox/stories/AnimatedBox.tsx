// // stories/AnimatedBox.stories.tsx
// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { AnimatedBox } from '..';
// // import {
// //   useSharedValue,
// //   useAnimatedStyle,
// //   interpolate,
// //   withDelay,
// //   withRepeat,
// //   withTiming,
// // } from 'react-native-reanimated';
// import { useTheme } from '../../../theme';
// import { Box } from '../../Box';

// export default {
//   title: 'components/AnimatedBox',
//   component: AnimatedBox,
// } as ComponentMeta<typeof AnimatedBox>;

// export const Basic: ComponentStory<typeof AnimatedBox> = (args) => {
//   const boxRef = React.createRef<typeof Box>();
//   const tailwind = useTheme();

//   // Animation Code
//   // const ring = useSharedValue(0);

//   // const ringStyle = useAnimatedStyle(() => {
//   //   return {
//   //     opacity: 0.8 - ring.value,
//   //     transform: [
//   //       {
//   //         scale: interpolate(ring.value, [0, 1], [0, 4]),
//   //       },
//   //     ],
//   //   };
//   // });
//   // React.useEffect(() => {
//   //   ring.value = withDelay(
//   //     1000,
//   //     withRepeat(
//   //       withTiming(1, {
//   //         duration: 1500,
//   //       }),
//   //       -1,
//   //       false
//   //     )
//   //   );
//   // }, [ring]);
//   return (
//     <Box
//       ref={boxRef}
//       style={tailwind.style(
//         'items-center justify-center items-center flex-1 h-10 w-10 bg-red-500'
//       )}
//     >
//       <AnimatedBox
//         style={[
//           tailwind.style(
//             'absolute m-10 h-20 w-20 rounded-md border-2 bg-white border-red-600'
//           ),
//           // ringStyle,
//         ]}
//       />
//     </Box>
//   );
// };

// Basic.args = {
//   style: {},
// };

// stories/Box.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Animated from 'react-native-reanimated';

export default {
  title: 'components/AnimatedBox',
  component: Animated.View,
} as ComponentMeta<typeof Animated.View>;

export const Basic: ComponentStory<typeof Animated.View> = (args) => (
  <Animated.View {...args} />
);

Basic.args = {
  style: { flex: 1, backgroundColor: 'red', height: 50 },
};
