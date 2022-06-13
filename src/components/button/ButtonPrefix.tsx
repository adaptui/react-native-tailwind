import React from "react";

import { Box } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";

import { ButtonSizes } from "./buttonTypes";

export interface ButtonPrefixProps {
  size: ButtonSizes;
}

export const ButtonPrefix: React.FC<ButtonPrefixProps> = ({
  size,
  ...props
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");

  return (
    <Box style={[tailwind.style(cx(buttonTheme.size[size]?.prefix))]}>
      {props.children}
    </Box>
  );
};
