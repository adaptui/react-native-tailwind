import React from "react";

import { Touchable, TouchableProps } from "../../primitives";
import { useTheme } from "../../theme";

import { InputProps } from "./Input";

interface InputPrefixProps
  extends Pick<InputProps, "size" | "variant">,
    TouchableProps {}

export const InputPrefix: React.FC<InputPrefixProps> = ({
  size,
  variant,
  ...props
}) => {
  const tailwind = useTheme();
  const inputTheme = useTheme("input");

  return (
    <Touchable
      style={[
        tailwind.style(
          inputTheme.prefixWrapper,
          inputTheme.size[size]?.prefix,
          inputTheme.variant[variant]?.prefix?.common,
        ),
      ]}
      {...props}
    >
      {props.children}
    </Touchable>
  );
};
