import React from 'react';
import { Image } from 'react-native';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { AvatarImageProps } from './avatarPropTypes';

interface CAvatarImageProps extends AvatarImageProps {
  handleFallback: () => void;
}

export const AvatarImage: React.FC<CAvatarImageProps> = ({
  imageProps,
  src,
  handleFallback,
  squared,
  size,
}) => {
  const tailwind = useTheme();
  const avatarTheme = useTheme('avatar');
  return (
    <Image
      source={src}
      style={[
        avatarTheme.borderRadius.size[size],
        tailwind.style(
          cx(avatarTheme.image, !squared ? avatarTheme.circular : '')
        ),
      ]}
      onError={handleFallback}
      {...imageProps}
    />
  );
};
