import { View } from "react-native";

import {
  As,
  ComponentOptions,
  createComponent,
  createElement,
  createHook,
  Props,
} from "../../utils/system";

export const useBox = createHook<BoxOptions>(({ __TYPE__, ...props }) => {
  return props;
});

export const Box = createComponent<BoxOptions>(props => {
  const htmlProps = useBox(props);
  return createElement(View, htmlProps);
});

export type BoxOptions<T extends As = typeof View> = ComponentOptions<T>;

export type BoxProps<T extends As = typeof View> = Props<BoxOptions<T>>;
