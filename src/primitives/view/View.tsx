import { View as RNView } from "react-native";

import {
  As,
  createComponent,
  createElement,
  createHook,
  Options,
  Props,
} from "../../utils/system";

export const useView = createHook<ViewOptions>(props => {
  return props;
});

export const View = createComponent<ViewOptions>(props => {
  const htmlProps = useView(props);
  return createElement(RNView, htmlProps);
});

export type ViewOptions<T extends As = typeof RNView> = Options<T>;

export type ViewProps<T extends As = typeof RNView> = Props<ViewOptions<T>>;
