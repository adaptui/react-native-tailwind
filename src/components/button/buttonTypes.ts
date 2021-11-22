import { PressableProps } from 'react-native';

export type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariants = 'outline' | 'ghost' | 'solid' | 'subtle';

export interface ButtonBasicProps {
  loading: boolean;
}

export interface ButtonThemeProps {
  size: ButtonSizes;
  variant: ButtonVariants;
}

export interface ButtonProps
  extends ButtonBasicProps,
    ButtonThemeProps,
    PressableProps {}
