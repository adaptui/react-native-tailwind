import React from "react";

import { Touchable, TouchableProps } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
import { cx } from "../../utils";

import { TextAreaProps } from "./TextArea";

interface InputSuffixProps
  extends Pick<TextAreaProps, "size" | "variant">,
    TouchableProps {}

export const TextAreaSuffix: React.FC<InputSuffixProps> = ({
  size,
  variant,
  ...props
}) => {
  const { ts } = useTailwind();
  const inputTheme = useTheme("textArea");

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
