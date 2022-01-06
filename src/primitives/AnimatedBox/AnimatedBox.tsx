import Animated from 'react-native-reanimated';
import { Box } from '../Box';
import { createComponent } from '../..';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RNAnimatedBox = Animated.createAnimatedComponent(Box);

export const AnimatedBox = createComponent(RNAnimatedBox, { shouldMemo: true });
