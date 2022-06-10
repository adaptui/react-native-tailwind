import React, { isValidElement } from "react";

import { useTheme } from "../../theme";
import { cx, RenderPropType } from "../../utils";
import { Spinner, SpinnerSizes } from "../spinner";

import { ButtonProps } from "./buttonTypes";

interface ButtonSpinnerProps extends Pick<ButtonProps, "size" | "themeColor"> {
  spinner?: RenderPropType;
}
export const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({
  spinner,
  themeColor,
  size,
}) => {
  const buttonTheme = useTheme("button");
  const tailwind = useTheme();
  return isValidElement(spinner) ? (
    React.cloneElement(spinner, {
      size: buttonTheme.loading.size[size] as SpinnerSizes,
    })
  ) : (
    <Spinner
      size={buttonTheme.loading.size[size] as SpinnerSizes}
      style={tailwind.style(cx(buttonTheme.loading.themeColor[themeColor]))}
    />
  );
};
