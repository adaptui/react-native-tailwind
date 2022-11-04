import React from "react";
import { Image } from "react-native";

import { useTheme } from "../../theme";
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
  const tailwind = useTheme();
  const avatarTheme = useTheme("avatar");
  return (
    <Image
      source={src}
      style={[
        avatarTheme.borderRadius.size[size],
        tailwind.style(
          cx(avatarTheme.image, !squared ? avatarTheme.circular : ""),
        ),
      ]}
      onError={handleFallback}
      {...imageProps}
    />
  );
};
