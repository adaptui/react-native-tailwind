import React from "react";

import { Box, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
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
}

export const SelectPrefix: React.FC<SelectPrefixProps> = ({
  size,
  variant,
  invalid,
  disabled,
  isPressedOrHovered,
  prefix,
  ...props
}) => {
  const tailwind = useTheme();
  const selectPrefixStyles = useTheme("select");

  // Icon Stroke Color based on Select State
  const iconColor = isPressedOrHovered
    ? selectPrefixStyles.prefix.variant[variant].pressedOrHovered
    : disabled
    ? selectPrefixStyles.prefix.variant[variant].disabled
    : invalid
    ? selectPrefixStyles.prefix.variant[variant].invalid
    : selectPrefixStyles.prefix.variant[variant].default;

  const _prefix: SelectProps["prefix"] = React.useMemo(() => {
    const selectPrefix =
      // @ts-ignore
      prefix?.type === Icon
        ? createIcon({
            icon: prefix,
            iconSize: selectPrefixStyles.base.icon.size[size],
            iconFill: tailwind.getColor(iconColor),
          })
        : prefix;
    return selectPrefix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, invalid, prefix, isPressedOrHovered]);

  return (
    <Box
      style={tailwind.style(
        selectPrefixStyles.prefix.default,
        selectPrefixStyles.prefix.size[size],
        selectPrefixStyles.prefix.variant[variant].wrapper,
      )}
      {...props}
    >
      {_prefix}
    </Box>
  );
};
