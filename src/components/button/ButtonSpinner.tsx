import { isValidElement } from 'react';
import React from 'react';
import {
  RenderPropType,
  Spinner,
  SpinnerSizes,
  useTheme,
} from 'react-native-system';
import { ButtonSizes } from './buttonTypes';

interface ButtonSpinnerProps {
  size: ButtonSizes;
  spinner?: RenderPropType;
}
export const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({
  spinner,
  size,
}) => {
  const buttonTheme = useTheme('button');
  const tailwind = useTheme();
  return isValidElement(spinner) ? (
    React.cloneElement(spinner, {
      size: buttonTheme.loading.size[size] as SpinnerSizes,
    })
  ) : (
    <Spinner
      size={buttonTheme.loading.size[size] as SpinnerSizes}
      style={tailwind.style(buttonTheme.loading.default)}
    />
  );
};
