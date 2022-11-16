import React from "react";

import { UpDownArrow } from "../../icons";
import { Box, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { SelectProps } from "./Select";

interface SelectSuffixProps
  extends Pick<
      SelectProps,
      "size" | "variant" | "disabled" | "invalid" | "suffix"
    >,
    BoxProps {
  isPressedOrHovered: boolean;
}

export const SelectSuffix: React.FC<SelectSuffixProps> = ({
  size,
  variant,
  invalid,
  disabled,
  isPressedOrHovered,
  suffix,
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

  const _suffix: SelectProps["suffix"] = React.useMemo(() => {
    const selectSuffix =
      // @ts-ignore
      suffix?.type === Icon
        ? createIcon({
            icon: suffix,
            iconSize: selectSuffixStyles.base.icon.size[size],
            iconFill: tailwind.getColor(iconColor),
          })
        : suffix;
    return selectSuffix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, invalid, suffix, isPressedOrHovered]);

  return (
    <Box
      style={tailwind.style([
        selectSuffixStyles.suffix.default,
        selectSuffixStyles.suffix.size[size],
        selectSuffixStyles.suffix.variant[variant].wrapper,
      ])}
      {...props}
    >
      {_suffix ? (
        _suffix
      ) : (
        <Icon
          icon={<UpDownArrow />}
          size={selectSuffixStyles.base.icon.size[size]}
          color={tailwind.getColor(iconColor)}
        />
      )}
    </Box>
  );
};
