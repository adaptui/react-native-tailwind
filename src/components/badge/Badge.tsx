import React, { forwardRef } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { Box, Text } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';
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

const RNBadge: React.FC<Partial<BadgeProps>> = forwardRef<
  typeof Box,
  Partial<BadgeProps>
>((props, ref) => {
  const tailwind = useTheme();
  const badgeStyles = useTheme('badge');
  const {
    _badgeLibProps: { size, variant, themeColor },
  } = useBadgeProps(props);
  return (
    <Box
      ref={ref}
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
});

RNBadge.displayName = 'RNBadge';

export const Badge = createComponent<Partial<BadgeProps>>(RNBadge, {
  shouldMemo: true,
});
