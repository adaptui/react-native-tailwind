import React, { useState } from 'react';
import { Box, Text, useTheme } from 'react-native-system';
import { DefaultUser } from '../../assets';
import { AvatarImage } from './AvatarImage';
import { useAvatarProps } from './AvatarProps';
import { AvatarStatus } from './AvatarStatus';
import { AvatarProps, AvatarSizes } from './types';

function getInitials(name: string, size: AvatarSizes) {
  if (!name) {
    return;
  }
  const [firstName, lastName] = name.split(' ');
  const oneLetterInitialSizes = ['xs', 'sm', 'md'];

  const initials =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : `${firstName.charAt(0)}${firstName.charAt(1)}`;

  return oneLetterInitialSizes.includes(size)
    ? initials.toUpperCase().charAt(0)
    : initials.toUpperCase();
}

export const Avatar: React.FC<Partial<AvatarProps>> = (props) => {
  const tailwind = useTheme();
  const avatarTheme = useTheme('avatar');
  const { _imageProps, _basicProps, _otherProps, _statusProps } =
    useAvatarProps(props);
  const isSourceAvailable = React.useMemo(
    () => (_imageProps?.src ? true : false),
    [_imageProps?.src]
  );
  const [imageAvailable, setImageAvailable] = useState(isSourceAvailable);
  const loadFallback = () => setImageAvailable(false);
  return (
    <Box
      style={tailwind.style([
        avatarTheme.base,
        avatarTheme.size[_basicProps.size],
        _basicProps.circular ? avatarTheme.circular : '',
      ])}
    >
      {imageAvailable && _imageProps.src ? (
        <AvatarImage {..._imageProps} handleFallback={loadFallback} />
      ) : _otherProps.name ? (
        <Text
          style={tailwind.style([
            avatarTheme.initials.base,
            avatarTheme.initials.size[_basicProps.size],
          ])}
        >
          {getInitials(_otherProps.name, _basicProps.size)}
        </Text>
      ) : (
        <DefaultUser size={_basicProps.size} />
      )}
      {_statusProps.status && (
        <AvatarStatus size={_basicProps.size} status={_statusProps.status} />
      )}
    </Box>
  );
};
