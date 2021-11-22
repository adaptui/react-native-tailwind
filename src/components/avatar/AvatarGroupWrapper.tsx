import React from 'react';
import { Box, useTheme } from 'react-native-system';
import { AvatarSizes } from './types';

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
