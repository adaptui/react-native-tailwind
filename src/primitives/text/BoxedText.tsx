import { Text as RNText } from "react-native";

import {
  As,
  createComponent,
  createElement,
  createHook,
  Props,
} from "../../utils/system";
import { BoxOptions, useBox } from "../box";

export const useBoxedText = createHook<BoxedTextOptions>(props => {
  props = useBox(props);
  return props;
});

export const BoxedText = createComponent<BoxedTextOptions>(props => {
  const htmlProps = useBoxedText(props);
  return createElement(RNText, htmlProps);
});

export type BoxedTextOptions<T extends As = typeof RNText> = BoxOptions<T>;

export type BoxedTextProps<T extends As = typeof RNText> = Props<
  BoxedTextOptions<T>
>;
