import React from 'react';
import { Box } from '../../primitives/Box';
import { useTheme } from '../../theme';
import { AvatarSizes } from '../avatar/avatarPropTypes';

export interface AvatarGroupWrapperProps {
  size?: AvatarSizes;
  showRing?: boolean;
}

export const AvatarGroupWrapper: React.FC<AvatarGroupWrapperProps> = (
  props
) => {
  const avatarTheme = useTheme('avatar');
  const tailwind = useTheme();

  return (
    <Box style={tailwind.style([avatarTheme.group.base])}>{props.children}</Box>
  );
};
