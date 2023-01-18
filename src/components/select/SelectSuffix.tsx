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
    ? selectSuffixStyles.base.variant[variant].suffix.pressedOrHovered
    : disabled
    ? selectSuffixStyles.base.variant[variant].suffix.disabled
    : invalid
    ? selectSuffixStyles.base.variant[variant].suffix.invalid
    : isDefaultState
    ? selectSuffixStyles.base.variant[variant].suffix.default
    : selectSuffixStyles.base.variant[variant].suffix.filled;

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
        selectSuffixStyles.suffixWrapper,
        selectSuffixStyles.base.size[size].suffix,
        selectSuffixStyles.base.variant[variant].suffix.wrapper,
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
