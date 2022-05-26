import React from 'react';
import { Box, BoxProps } from '../../primitives';
import { useTheme } from '../../theme';
import { createIcon } from '../create-icon';
import { Icon } from '../icon';
import { SelectProps } from './Select';

interface SelectPrefixProps
  extends Pick<
      SelectProps,
      'size' | 'variant' | 'disabled' | 'invalid' | 'prefix'
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
  const selectPrefixStyles = useTheme('select');
  const _prefix: SelectProps['prefix'] = React.useMemo(() => {
    const selectPrefix =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      prefix?.type === Icon
        ? createIcon({
            icon: prefix,
            iconSize: selectPrefixStyles.base.icon.size[size],
            iconFill: tailwind.getColor(
              invalid
                ? selectPrefixStyles.prefix.variant[variant].invalid
                : disabled
                ? selectPrefixStyles.prefix.variant[variant].disabled
                : isPressedOrHovered
                ? selectPrefixStyles.prefix.variant[variant].pressedOrHovered
                : selectPrefixStyles.prefix.variant[variant].default
            ),
            iconStyle: tailwind.style(
              selectPrefixStyles.prefix.variant[variant].common
            ),
          })
        : prefix;
    return selectPrefix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, invalid, prefix, isPressedOrHovered]);
  return (
    <Box
      style={tailwind.style(
        selectPrefixStyles.prefix.common,
        selectPrefixStyles.prefix.size[size],
        selectPrefixStyles.prefix.variant[variant].common
      )}
      {...props}
    >
      {_prefix}
    </Box>
  );
};
