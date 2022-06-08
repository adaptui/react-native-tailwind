import { ImageProps, ImageSourcePropType } from "react-native";

import { BoxProps } from "../../primitives";

export type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type AvatarStatusType = "active" | "away" | "sleep" | "typing" | null;

export interface AvatarImageBasicProps {
  imageProps: Omit<ImageProps, "source">;
  src: ImageSourcePropType;
  size: AvatarSizes;
}

export interface AvatarBasicProps {
  size: AvatarSizes;
  squared: boolean;
}

export type AvatarImageProps = AvatarImageBasicProps &
  Pick<AvatarBasicProps, "squared">;

export interface AvatarStatusProps {
  status: AvatarStatusType;
  parentsBackground: string;
  size: AvatarSizes;
}

export interface AvatarOtherProps extends BoxProps {
  name: string;
}

export interface AvatarProps
  extends AvatarBasicProps,
    AvatarImageBasicProps,
    AvatarStatusProps,
    AvatarOtherProps {}
