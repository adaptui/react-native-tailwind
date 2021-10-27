import React from 'react';
import {
  AvatarSizes,
  AvatarStatusType,
  Box,
  useTheme,
} from 'react-native-system';
import { SleepIndicator } from '../../assets';

interface AvatarStatusProps {
  status?: AvatarStatusType;
  size?: AvatarSizes;
}

export const AvatarStatus: React.FC<AvatarStatusProps> = ({
  status,
  size = 'xl',
}) => {
  const tailwind = useTheme();
  const avatarStatusTheme = useTheme('avatar');
  switch (status) {
    case 'active': {
      return (
        <Box
          style={[
            tailwind.style([
              avatarStatusTheme.status.active.base,
              avatarStatusTheme.status.size[size],
            ]),
            avatarStatusTheme.status.outerBorderRadius,
          ]}
        />
      );
    }
    case 'away': {
      return (
        <Box
          style={[
            tailwind.style([
              avatarStatusTheme.status.away.base,
              avatarStatusTheme.status.size[size],
            ]),
            avatarStatusTheme.status.outerBorderRadius,
          ]}
        >
          <Box
            style={[
              tailwind.style([avatarStatusTheme.status.away.innerBox.base]),
              avatarStatusTheme.status.away.innerBox.size[size],
            ]}
          />
        </Box>
      );
    }
    case 'sleep': {
      return (
        <Box
          style={[
            tailwind.style([
              avatarStatusTheme.status.sleep.base,
              avatarStatusTheme.status.size[size],
            ]),
            avatarStatusTheme.status.outerBorderRadius,
          ]}
        >
          <SleepIndicator size={size} />
        </Box>
      );
    }
  }
  return null;
};
