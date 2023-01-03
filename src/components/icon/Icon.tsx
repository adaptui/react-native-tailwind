import React, { forwardRef } from "react";
import { ViewStyle } from "react-native";

import { Box } from "../../primitives";
import { useTailwind } from "../../theme";
import { createComponent, RenderPropType } from "../../utils";

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

const RNIcon: React.FC<Partial<IconComponentProps>> = forwardRef<
  typeof Box,
  Partial<IconComponentProps>
>((props, ref) => {
  const { ts } = useTailwind();
  const { icon, style, size, color } = props;
  const iconAspectRatio = 1;
  const sizer = size ? `w-[${size}px]` : "";
  return (
    <Box ref={ref} style={[ts(sizer), style, { aspectRatio: iconAspectRatio }]}>
      {/* @ts-ignore */}
      {React.cloneElement(icon, { fill: color })}
    </Box>
  );
});

RNIcon.displayName = "RNIcon";

export const Icon = createComponent<Partial<IconComponentProps>>(RNIcon, {
  shouldMemo: true,
});
