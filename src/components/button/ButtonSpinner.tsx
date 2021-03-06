import React, { isValidElement } from "react";

import { Box } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";
import { Spinner, SpinnerSizes } from "../spinner";

import { ButtonProps } from "./buttonTypes";

interface ButtonSpinnerProps
  extends Required<
      Pick<ButtonProps, "size" | "themeColor" | "variant" | "spinner">
    >,
    Partial<Pick<ButtonProps, "prefix" | "suffix">> {}

interface ButtonFullWidthSpinnerProps
  extends Required<
    Pick<ButtonProps, "size" | "themeColor" | "variant" | "spinner">
  > {}

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
  size,
  variant,
  themeColor,
  spinner,
  prefix,
  suffix,
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");

  return isValidElement(spinner) ? (
    React.cloneElement(spinner, {
      size: (prefix || suffix
        ? spinnerSizes[size]?.spinner
        : spinnerSizes[size]?.iconOnly) as SpinnerSizes,
    })
  ) : (
    <Spinner
      size={
        (prefix || suffix
          ? spinnerSizes[size]?.spinner
          : spinnerSizes[size]?.iconOnly) as SpinnerSizes
      }
      style={tailwind.style(
        cx(buttonTheme.themeColor[themeColor]?.[variant]?.spinner?.disabled),
      )}
    />
  );
};

export const ButtonFullWidthSpinner: React.FC<ButtonFullWidthSpinnerProps> = ({
  spinner,
  themeColor,
  size,
  variant,
  children,
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");

  return (
    <>
      <Box style={tailwind.style(cx(buttonTheme.loading.wrapper))}>
        <ButtonSpinner
          spinner={spinner}
          size={size}
          themeColor={themeColor}
          variant={variant}
        />
      </Box>
      <Box style={[tailwind.style(buttonTheme.loading.children)]}>
        {children}
      </Box>
    </>
  );
};
