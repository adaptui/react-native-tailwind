import React from "react";

import { UpDownArrow } from "../../icons";
import { Box, BoxProps } from "../../primitives";
import { useTailwind, useTheme } from "../../theme";
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
  isDefaultState: boolean;
}

export const SelectSuffix: React.FC<SelectSuffixProps> = ({
  size,
  variant,
  invalid,
  disabled,
  isPressedOrHovered,
  suffix,
  isDefaultState,
  ...props
}) => {
  const { ts, gc } = useTailwind();
  const selectSuffixStyles = useTheme("select");

  // Icon Stroke Color based on Select State
  const iconColor = isPressedOrHovered
    ? selectSuffixStyles.suffix.variant[variant].pressedOrHovered
    : disabled
    ? selectSuffixStyles.suffix.variant[variant].disabled
    : invalid
    ? selectSuffixStyles.suffix.variant[variant].invalid
    : isDefaultState
    ? selectSuffixStyles.suffix.variant[variant].default
    : selectSuffixStyles.suffix.variant[variant].filled;

  const _suffix: SelectProps["suffix"] = React.useMemo(() => {
    const selectSuffix =
      // @ts-ignore
      suffix?.type === Icon
        ? createIcon({
            icon: suffix,
            iconSize: selectSuffixStyles.base.icon.size[size],
            iconFill: gc(iconColor),
          })
        : suffix;
    return selectSuffix as React.ReactNode;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, invalid, suffix, isPressedOrHovered]);

  return (
    <Box
      style={ts([
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
          color={gc(iconColor)}
        />
      )}
    </Box>
  );
};
