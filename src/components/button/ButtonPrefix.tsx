import { Box, useTheme } from 'react-native-system';
import React from 'react';
import { ButtonSizes } from './buttonTypes';

export interface ButtonPrefixProps {
  size: ButtonSizes;
}

export const ButtonPrefix: React.FC<ButtonPrefixProps> = ({
  size,
  ...props
}) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme('button');

  return (
    <Box style={[tailwind.style(buttonTheme.prefix[size])]}>
      {props.children}
    </Box>
  );
};
