import React, { forwardRef } from "react";
import { PressableProps, TextStyle, ViewStyle } from "react-native";

import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Touchable } from "../../primitives/Touchable";
import { useTheme } from "../../theme";
import { createComponent, RenderPropType } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { useTagProps } from "./TagProps";

export type TagSizes = "sm" | "md" | "lg" | "xl";
export type TagVariant = "solid" | "subtle" | "outline";

export interface TagProps extends PressableProps {
  /**
   * The size of the Tag component.
   * @default lg
   */
  size: TagSizes;
  /**
   * The variant of the Tag component.
   * @default solid
   */
  variant: TagVariant;
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
   * The Container style of the Tag component.
   * @default {}
   */
  touchableContainerStyle: ViewStyle;
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
    _tagLibProps: { size, variant },
    _tagOptions: { suffix, prefix },
  } = useTagProps(props);
  return (
    <Touchable
      ref={ref}
      style={({ pressed }) => [
        tailwind.style(
          tagTheme.base,
          tagTheme.size.default[size],
          tagTheme.variant.default[variant],
          pressed && tagTheme.variant.pressed[variant],
          props.disabled && tagTheme.variant.disabled[variant],
        ),
        { ...props.touchableContainerStyle },
      ]}
      {...props}
    >
      {prefix &&
        // @ts-ignore
        (prefix?.type === Icon ? (
          createIcon({
            icon: prefix,
            iconFill: tailwind.getColor(
              props.disabled
                ? tagTheme.variant.icon.disabled[variant]
                : tagTheme.variant.icon.default[variant],
            ),
            iconStyle: tailwind.style(tagTheme.size.prefix[size]),
          })
        ) : (
          <Box style={[tailwind.style(tagTheme.size.prefix[size])]}>
            {prefix}
          </Box>
        ))}
      {typeof props.children === "string" ? (
        <Text
          style={[
            tailwind.style(
              tagTheme.size.text[size],
              tagTheme.variant.text.default[variant],
              props.disabled && tagTheme.variant.text.disabled[variant],
            ),
            { ...props.textStyle },
          ]}
          adjustsFontSizeToFit
          allowFontScaling={false}
        >
          {props.children}
        </Text>
      ) : (
        props.children
      )}
      {suffix &&
        // @ts-ignore
        (suffix?.type === Icon ? (
          createIcon({
            icon: suffix,
            iconFill: tailwind.getColor(
              props.disabled
                ? tagTheme.variant.icon.disabled[variant]
                : tagTheme.variant.icon.default[variant],
            ),
            iconStyle: tailwind.style(tagTheme.size.suffix[size]),
          })
        ) : (
          <Box style={[tailwind.style(tagTheme.size.suffix[size])]}>
            {suffix}
          </Box>
        ))}
    </Touchable>
  );
});

RNTag.displayName = "RNTag";

export const Tag = createComponent<Partial<TagProps>>(RNTag, {
  shouldMemo: true,
});
