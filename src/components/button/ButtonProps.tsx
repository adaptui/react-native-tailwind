import { PressableProps } from "react-native";

import {
  ButtonLibraryProps,
  ButtonOptionProps,
  ButtonProps,
} from "./buttonTypes";

interface ButtonPropsReturnType {
  _buttonProps: ButtonLibraryProps;
  _buttonOptions: ButtonOptionProps;
  _buttonPressableProps: PressableProps;
}

export const useButtonProps = ({
  size = "md",
  variant = "solid",
  themeColor = "base",
  loading,
  disabled,
  prefix,
  suffix,
  iconOnly,
  spinner,
  textStyle,
  ...otherProps
}: React.PropsWithChildren<Partial<ButtonProps>>): ButtonPropsReturnType => {
  const _buttonBasicProps = {
    disabled,
    loading,
    size,
    variant,
    themeColor,
  } as ButtonLibraryProps;

  const _buttonOptionProps = {
    prefix,
    suffix,
    iconOnly,
    spinner,
    loading,
    textStyle,
  } as ButtonOptionProps;

  const _buttonPressableProps = otherProps;

  return {
    _buttonProps: _buttonBasicProps,
    _buttonOptions: _buttonOptionProps,
    _buttonPressableProps,
  };
};
