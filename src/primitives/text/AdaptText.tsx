import {
  As,
  createComponent,
  createElement,
  createHook,
  Props,
} from "../../utils/system";
import { BoxOptions, useBox } from "../box";

import { Text, TextOptions, useText } from "./Text";

export const useAdaptText = createHook<AdaptTextOptions>(props => {
  props = useText(props);
  props = useBox(props);

  return props;
});

export const AdaptText = createComponent<AdaptTextOptions>(props => {
  const htmlProps = useAdaptText(props);
  return createElement(Text, htmlProps);
});

export type AdaptTextOptions<T extends As = typeof Text> = TextOptions<T> &
  BoxOptions<T>;

export type AdaptTextProps<T extends As = typeof Text> = Props<
  AdaptTextOptions<T>
>;
