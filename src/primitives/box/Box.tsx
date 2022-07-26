import { View } from "react-native";

import {
  As,
  createComponent,
  createElement,
  createHook,
  Options,
  Props,
} from "../../utils/system";

export const useBox = createHook<BoxOptions>(props => {
  return props;
});

export const Box = createComponent<BoxOptions>(props => {
  const htmlProps = useBox(props);
  return createElement(View, htmlProps);
});

export type BoxOptions<T extends As = typeof View> = Options<T>;

export type BoxProps<T extends As = typeof View> = Props<BoxOptions<T>>;
