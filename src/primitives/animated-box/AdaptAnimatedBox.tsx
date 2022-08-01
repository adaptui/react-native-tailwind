import { useTheme } from "../../theme";
import { styleAdapter } from "../../utils";
import {
  As,
  createComponent,
  createElement,
  createHook,
  Props,
} from "../../utils/system";
import { useBox } from "../box";

import { AnimatedBox, AnimatedBoxOptions, useAnimatedBox } from "./AnimatedBox";

export const useAdaptAnimatedBox = createHook<AdaptAnimatedBoxOptions>(
  ({ __TYPE__, className, ...props }) => {
    const tailwind = useTheme();
    const style = [tailwind.style(className), styleAdapter(props.style)];

    props = useAnimatedBox(props);
    props = useBox(props);

    return { ...props, style };
  },
);

export const AdaptAnimatedBox = createComponent<AdaptAnimatedBoxOptions>(
  props => {
    const htmlProps = useAdaptAnimatedBox(props);

    return createElement(AnimatedBox, htmlProps);
  },
);

export type AdaptAnimatedBoxOptions<T extends As = typeof AnimatedBox> =
  AnimatedBoxOptions<T> & {
    className?: string;
  };

export type AdaptAnimatedBoxProps<T extends As = typeof AnimatedBox> = Props<
  AdaptAnimatedBoxOptions<T>
>;
