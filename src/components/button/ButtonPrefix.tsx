import React from "react";

import { Box } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
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
  const { ts } = useTailwind();
  const buttonTheme = useTheme("button");

  return <Box style={[ts(cx(buttonTheme.size[size]?.prefix))]}>{children}</Box>;
};
