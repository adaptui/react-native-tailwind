import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'react-native-system';
import { AvatarImageProps } from './types';
interface CAvatarImageProps extends AvatarImageProps {
  handleFallback: () => void;
}

export const AvatarImage: React.FC<CAvatarImageProps> = ({
  imageProps,
  src,
  handleFallback,
  circular,
  size,
}) => {
  const tailwind = useTheme();
  const avatarTheme = useTheme('avatar');
  return (
    <Image
      source={src}
      style={[
        avatarTheme.borderRadius.size[size],
        tailwind.style([
          avatarTheme.image,
          circular ? avatarTheme.circular : '',
        ]),
      ]}
      onError={handleFallback}
      {...imageProps}
    />
  );
};
