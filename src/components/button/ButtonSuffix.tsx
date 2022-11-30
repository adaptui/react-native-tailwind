import React from "react";

import { Box } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";

import { ButtonSizes } from "./Button";

export interface ButtonSuffixProps {
  size: ButtonSizes;
  children: React.ReactNode;
}

export const ButtonSuffix: React.FC<ButtonSuffixProps> = ({
  size,
  children,
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");

  return (
    <Box style={[tailwind.style(cx(buttonTheme.size[size]?.suffix))]}>
      {children}
    </Box>
  );
};
