import { PressableProps, TextStyle } from 'react-native';
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
  icon: RenderPropType;
  spinner: RenderPropType;
  textStyle: TextStyle;
}

export interface ButtonProps
  extends ButtonLibraryProps,
    ButtonOptionProps,
    PressableProps {}
