import React from 'react';
import { Box, BoxProps } from '../../primitives';
import { useTheme } from '../../theme';
import { InputProps } from './Input';

interface InputPrefixProps
  extends Pick<InputProps, 'size' | 'variant'>,
    BoxProps {}

export const InputPrefix: React.FC<InputPrefixProps> = ({
  size,
  variant,
  ...props
}) => {
  const tailwind = useTheme();
  const inputTheme = useTheme('input');

  return (
    <Box
      style={[
        tailwind.style(
          inputTheme.prefix.common,
          inputTheme.prefix.size[size],
          inputTheme.prefix.variant[variant].common
        ),
      ]}
      {...props}
    >
      {props.children}
    </Box>
  );
};
