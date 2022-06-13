import React, { isValidElement } from "react";

import { useTheme } from "../../theme";
import { cx, RenderPropType } from "../../utils";
import { Spinner, SpinnerSizes } from "../spinner";

import { ButtonProps } from "./buttonTypes";

interface ButtonSpinnerProps
  extends Pick<ButtonProps, "size" | "themeColor" | "variant" | "disabled"> {
  spinner?: RenderPropType;
  iconOnly?: boolean;
}

const spinnerSizes = {
  sm: {
    spinner: "xs",
    iconOnly: "md",
  },
  md: {
    spinner: "xs",
    iconOnly: "md",
  },
  lg: {
    spinner: "xs",
    iconOnly: "md",
  },
  xl: {
    spinner: "md",
    iconOnly: "lg",
  },
};

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({
  spinner,
  themeColor,
  size,
  variant,
  iconOnly = false,
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");

  return isValidElement(spinner) ? (
    React.cloneElement(spinner, {
      size: (iconOnly
        ? spinnerSizes[size]?.iconOnly
        : spinnerSizes[size]?.spinner) as SpinnerSizes,
    })
  ) : (
    <Spinner
      size={
        (iconOnly
          ? spinnerSizes[size]?.iconOnly
          : spinnerSizes[size]?.spinner) as SpinnerSizes
      }
      style={tailwind.style(
        cx(buttonTheme.themeColor[themeColor]?.[variant]?.spinner.disabled),
      )}
    />
  );
};
