import React, { forwardRef, useState } from "react";
import { ImageProps, ImageSourcePropType } from "react-native";

import { DefaultUser } from "../../icons";
import { Box, BoxProps, Text } from "../../primitives";
import { getTextFontFamily, useTailwind, useTheme } from "../../theme";
import { createComponent, cx, isUndefined, styleAdapter } from "../../utils";
import { useAvatarGroup } from "../avatar-group";
import { Icon } from "../icon";

import { AvatarImage } from "./AvatarImage";
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

export type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type AvatarStatusType = "active" | "away" | "sleep" | "typing";

export interface AvatarProps extends BoxProps {
  /**
   * React Native Image component Props, except for source
   */
  imageProps: Omit<ImageProps, "source">;
  /**
   * The image source (either a remote URL or a local file resource).
   * Check https://reactnative.dev/docs/image#imagesource
   */
  src: ImageSourcePropType;
  /**
   * How large should avatar be?
   *
   * @default xl
   */
  size: AvatarSizes;
  /**
   * If `true`, Avatar looks like a squared.
   *
   * @default false
   */
  squared: boolean;
  /**
   * Name prop used for `alt` & calculate placeholder initials.
   */
  name: string;
  /**
   * Shows AvatarBadge with the given type
   *
   * @default none
   */
  status: AvatarStatusType;
  /**
   * StatusIndicator's Background Color & StatusIndicator Ring Color.
   *
   * @default "text-white-900"
   */
  parentsBackground: string;
}

const RNAvatar: React.FC<Partial<AvatarProps>> = forwardRef<
  typeof Box,
  Partial<AvatarProps>
>((props, ref) => {
  const { ts, gc } = useTailwind();
  const avatarTheme = useTheme("avatar");

  const avatarGroupProps = useAvatarGroup();

  const {
    size = avatarGroupProps?.size || "xl",
    squared = false,
    name,
    style,
    src,
    status,
    parentsBackground = "text-white-900",
    imageProps = {},
    ...boxProps
  } = props;

  const isSquared = isUndefined(avatarGroupProps)
    ? squared
    : avatarGroupProps.squared;

  const isSourceAvailable = React.useMemo(() => (src ? true : false), [src]);
  const [imageAvailable, setImageAvailable] = useState(isSourceAvailable);
  const loadFallback = () => setImageAvailable(false);

  return (
    <Box
      style={[
        avatarTheme.borderRadius.size[size],
        ts(
          cx(
            avatarTheme.base,
            avatarTheme.size[size],
            !isSquared ? avatarTheme.circular : "",
          ),
        ),
        styleAdapter(style),
      ]}
      ref={ref}
      {...boxProps}
    >
      {imageAvailable && src ? (
        <AvatarImage
          size={size}
          imageProps={imageProps}
          src={src}
          squared={isSquared}
          handleFallback={loadFallback}
        />
      ) : name ? (
        <Text
          style={ts(
            cx(avatarTheme.initials.base, avatarTheme.initials.size[size]),
            getTextFontFamily(avatarTheme.initials.base),
          )}
          adjustsFontSizeToFit
          allowFontScaling={false}
        >
          {getInitials(name, size)}
        </Text>
      ) : (
        <Icon
          icon={<DefaultUser />}
          style={ts(cx(avatarTheme.defaultUserIcon[size]))}
          color={gc("text-gray-800")}
        />
      )}
      {status && (
        <AvatarStatus
          parentsBackground={parentsBackground}
          size={size}
          status={status}
        />
      )}
    </Box>
  );
});

RNAvatar.displayName = "RNAvatar";

export const Avatar = createComponent<Partial<AvatarProps>>(RNAvatar, {
  shouldMemo: true,
});
