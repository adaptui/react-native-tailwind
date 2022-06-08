import React, { forwardRef } from "react";

import { Box, BoxProps, Text, TextProps } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, RenderPropType, styleAdapter } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

export type BadgeSizes = "sm" | "md" | "lg";

export type BadgeTheme =
  | "primary"
  | "secondary"
  | "default"
  | "success"
  | "danger";

export type BadgeVariants = "outline" | "solid" | "subtle";
export interface BadgeProps extends BoxProps {
  /**
   * How large should the badge be?
   * @default md
   */
  size?: BadgeSizes;
  /**
   * How the badge should be themed?
   * @default default
   */
  themeColor?: BadgeTheme;
  /**
   * How the badge should look?
   * @default solid
   */
  variant?: BadgeVariants;
  /**
   * The Text style of the Badge component.
   * @default {}
   */
  textProps?: TextProps;
  /**
   * If added, the Badge will show an icon before the tag's text.
   */
  prefix?: RenderPropType;
}

const RNBadge: React.FC<Partial<BadgeProps>> = forwardRef<
  typeof Box,
  BadgeProps
>(
  (
    {
      size = "md",
      themeColor = "default",
      variant = "solid",
      textProps = {},
      prefix,
      ...props
    },
    ref,
  ) => {
    const tailwind = useTheme();

    const badgeStyles = useTheme("badge");
    const { style: boxStyle = {}, ...otherBoxProps } = props;
    const { style: textStyle = {}, ...otherTextProps } = textProps;

    const _prefix =
      // @ts-ignore
      prefix?.type === Icon ? (
        createIcon({
          icon: prefix,
          iconFill: tailwind.getColor(
            badgeStyles.textVariants[variant][themeColor],
          ),
          iconStyle: tailwind.style(cx(badgeStyles.prefix.size[size])),
        })
      ) : (
        <Box style={tailwind.style(cx(badgeStyles.prefix.size[size]))}>
          {prefix}
        </Box>
      );

    return (
      <Box
        ref={ref}
        style={[
          tailwind.style(
            cx(
              badgeStyles.baseContainer,
              badgeStyles.containerVariants[variant][themeColor],
              badgeStyles.size.container[size],
            ),
          ),
          styleAdapter(boxStyle, { pressed: false }, false),
        ]}
        {...otherBoxProps}
      >
        {prefix && _prefix}
        {typeof props.children === "string" ? (
          <Text
            style={[
              tailwind.style(
                cx(
                  badgeStyles.size.text[size],
                  badgeStyles.textVariants[variant][themeColor],
                ),
              ),
              styleAdapter(textStyle, { pressed: false }, false),
            ]}
            {...otherTextProps}
          >
            {props.children}
          </Text>
        ) : (
          props.children
        )}
      </Box>
    );
  },
);

RNBadge.displayName = "RNBadge";

export const Badge = createComponent<Partial<BadgeProps>>(RNBadge, {
  shouldMemo: true,
});
