import React from "react";
import { Image } from "react-native";

import { useTailwind, useTheme } from "../../theme";
import { cx } from "../../utils";

import { AvatarProps } from "./Avatar";

interface AvatarImageProps
  extends Pick<AvatarProps, "imageProps" | "src" | "squared" | "size"> {
  handleFallback: () => void;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  imageProps,
  src,
  squared,
  size,
  handleFallback,
}) => {
  const { ts } = useTailwind();
  const avatarTheme = useTheme("avatar");
  return (
    <Image
      source={src}
      style={[
        avatarTheme.borderRadius.size[size],
        ts(cx(avatarTheme.image, !squared ? avatarTheme.circular : "")),
      ]}
      onError={handleFallback}
      {...imageProps}
    />
  );
};
