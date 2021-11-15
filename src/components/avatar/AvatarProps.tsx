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
  let _props = { ...props };
  const avatarGroupProps = useAvatarGroup();
  if (!_props.size) {
    _props = { ..._props, size: avatarGroupProps.size || 'xl' };
  }
  if (!_props.circular) {
    _props = {
      ..._props,
      circular: avatarGroupProps && avatarGroupProps.circular,
    };
  }
  const _imageProps = pick(_props, AVATAR_IMAGE_KEYS) as AvatarImageProps;
  const _basicProps = pick(_props, AVATAR_BASIC_KEYS) as AvatarBasicProps;
  const _otherProps = pick(_props, AVATAR_OTHER_KEYS) as AvatarOtherProps;
  const _statusProps = pick(_props, AVATAR_STATUS_KEYS) as AvatarStatusProps;
  return { _imageProps, _basicProps, _otherProps, _statusProps };
};
