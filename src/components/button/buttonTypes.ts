import { PressableProps, TextStyle } from "react-native";

import { RenderPropType } from "../../index";

export type ButtonSizes = "sm" | "md" | "lg" | "xl";
export type ButtonVariants = "outline" | "ghost" | "solid" | "subtle";
export type ButtonTheme =
  | "base"
  | "primary"
  | "secondary"
  | "success"
  | "danger";
export interface ButtonLibraryProps {
  size: ButtonSizes;
  variant: ButtonVariants;
  themeColor: ButtonTheme;
}

export interface ButtonOptionProps {
  suffix: RenderPropType;
  prefix: RenderPropType;
  loading: boolean;
  iconOnly: RenderPropType;
  spinner: RenderPropType;
  textStyle: TextStyle;
}

export interface ButtonProps
  extends ButtonLibraryProps,
    ButtonOptionProps,
    PressableProps {
  accesibilityLabel: string;
}
