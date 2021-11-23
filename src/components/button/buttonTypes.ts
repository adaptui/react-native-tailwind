import { PressableProps } from 'react-native';
import { RenderPropType } from 'react-native-system';

export type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariants = 'outline' | 'ghost' | 'solid' | 'subtle';

export interface ButtonBasicProps {
  loading: boolean;
}

export interface ButtonLibraryProps {
  size: ButtonSizes;
  variant: ButtonVariants;
}

export interface ButtonOptionProps {
  suffix: RenderPropType;
  prefix: RenderPropType;
}

export interface ButtonProps
  extends ButtonBasicProps,
    ButtonLibraryProps,
    ButtonOptionProps,
    PressableProps {}
