import { pick } from 'lodash';
import React from 'react';
import { useAvatarGroup } from './AvatarGroup';
import {
  AvatarBasicProps,
  AvatarImageProps,
  AvatarOtherProps,
  AvatarProps,
  AvatarStatusProps,
} from './types';
import {
  AVATAR_BASIC_KEYS,
  AVATAR_IMAGE_KEYS,
  AVATAR_OTHER_KEYS,
  AVATAR_STATUS_KEYS,
} from './__keys';

interface AvatarPropsReturnType {
  _imageProps: AvatarImageProps;
  _basicProps: AvatarBasicProps;
  _otherProps: AvatarOtherProps;
  _statusProps: AvatarStatusProps;
}

export const useAvatarProps = (
  props: React.PropsWithChildren<Partial<AvatarProps>>
): AvatarPropsReturnType => {
  const avatarGroupProps = useAvatarGroup();
  props = {
    size: avatarGroupProps?.size || 'xl',
    circular: avatarGroupProps?.circular,
    ...props,
  };
  const _imageProps = pick(props, AVATAR_IMAGE_KEYS) as AvatarImageProps;
  const _basicProps = pick(props, AVATAR_BASIC_KEYS) as AvatarBasicProps;
  const _otherProps = pick(props, AVATAR_OTHER_KEYS) as AvatarOtherProps;
  const _statusProps = pick(props, AVATAR_STATUS_KEYS) as AvatarStatusProps;
  return { _imageProps, _basicProps, _otherProps, _statusProps };
};
