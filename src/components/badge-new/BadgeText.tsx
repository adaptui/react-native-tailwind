import {
  AdaptText,
  AdaptTextOptions,
  useAdaptText,
} from "../../primitives/text";
import { useTheme } from "../../theme";
import { cx } from "../../utils";
import {
  As,
  createComponentType,
  createElement,
  createHook,
  Props,
} from "../../utils/system";

import { BadgeUIProps } from "./BadgeProps";

export const useBadgeText = createHook<BadgeTextOptions>(
  ({ size, themeColor, variant, ...props }) => {
    const badgeStyles = useTheme("badge");
    const className = cx(
      size ? badgeStyles.size[size]?.text : "",
      themeColor && variant
        ? badgeStyles.themeColor[themeColor]?.[variant]?.text
        : "",
      props.className,
    );

    props = useAdaptText({ ...props, className });

    return props;
  },
);

export const BadgeText = createComponentType<BadgeTextOptions>(props => {
  const htmlProps = useBadgeText(props);

  return createElement(AdaptText, htmlProps);
}, "BadgeText");

export type BadgeTextOptions<T extends As = typeof AdaptText> =
  AdaptTextOptions<T> & Partial<BadgeUIProps> & {};

export type BadgeTextProps<T extends As = typeof AdaptText> = Props<
  BadgeTextOptions<T>
>;
