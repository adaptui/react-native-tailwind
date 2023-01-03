import React from "react";

import { Box, BoxProps } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
import { styleAdapter } from "../../utils";
import { AvatarSizes } from "../avatar";

export interface AvatarGroupWrapperProps extends BoxProps {
  size?: AvatarSizes;
  showRing?: boolean;
}

export const AvatarGroupWrapper: React.FC<AvatarGroupWrapperProps> = ({
  children,
  style,
  ...props
}) => {
  const avatarTheme = useTheme("avatar");
  const { ts } = useTailwind();

  return (
    <Box {...props} style={[ts([avatarTheme.group.base]), styleAdapter(style)]}>
      {children}
    </Box>
  );
};
