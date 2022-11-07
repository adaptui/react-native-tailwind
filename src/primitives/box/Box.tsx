import { View } from "react-native";

import { useTheme } from "../../theme";
import { styleAdapter } from "../../utils";
import {
  As,
  ComponentOptions,
  createComponentType,
  createElement,
  createHook,
  Props,
} from "../../utils/system";

export const useBox = createHook<BoxOptions>(
  ({ __TYPE__, className, ...props }) => {
    const tailwind = useTheme();
    const style = [tailwind.style(className), styleAdapter(props.style)];

    return { ...props, style };
  },
);

export const Box = createComponentType<BoxOptions>(props => {
  const htmlProps = useBox(props);
  return createElement(View, htmlProps);
}, "Box");

export type BoxOptions<T extends As = typeof View> = ComponentOptions<T> & {
  className?: string;
};

export type BoxProps<T extends As = typeof View> = Props<BoxOptions<T>>;
