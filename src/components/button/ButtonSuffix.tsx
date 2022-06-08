import React from "react";

import { Box } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";

import { ButtonSizes } from "./buttonTypes";

export interface ButtonSuffixProps {
  size: ButtonSizes;
}

export const ButtonSuffix: React.FC<ButtonSuffixProps> = ({
  size,
  ...props
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");

  return (
    <Box style={[tailwind.style(cx(buttonTheme.suffix[size]))]}>
      {props.children}
    </Box>
  );
};
