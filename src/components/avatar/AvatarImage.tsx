import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'react-native-system';
import { AvatarImageProps } from './types';

export const AvatarImage: React.FC<AvatarImageProps> = ({
  imageProps,
  src,
  handleFallback,
  circular,
}) => {
  const tailwind = useTheme();
  const avatarTheme = useTheme('avatar');
  return (
    <Image
      source={src}
      style={tailwind.style([
        avatarTheme.image,
        circular ? avatarTheme.circular : '',
      ])}
      onError={handleFallback}
      {...imageProps}
    />
  );
};