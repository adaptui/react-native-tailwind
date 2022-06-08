import React from "react";
import { isUndefined } from "lodash";

import { useAvatarGroup } from "../avatar-group/AvatarGroup";

import {
  AvatarBasicProps,
  AvatarImageProps,
  AvatarOtherProps,
  AvatarProps,
  AvatarStatusProps,
} from "./avatarPropTypes";

interface AvatarPropsReturnType {
  _imageProps: AvatarImageProps;
  _basicProps: AvatarBasicProps;
  _otherProps: AvatarOtherProps;
  _statusProps: AvatarStatusProps;
}

export const useAvatarProps = ({
  imageProps,
  size,
  src,
  squared = false,
  status,
  parentsBackground,
  name,
  ...props
}: React.PropsWithChildren<Partial<AvatarProps>>): AvatarPropsReturnType => {
  const avatarGroupProps = useAvatarGroup();
  const isSquared = isUndefined(avatarGroupProps)
    ? squared
    : avatarGroupProps.squared;
  const avatarSize = avatarGroupProps?.size || size || "xl";
  const _imageProps = {
    imageProps,
    src,
    size: avatarSize,
    squared: isSquared,
  } as AvatarImageProps;

  const _basicProps = {
    size: avatarSize,
    squared: isSquared,
    name,
  } as AvatarBasicProps;

  const _statusProps = {
    size: avatarSize,
    status,
    parentsBackground,
  } as AvatarStatusProps;

  const _otherProps = { name, ...props } as AvatarOtherProps;
  return { _imageProps, _basicProps, _otherProps, _statusProps };
};
