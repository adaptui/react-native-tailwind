import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { Box, Text } from '../../primitives';
import { useBadgeProps } from './BadgeProps';

export type BadgeSizes = 'sm' | 'md' | 'lg';
export type BadgeTheme =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'success'
  | 'danger';
export type BadgeVariants = 'outline' | 'solid' | 'subtle';
export interface BadgeProps {
  /**
   * The size of the Badge component.
   * @default lg
   */
  size: BadgeSizes;
  /**
   * The themeColor of the Badge component.
   * @default default
   */
  themeColor: BadgeTheme;
  /**
   * The variant of the Badge component.
   * @default solid
   */
  variant: BadgeVariants;
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

export const Badge: React.FC<Partial<BadgeProps>> = (props) => {
  const tailwind = useTheme();
  const badgeStyles = useTheme('badge');
  const {
    _badgeLibProps: { size, variant, themeColor },
  } = useBadgeProps(props);
  return (
    <Box
      style={[
        tailwind.style([
          badgeStyles.baseContainer,
          badgeStyles.containerVariants[variant][themeColor],
          badgeStyles.size.container[size],
        ]),
        { ...props.containerStyle },
      ]}
    >
      {typeof props.children === 'string' ? (
        <Text
          style={[
            tailwind.style([
              badgeStyles.size.text[size],
              badgeStyles.textVariants[variant][themeColor],
            ]),
            { ...props.textStyle },
          ]}
        >
          {props.children}
        </Text>
      ) : (
        props.children
      )}
    </Box>
  );
};
