import React from "react";

import { Touchable, TouchableProps } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
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
  const { ts } = useTailwind();
  const inputTheme = useTheme("input");

  return (
    <Touchable
      focusable={false}
      style={[
        ts(
          cx(
            inputTheme.suffixWrapper,
            inputTheme.size[size]?.suffix,
            inputTheme.variant[variant]?.default?.suffix,
          ),
        ),
      ]}
      {...props}
    >
      {props.children}
    </Touchable>
  );
};
