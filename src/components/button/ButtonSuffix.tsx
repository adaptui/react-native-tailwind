import { Box, useTheme } from 'react-native-system';
import React from 'react';
import { ButtonSizes } from './buttonTypes';

export interface ButtonSuffixProps {
  size: ButtonSizes;
}

export const ButtonSuffix: React.FC<ButtonSuffixProps> = ({
  size,
  ...props
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme('button');

  const iconAspectRatio = 1;

  return (
    <Box
      style={[
        tailwind.style(buttonTheme.suffix[size]),
        { aspectRatio: iconAspectRatio },
      ]}
    >
      {props.children}
    </Box>
  );
};
