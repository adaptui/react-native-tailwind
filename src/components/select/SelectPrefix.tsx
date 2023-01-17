import React from "react";

import { Box, BoxProps } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { SelectProps } from "./Select";

interface SelectPrefixProps
  extends Pick<
      SelectProps,
      "size" | "variant" | "disabled" | "invalid" | "prefix"
    >,
    BoxProps {
  isPressedOrHovered: boolean;
  isDefaultState: boolean;
}

export const SelectPrefix: React.FC<SelectPrefixProps> = ({
  size,
  variant,
  invalid,
  disabled,
  isPressedOrHovered,
  prefix,
  isDefaultState,
  ...props
}) => {
  const { ts, gc } = useTailwind();
  const selectPrefixStyles = useTheme("select");

  // Icon Stroke Color based on Select State
  const iconColor = isPressedOrHovered
    ? selectPrefixStyles.base.variant[variant].prefix.pressedOrHovered
    : disabled
    ? selectPrefixStyles.base.variant[variant].prefix.disabled
    : invalid
    ? selectPrefixStyles.base.variant[variant].prefix.invalid
    : isDefaultState
    ? selectPrefixStyles.base.variant[variant].suffix.default
    : selectPrefixStyles.base.variant[variant].suffix.filled;

  const _prefix: SelectProps["prefix"] = React.useMemo(() => {
    const selectPrefix =
      // @ts-ignore
      prefix?.type === Icon
        ? createIcon({
            icon: prefix,
            iconSize: selectPrefixStyles.base.icon.size[size],
            iconFill: gc(iconColor),
          })
        : prefix;
    return selectPrefix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, invalid, prefix, isPressedOrHovered]);

  return (
    <Box
      style={ts(
        selectPrefixStyles.prefixWrapper,
        selectPrefixStyles.base.size[size].prefix,
        selectPrefixStyles.base.variant[variant].prefix.wrapper,
      )}
      {...props}
    >
      {_prefix as React.ReactNode}
    </Box>
  );
};
