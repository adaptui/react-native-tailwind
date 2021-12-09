import React from 'react';
import { ViewStyle } from 'react-native';
import { RenderPropType, useTheme } from 'react-native-system';
import { Box } from '../../primitives/Box';

export interface IconComponentProps {
  /**
   * Svg Icon
   */
  icon: RenderPropType;
  /**
   * Bounding Box style for Icon
   */
  style?: ViewStyle;
  /**
   * Icon Size
   */
  size?: 10 | 12 | 16 | 20 | 24 | 32 | number;
  /**
   * Icon Color
   * @default gray-600
   */
  color?: string;
}

export const Icon: React.FC<IconComponentProps> = (props) => {
  const tailwind = useTheme();
  const { icon, style, size } = props;
  const iconAspectRatio = 1;
  const sizer = size ? `w-[${size}px]` : '';
  return (
    <Box
      style={[tailwind.style(sizer), { aspectRatio: iconAspectRatio }, style]}
    >
      {icon}
    </Box>
  );
};
