import React, { forwardRef } from "react";

import { Box, BoxProps, Text, TextProps } from "../../primitives";
import { getTextFontFamily, useTailwind, useTheme } from "../../theme";
import { createComponent, cx, RenderPropType, styleAdapter } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

export type BadgeSizes = "sm" | "md" | "lg";

export type BadgeTheme =
  | "base"
  | "primary"
  | "secondary"
  | "success"
  | "danger";

export type BadgeVariants = "outline" | "solid" | "subtle";
export interface BadgeProps extends BoxProps {
  /**
   * How large should the badge be?
   * @default md
   */
  size: BadgeSizes;
  /**
   * How the badge should be themed?
   * @default base
   */
  themeColor: BadgeTheme;
  /**
   * How the badge should look?
   * @default solid
   */
  variant: BadgeVariants;
  /**
   * The Text style of the Badge component.
   * @default {}
   */
  textProps: TextProps;
  /**
   * If added, the Badge will show an icon before the tag's text.
   */
  prefix: RenderPropType;
}

const RNBadge: React.FC<Partial<BadgeProps>> = forwardRef<
  typeof Box,
  Partial<BadgeProps>
>(
  (
    {
      size = "md",
      themeColor = "base",
      variant = "solid",
      textProps = {},
      prefix,
      ...props
    },
    ref,
  ) => {
    const { ts, gc } = useTailwind();

    const badgeStyles = useTheme("badge");
    const { style: boxStyle = {}, ...otherBoxProps } = props;
    const { style: textStyle = {}, ...otherTextProps } = textProps;

    const _prefix =
      // @ts-ignore
      prefix?.type === Icon ? (
        createIcon({
          icon: prefix,
          iconFill: gc(cx(badgeStyles.themeColor[themeColor]?.[variant]?.text)),
          iconStyle: ts(cx(badgeStyles.size[size]?.prefix)),
        })
      ) : (
        <Box style={ts(cx(badgeStyles.size[size]?.prefix))}>
          {prefix as React.ReactNode}
        </Box>
      );

    return (
      <Box
        ref={ref}
        style={[
          ts(
            cx(
              badgeStyles.baseContainer,
              badgeStyles.themeColor[themeColor]?.[variant]?.container,
              badgeStyles.size[size]?.container,
            ),
          ),
          styleAdapter(boxStyle),
        ]}
        {...otherBoxProps}
      >
        {prefix && _prefix}
        {typeof props.children === "string" ? (
          <Text
            style={[
              ts(
                cx(
                  badgeStyles.size[size]?.text,
                  badgeStyles.themeColor[themeColor]?.[variant]?.text,
                ),
              ),
              getTextFontFamily(badgeStyles.size[size]?.text),
              styleAdapter(textStyle),
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
