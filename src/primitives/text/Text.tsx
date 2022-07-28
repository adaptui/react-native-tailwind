import { Text as RNText } from "react-native";
import { styled } from "nativewind";

import {
  As,
  createComponent,
  createElement,
  createHook,
  Options,
  Props,
} from "../../utils/system";

export const StyledText = styled(RNText);

export const useText = createHook<TextOptions>(props => {
  return props;
});

export const Text = createComponent<TextOptions>(props => {
  const htmlProps = useText(props);
  return createElement(StyledText, htmlProps);
});

export type TextOptions<T extends As = typeof StyledText> = Options<T>;

export type TextProps<T extends As = typeof StyledText> = Props<TextOptions<T>>;
