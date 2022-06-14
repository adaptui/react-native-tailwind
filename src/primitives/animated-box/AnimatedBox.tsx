import Animated from "react-native-reanimated";

import { createComponent } from "../../utils";
import { Box } from "../box";

// @ts-ignore
const RNAnimatedBox = Animated.createAnimatedComponent(Box);

export const AnimatedBox = createComponent(RNAnimatedBox, { shouldMemo: true });
