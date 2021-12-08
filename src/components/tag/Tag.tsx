import React from 'react';
import { PressableProps, TextStyle, ViewStyle } from 'react-native';
import {
  Box,
  RenderPropType,
  Text,
  Touchable,
  useTheme,
} from 'react-native-system';
import { Close } from '../../assets';
import { useTagProps } from './TagProps';

export type TagSizes = 'sm' | 'md' | 'lg' | 'xl';
export type TagVariant = 'solid' | 'subtle' | 'outline';

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
   * If added, the Tag will show an icon before the Tag's text.
   */
  prefix: RenderPropType;
  /**
   * Does Tag have a Suffix.
   * If yes, the Tag will show a Close Icon after the Tag's text.
   */
  closable: boolean;
  /**
   * The Container style of the Badge component.
   * @default {}
   */
  containerStyle: ViewStyle;
  /**
   * The Text style of the Badge component.
   * @default {}
   */
  textStyle: TextStyle;
}

export const Tag: React.FC<Partial<TagProps>> = (props) => {
  const tailwind = useTheme();
  const tagTheme = useTheme('tag');
  const iconAspectRatio = 1;

  const {
    _tagLibProps: { size, variant, closable, prefix },
  } = useTagProps(props);
  return (
    <Touchable
      style={({ pressed }) => [
        tailwind.style(
          tagTheme.base,
          tagTheme.size.default[size],
          tagTheme.variant.default[variant],
          pressed && tagTheme.variant.pressed[variant],
          props.disabled && tagTheme.variant.disabled[variant]
        ),
        { ...props.containerStyle },
      ]}
      {...props}
    >
      {prefix && (
        <Box
          style={[
            tailwind.style(tagTheme.size.prefix[size]),
            { aspectRatio: iconAspectRatio },
          ]}
        >
          {/* @ts-ignore */}
          {React.cloneElement(prefix, {
            stroke: tailwind.getColor(
              props.disabled
                ? tagTheme.variant.icon.disabled[variant]
                : tagTheme.variant.icon.default[variant]
            ),
          })}
        </Box>
      )}
      {typeof props.children === 'string' ? (
        <Text
          style={[
            tailwind.style(
              tagTheme.size.text[size],
              tagTheme.variant.text.default[variant],
              props.disabled && tagTheme.variant.text.disabled[variant]
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
      {closable && (
        <Box
          style={[
            tailwind.style(tagTheme.size.closable[size]),
            { aspectRatio: iconAspectRatio },
            // TODO: Increasing the size of Icon based on Text Font Size
            // props.textStyle && { width: props.textStyle.fontSize },
          ]}
        >
          <Close
            stroke={tailwind.getColor(
              props.disabled
                ? tagTheme.variant.icon.disabled[variant]
                : tagTheme.variant.icon.default[variant]
            )}
          />
        </Box>
      )}
    </Touchable>
  );
};
