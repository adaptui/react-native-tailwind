import { Text as RNText } from "react-native";

import {
  As,
  createComponent,
  createElement,
  createHook,
  Options,
  Props,
} from "../../utils/system";

export const useText = createHook<TextOptions>(props => {
  return props;
});

export const Text = createComponent<TextOptions>(props => {
  const htmlProps = useText(props);
  return createElement(RNText, htmlProps);
});

export type TextOptions<T extends As = typeof RNText> = Options<T>;

export type TextProps<T extends As = typeof RNText> = Props<TextOptions<T>>;
