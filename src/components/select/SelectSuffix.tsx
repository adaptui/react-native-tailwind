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
  const iconColor = invalid
    ? selectSuffixStyles.suffix.variant[variant].invalid
    : disabled
    ? selectSuffixStyles.suffix.variant[variant].disabled
    : isPressedOrHovered
    ? selectSuffixStyles.suffix.variant[variant].pressedOrHovered
    : selectSuffixStyles.suffix.variant[variant].default;
  return (
    <Box
      style={tailwind.style([
        selectSuffixStyles.suffix.common,
        selectSuffixStyles.suffix.size[size],
        selectSuffixStyles.suffix.variant[variant].common,
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
