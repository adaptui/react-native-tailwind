import React from 'react';
import { Box, BoxProps } from '../../primitives';
import { useTheme } from '../../theme';
import { InputProps } from './Input';

interface InputSuffixProps
  extends Pick<InputProps, 'size' | 'variant'>,
    BoxProps {}

export const InputSuffix: React.FC<InputSuffixProps> = ({
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
          inputTheme.suffix.common,
          inputTheme.suffix.size[size],
          inputTheme.suffix.variant[variant].common
        ),
      ]}
      {...props}
    >
      {props.children}
    </Box>
  );
};
