import { styled } from "nativewind";

import {
  As,
  createComponent,
  createElement,
  createHook,
  Props,
} from "../../utils/system";
import { Text, TextOptions, useText } from "../text";

const CStyledText = styled(Text);

export const useStyledText = createHook<StyledTextOptions>(props => {
  props = useText(props);

  return props;
});

export const StyledText = createComponent<StyledTextOptions>(props => {
  const htmlProps = useStyledText(props);
  return createElement(CStyledText, htmlProps);
});

export type StyledTextOptions<T extends As = typeof CStyledText> =
  TextOptions<T>;

export type StyledTextProps<T extends As = typeof CStyledText> = Props<
  StyledTextOptions<T>
>;
