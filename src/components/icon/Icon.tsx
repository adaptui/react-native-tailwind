import React from 'react';
import { ViewStyle } from 'react-native';
import { RenderPropType } from '../../utils';
import { Box } from '../../primitives/Box';
import { useTheme } from '../../theme/context';
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
  const { icon, style, size, color } = props;
  const iconAspectRatio = 1;
  const sizer = size ? `w-[${size}px]` : '';
  return (
    <Box
      style={[tailwind.style(sizer), style, { aspectRatio: iconAspectRatio }]}
    >
      {/* @ts-ignore */}
      {React.cloneElement(icon, { fill: color })}
    </Box>
  );
};
