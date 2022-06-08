import React from "react";

import { Box, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
import { styleAdapter } from "../../utils";
import { AvatarSizes } from "../avatar/avatarPropTypes";

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
  const tailwind = useTheme();

  return (
    <Box
      {...props}
      style={[
        tailwind.style([avatarTheme.group.base]),
        styleAdapter(style, { pressed: false }, false),
      ]}
    >
      {children}
    </Box>
  );
};
