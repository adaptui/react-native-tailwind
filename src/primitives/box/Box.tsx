import { styled } from "nativewind";

import {
  As,
  ComponentOptions,
  createComponent,
  createElement,
  createHook,
  Props,
} from "../../utils/system";
import { View } from "../view";

export const StyledView = styled(View);

export const useBox = createHook<BoxOptions>(({ __TYPE__, ...props }) => {
  return props;
});

export const Box = createComponent<BoxOptions>(props => {
  const htmlProps = useBox(props);
  return createElement(StyledView, htmlProps);
});

export type BoxOptions<T extends As = typeof StyledView> = ComponentOptions<T>;

export type BoxProps<T extends As = typeof StyledView> = Props<BoxOptions<T>>;
