import { ImageProps, ImageSourcePropType } from 'react-native';

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type AvatarStatusType = 'active' | 'away' | 'sleep' | 'typing' | null;

export interface AvatarImageBasicProps {
  imageProps: Omit<ImageProps, 'source'>;
  src: ImageSourcePropType;
  handleFallback: () => void;
  size: AvatarSizes;
}

export interface AvatarBasicProps {
  size: AvatarSizes;
  circular: boolean;
}

export type AvatarImageProps = AvatarImageBasicProps &
  Pick<AvatarBasicProps, 'circular'>;

export interface AvatarStatusProps {
  status: AvatarStatusType;
  parentsBackground: string;
  size: AvatarSizes;
}

export interface AvatarOtherProps {
  name: string;
}

export interface AvatarProps
  extends AvatarBasicProps,
    AvatarImageBasicProps,
    AvatarStatusProps,
    AvatarOtherProps {}
