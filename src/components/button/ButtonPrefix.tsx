import React from "react";

import { Box } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";

import { ButtonSizes } from "./Button";

export interface ButtonPrefixProps {
  size: ButtonSizes;
  children: React.ReactNode;
}

export const ButtonPrefix: React.FC<ButtonPrefixProps> = ({
  size,
  children,
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");

  return (
    <Box style={[tailwind.style(cx(buttonTheme.size[size]?.prefix))]}>
      {children}
    </Box>
  );
};
