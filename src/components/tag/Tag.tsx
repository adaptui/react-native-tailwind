import React, { forwardRef } from "react";
import { PressableProps, TextStyle } from "react-native";

import { Close } from "../../icons";
import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, RenderPropType, styleAdapter } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

export type TagSizes = "sm" | "md" | "lg" | "xl";
export type TagVariant = "solid" | "subtle" | "outline";
export type TagTheme = "base" | "primary";

export interface TagProps extends PressableProps {
  /**
   * The size of the Tag component.
   * @default md
   */
  size: TagSizes;
  /**
   * The variant of the Tag component.
   * @default solid
   */
  variant: TagVariant;
  /**
   * The Theme of the Tag component.
   * @default base
   */
  themeColor: TagTheme;
  /**
   * A Prefix Element.
   * If added, the Tag will show a prefix Element before the Tag's text.
   */
  prefix: RenderPropType;
  /**
   * A Suffix Element.
   * If added, the Tag will show a suffix Element after the Tag's text.
   */
  suffix: RenderPropType;
  /**
   * Is Tag Closable/Removable.
   * If yes, the Tag will show a Close Icon after the Tag's text or Suffix.
   */
  closable: boolean;
  /**
   * The Text style of the Tag component.
   * @default {}
   */
  textStyle: TextStyle;
}

const RNTag: React.FC<Partial<TagProps>> = forwardRef<
  typeof Touchable,
  Partial<TagProps>
>((props, ref) => {
  const tailwind = useTheme();
  const tagTheme = useTheme("tag");
  const {
    size = "md",
    variant = "solid",
    themeColor = "base",
    closable = false,
    prefix,
    suffix = closable ? <Icon icon={<Close />} /> : null,
    style,
    textStyle,
    ...otherProps
  } = props;

  /* Prefix Slot */
  const _prefix =
    prefix &&
    // @ts-ignore
    (prefix?.type === Icon ? (
      createIcon({
        icon: prefix,
        iconFill: tailwind.getColor(
          cx(
            props.disabled
              ? tagTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : tagTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
        ),
        iconStyle: tailwind.style(cx(tagTheme.size[size]?.prefix)),
      })
    ) : (
      <Box style={tailwind.style(cx(tagTheme.size[size]?.prefix))}>
        {prefix}
      </Box>
    ));

  /* Suffix Slot */
  const _suffix =
    suffix &&
    // @ts-ignore
    (suffix?.type === Icon ? (
      createIcon({
        icon: suffix,
        iconFill: tailwind.getColor(
          cx(
            props.disabled
              ? tagTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : tagTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
        ),
        iconStyle: tailwind.style(cx(tagTheme.size[size]?.suffix)),
      })
    ) : (
      <Box style={tailwind.style(cx(tagTheme.size[size]?.suffix))}>
        {suffix}
      </Box>
    ));

  /**
   * Tag Children
   */
  const children =
    typeof otherProps.children === "string" ? (
      <Text
        style={[
          tailwind.style(
            cx(
              tagTheme.size[size]?.text,
              tagTheme.themeColor[themeColor]?.[variant]?.text?.default,
              props.disabled
                ? tagTheme.themeColor[themeColor]?.[variant]?.text?.disabled
                : "",
            ),
          ),
          styleAdapter(textStyle),
        ]}
        adjustsFontSizeToFit
        allowFontScaling={false}
      >
        {props.children}
      </Text>
    ) : (
      props.children
    );

  return (
    <Touchable
      ref={ref}
      style={touchState => [
        tailwind.style(
          cx(
            tagTheme.base,
            tagTheme.size[size]?.default,
            tagTheme.themeColor[themeColor]?.[variant]?.container?.wrapper,
            touchState.pressed
              ? tagTheme.themeColor[themeColor]?.[variant]?.container?.pressed
              : "",
            props.disabled
              ? tagTheme.themeColor[themeColor]?.[variant]?.container?.disabled
              : "",
          ),
        ),
        styleAdapter(style, touchState),
      ]}
      {...otherProps}
    >
      {_prefix}
      {children}
      {closable && _suffix}
    </Touchable>
  );
});

RNTag.displayName = "RNTag";

export const Tag = createComponent<Partial<TagProps>>(RNTag, {
  shouldMemo: true,
});
