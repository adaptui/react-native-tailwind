import { BoxOptions, useBox } from "../../primitives";
import {
  StyledText,
  StyledTextOptions,
  useStyledText,
} from "../../primitives/styled-text";
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

    props = useStyledText({ ...props, className });
    props = useBox(props);

    return props;
  },
);

export const BadgeText = createComponentType<BadgeTextOptions>(props => {
  const htmlProps = useBadgeText(props);

  return createElement(StyledText, htmlProps);
}, "BadgeText");

export type BadgeTextOptions<T extends As = typeof StyledText> = BoxOptions &
  StyledTextOptions<T> &
  Partial<BadgeUIProps> & {};

export type BadgeTextProps<T extends As = typeof StyledText> = Props<
  BadgeTextOptions<T>
>;
