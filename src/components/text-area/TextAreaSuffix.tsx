import React from "react";

import { Touchable, TouchableProps } from "../../primitives";
import { useTheme } from "../../theme";
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
  const tailwind = useTheme();
  const inputTheme = useTheme("textArea");

  return (
    <Touchable
      focusable={false}
      style={[
        tailwind.style(
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
