import React from 'react';
import { PressableProps, TextStyle, ViewStyle } from 'react-native';
import { Box } from '../../primitives/Box';
import { Text } from '../../primitives/Text';
import { Touchable } from '../../primitives/Touchable';
import { useTheme } from '../../theme';
import { RenderPropType } from '../../utils';
import { createIcon } from '../create-icon';
import { useTagProps } from './TagProps';
import { Icon } from '../icon';

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

export const Tag: React.FC<Partial<TagProps>> = (props) => {
  const tailwind = useTheme();
  const tagTheme = useTheme('tag');

  const {
    _tagLibProps: { size, variant },
    _tagOptions: { suffix, prefix },
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
        { ...props.touchableContainerStyle },
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
      {suffix &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (suffix?.type === Icon ? (
          createIcon({
            icon: suffix,
            iconFill: tailwind.getColor(
              props.disabled
                ? tagTheme.variant.icon.disabled[variant]
                : tagTheme.variant.icon.default[variant]
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
};
