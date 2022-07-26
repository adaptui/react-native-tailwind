import { Box, BoxOptions, useBox } from "../../primitives/box";
import { useTheme } from "../../theme";
import { cx, styleAdapter } from "../../utils";
import {
  As,
  createComponentType,
  createElement,
  createHook,
  Props,
} from "../../utils/system";

import { BadgeUIProps } from "./BadgeProps";

export const useBadgeWrapper = createHook<BadgeWrapperOptions>(
  ({ size, themeColor, variant, ...props }) => {
    const tailwind = useTheme();
    const badgeStyles = useTheme("badge");
    const style = [
      tailwind.style(
        cx(
          badgeStyles.baseContainer,
          size ? badgeStyles.size[size]?.container : "",
          themeColor && variant
            ? badgeStyles.themeColor[themeColor]?.[variant]?.container
            : "",
        ),
      ),
      styleAdapter(props.style),
    ];

    props = useBox({ ...props, style });

    return props;
  },
);

export const BadgeWrapper = createComponentType<BadgeWrapperOptions>(props => {
  const htmlProps = useBadgeWrapper(props);

  return createElement(Box, htmlProps);
}, "BadgeWrapper");

export type BadgeWrapperOptions<T extends As = typeof Box> = BoxOptions<T> &
  Partial<BadgeUIProps> & {};

export type BadgeWrapperProps<T extends As = typeof Box> = Props<
  BadgeWrapperOptions<T>
>;
