import React from "react";

import { Box } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
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
  const { ts } = useTailwind();
  const buttonTheme = useTheme("button");

  return <Box style={[ts(cx(buttonTheme.size[size]?.suffix))]}>{children}</Box>;
};
