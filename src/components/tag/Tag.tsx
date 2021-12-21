import React from 'react';
import { PressableProps, TextStyle, ViewStyle } from 'react-native';
import { Box, RenderPropType, Text, Touchable, useTheme } from '../../index';
import { Icon } from '..';
import { Close } from '../../assets';
import { createIcon } from '../create-icon/createIcon';
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
      {prefix &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (prefix?.type === Icon ? (
          createIcon({
            icon: prefix,
            iconFill: tailwind.getColor(
              props.disabled
                ? tagTheme.variant.icon.disabled[variant]
                : tagTheme.variant.icon.default[variant]
            ),
            iconStyle: tailwind.style(tagTheme.size.prefix[size]),
          })
        ) : (
          <Box style={[tailwind.style(tagTheme.size.prefix[size])]}>
            {prefix}
          </Box>
        ))}
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
        <Icon
          style={tailwind.style(tagTheme.size.closable[size])}
          color={tailwind.getColor(
            props.disabled
              ? tagTheme.variant.icon.disabled[variant]
              : tagTheme.variant.icon.default[variant]
          )}
          icon={<Close />}
        />
      )}
    </Touchable>
  );
};
