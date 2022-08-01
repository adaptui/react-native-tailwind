import Animated from "react-native-reanimated";

import {
  As,
  ComponentOptions,
  createComponent,
  createElement,
  createHook,
  Props,
} from "../../utils/system";
import { Box } from "../box";

// @ts-ignore
const RNAnimatedBox = Animated.createAnimatedComponent(Box);

export const useAnimatedBox = createHook<AnimatedBoxOptions>(
  ({ __TYPE__, ...props }) => {
    return props;
  },
);

export const AnimatedBox = createComponent<AnimatedBoxOptions>(props => {
  const htmlProps = useAnimatedBox(props);
  return createElement(RNAnimatedBox, htmlProps);
});

export type AnimatedBoxOptions<T extends As = typeof RNAnimatedBox> =
  ComponentOptions<T>;

export type AnimatedBoxProps<T extends As = typeof RNAnimatedBox> = Props<
  AnimatedBoxOptions<T>
>;
