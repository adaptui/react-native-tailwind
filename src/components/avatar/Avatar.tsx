import React, { forwardRef, useState } from "react";

import { DefaultUser } from "../../icons";
import { Box, Text } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, styleAdapter } from "../../utils";
import { Icon } from "../icon";

import { AvatarImage } from "./AvatarImage";
import { useAvatarProps } from "./AvatarProps";
import type { AvatarProps, AvatarSizes } from "./avatarPropTypes";
import { AvatarStatus } from "./AvatarStatus";

function getInitials(name: string, size: AvatarSizes) {
  if (!name) {
    return;
  }
  const [firstName, lastName] = name.split(" ");
  const oneLetterInitialSizes = ["xs", "sm", "md"];

  const initials =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : `${firstName.charAt(0)}${firstName.charAt(1)}`;

  return oneLetterInitialSizes.includes(size)
    ? initials.toUpperCase().charAt(0)
    : initials.toUpperCase();
}

const RNAvatar: React.FC<Partial<AvatarProps>> = forwardRef<
  typeof Box,
  Partial<AvatarProps>
>((props, ref) => {
  const tailwind = useTheme();
  const avatarTheme = useTheme("avatar");
  const { _imageProps, _basicProps, _otherProps, _statusProps } =
    useAvatarProps(props);
  const { name, style, ...boxProps } = _otherProps;
  const isSourceAvailable = React.useMemo(
    () => (_imageProps?.src ? true : false),
    [_imageProps?.src],
  );
  const [imageAvailable, setImageAvailable] = useState(isSourceAvailable);
  const loadFallback = () => setImageAvailable(false);

  return (
    <Box
      style={[
        avatarTheme.borderRadius.size[_basicProps.size],
        tailwind.style(
          cx(
            avatarTheme.base,
            avatarTheme.size[_basicProps.size],
            !_basicProps.squared ? avatarTheme.circular : "",
          ),
        ),
        styleAdapter(
          style,
          {
            pressed: false,
          },
          false,
        ),
      ]}
      ref={ref}
      {...boxProps}
    >
      {imageAvailable && _imageProps.src ? (
        <AvatarImage {..._imageProps} handleFallback={loadFallback} />
      ) : name ? (
        <Text
          style={tailwind.style(
            cx(
              avatarTheme.initials.base,
              avatarTheme.initials.size[_basicProps.size],
            ),
          )}
          adjustsFontSizeToFit
          allowFontScaling={false}
        >
          {getInitials(name, _basicProps.size)}
        </Text>
      ) : (
        <Icon
          icon={<DefaultUser />}
          style={tailwind.style(
            cx(avatarTheme.defaultUserIcon[_basicProps.size]),
          )}
          color={tailwind.getColor("text-gray-800")}
        />
      )}
      {_statusProps.status && <AvatarStatus {..._statusProps} />}
    </Box>
  );
});

RNAvatar.displayName = "RNAvatar";

export const Avatar = createComponent<Partial<AvatarProps>>(RNAvatar, {
  shouldMemo: true,
});
