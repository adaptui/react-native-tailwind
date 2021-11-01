import React, { useState } from 'react';
import { Image, ImageProps, ImageSourcePropType } from 'react-native';
import { Box, Text, useTheme } from 'react-native-system';
import { DefaultUser } from '../../assets';
import { AvatarStatus } from './AvatarStatus';

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type AvatarStatusType = 'active' | 'away' | 'sleep' | 'typing';

interface AvatarProps {
  imageProps?: Omit<ImageProps, 'source'>;
  src?: ImageSourcePropType;
  name?: string;
  /**
   * The size of the Avatar component.
   * Recomended size for Mobile
   * @default xl
   */
  size?: AvatarSizes;
  status?: AvatarStatusType;
  circular?: boolean;
}

function getInitials(name?: string, size?: AvatarSizes) {
  if (!name) {
    return;
  }
  const [firstName, lastName] = name.split(' ');
  return firstName && lastName && size !== 'xs'
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

export const Avatar: React.FC<AvatarProps> = ({
  imageProps,
  src,
  name,
  size = 'xl',
  status,
  circular = false,
}) => {
  const tailwind = useTheme();
  const avatarTheme = useTheme('avatar');
  const isSourceAvailable = React.useMemo(() => (src ? true : false), [src]);
  const [imageAvailable, setImageAvailable] = useState(isSourceAvailable);
  const loadFallback = () => setImageAvailable(false);

  return (
    <Box
      style={tailwind.style([
        avatarTheme.base,
        avatarTheme.size[size],
        circular ? avatarTheme.circular : '',
      ])}
    >
      {imageAvailable && src ? (
        <Image
          source={src}
          style={tailwind.style([
            avatarTheme.image,
            circular ? avatarTheme.circular : '',
          ])}
          onError={loadFallback}
          {...imageProps}
        />
      ) : name ? (
        <Text
          style={tailwind.style([
            avatarTheme.initials.base,
            avatarTheme.initials.size[size],
          ])}
        >
          {getInitials(name, size)}
        </Text>
      ) : (
        <DefaultUser size={size} />
      )}
      {status && <AvatarStatus size={size} status={status} />}
    </Box>
  );
};
