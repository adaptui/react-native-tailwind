import React from "react";

import { UpDownArrow } from "../../icons";
import { Box, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
import { Icon } from "../icon";

import { SelectProps } from "./Select";

interface SelectSuffixProps
  extends Pick<SelectProps, "size" | "variant" | "disabled" | "invalid">,
    BoxProps {
  isPressedOrHovered: boolean;
}

export const SelectSuffix: React.FC<SelectSuffixProps> = ({
  size,
  variant,
  invalid,
  disabled,
  isPressedOrHovered,
  ...props
}) => {
  const tailwind = useTheme();
  const selectSuffixStyles = useTheme("select");

  // Icon Stroke Color based on Select State
  const iconColor = isPressedOrHovered
    ? selectSuffixStyles.suffix.variant[variant].pressedOrHovered
    : disabled
    ? selectSuffixStyles.suffix.variant[variant].disabled
    : invalid
    ? selectSuffixStyles.suffix.variant[variant].invalid
    : selectSuffixStyles.suffix.variant[variant].default;

  return (
    <Box
      style={tailwind.style([
        selectSuffixStyles.suffix.default,
        selectSuffixStyles.suffix.size[size],
        selectSuffixStyles.prefix.variant[variant].wrapper,
      ])}
      {...props}
    >
      <Icon
        icon={<UpDownArrow />}
        size={selectSuffixStyles.base.icon.size[size]}
        color={tailwind.getColor(iconColor)}
      />
    </Box>
  );
};
