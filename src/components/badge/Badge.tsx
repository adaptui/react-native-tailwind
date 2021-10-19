import React from 'react';
import { Box, Text, useTheme } from 'react-native-system';

export interface BadgeProps {
  /**
   * The size of the Badge component.
   * @default lg
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The themeColor of the Badge component.
   * @default default
   */
  themeColor?: 'primary' | 'secondary' | 'default' | 'success' | 'danger';
  /**
   * The variant of the Badge component.
   * @default solid
   */
  variant?: 'outline' | 'solid' | 'subtle';
}

export const Badge: React.FC<BadgeProps> = ({
  size = 'md',
  themeColor = 'default',
  variant = 'solid',
  ...props
}) => {
  const tailwind = useTheme();
  const badgeStyles = useTheme('badge');

  return (
    <Box
      style={tailwind.style([
        badgeStyles.baseContainer,
        badgeStyles.containerVariants[variant][themeColor],
      ])}
    >
      {typeof props.children === 'string' ? (
        <Text
          style={tailwind.style([
            badgeStyles.size[size],
            badgeStyles.textVariants[variant][themeColor],
          ])}
        >
          {props.children}
        </Text>
      ) : (
        props.children
      )}
    </Box>
  );
};
