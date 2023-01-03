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
    ? selectPrefixStyles.prefix.variant[variant].pressedOrHovered
    : disabled
    ? selectPrefixStyles.prefix.variant[variant].disabled
    : invalid
    ? selectPrefixStyles.prefix.variant[variant].invalid
    : isDefaultState
    ? selectPrefixStyles.suffix.variant[variant].default
    : selectPrefixStyles.suffix.variant[variant].filled;

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
        selectPrefixStyles.prefix.default,
        selectPrefixStyles.prefix.size[size],
        selectPrefixStyles.prefix.variant[variant].wrapper,
      )}
      {...props}
    >
      {_prefix as React.ReactNode}
    </Box>
  );
};
