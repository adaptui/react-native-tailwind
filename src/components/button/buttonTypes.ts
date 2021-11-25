import { PressableProps } from 'react-native';
import { RenderPropType } from 'react-native-system';

export type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariants = 'outline' | 'ghost' | 'solid' | 'subtle';

export interface ButtonLibraryProps {
  size: ButtonSizes;
  variant: ButtonVariants;
}

export interface ButtonOptionProps {
  suffix: RenderPropType;
  prefix: RenderPropType;
  loading: boolean;
}

export interface ButtonProps
  extends ButtonLibraryProps,
    ButtonOptionProps,
    PressableProps {}
