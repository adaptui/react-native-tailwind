import React from "react";

import { Touchable, TouchableProps } from "../../primitives";
import { useTheme } from "../../theme";
import { cx } from "../../utils";

import { InputProps } from "./Input";

interface InputSuffixProps
  extends Pick<InputProps, "size" | "variant">,
    TouchableProps {}

export const InputSuffix: React.FC<InputSuffixProps> = ({
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
          cx(
            inputTheme.suffixWrapper,
            inputTheme.size[size]?.suffix,
            inputTheme.variant[variant]?.suffix?.common,
          ),
        ),
      ]}
      {...props}
    >
      {props.children}
    </Touchable>
  );
};
