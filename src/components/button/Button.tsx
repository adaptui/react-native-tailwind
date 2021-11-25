import React from 'react';
import { Pressable } from 'react-native';
import {
  Box,
  Spinner,
  SpinnerSizes,
  Text,
  useTheme,
} from 'react-native-system';
import { useButtonProps } from './ButtonProps';
import { ButtonProps } from './buttonTypes';

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme('button');
  const { _buttonProps, _buttonOptions } = useButtonProps(props);
  const iconAspectRatio = 1;
  const isButtonDisabled = props.disabled || props.loading;
  return (
    <Pressable
      style={({ pressed }) => [
        tailwind.style(
          buttonTheme.base,
          buttonTheme.size.default[_buttonProps.size],
          buttonTheme.variant.default[_buttonProps.variant],
          isButtonDisabled
            ? buttonTheme.variant.disabled[_buttonProps.variant]
            : '',
          pressed ? buttonTheme.variant.pressed[_buttonProps.variant] : ''
        ),
      ]}
      {...props}
    >
      {_buttonOptions.loading ? (
        <Spinner
          size={buttonTheme.loading.size[_buttonProps.size] as SpinnerSizes}
        />
      ) : (
        <>
          {_buttonOptions.prefix && (
            <Box
              style={[
                tailwind.style(buttonTheme.prefix[_buttonProps.size]),
                { aspectRatio: iconAspectRatio },
              ]}
            >
              {/* @ts-ignore */}
              {React.cloneElement(_buttonOptions.prefix, {
                stroke: tailwind.getColor(
                  isButtonDisabled
                    ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                    : buttonTheme.icon.variant.default[_buttonProps.variant]
                ),
              })}
            </Box>
          )}
          {typeof props.children === 'string' ? (
            <Text
              adjustsFontSizeToFit
              allowFontScaling={false}
              style={[
                tailwind.style([
                  buttonTheme.text.size[_buttonProps.size],
                  buttonTheme.text.variant.default[_buttonProps.variant],
                  isButtonDisabled
                    ? buttonTheme.text.variant.disabled[_buttonProps.variant]
                    : '',
                ]),
              ]}
            >
              {props.children}
            </Text>
          ) : (
            props.children
          )}
          {_buttonOptions.suffix && (
            <Box
              style={[
                tailwind.style(buttonTheme.suffix[_buttonProps.size]),
                { aspectRatio: iconAspectRatio },
              ]}
            >
              {/* @ts-ignore */}
              {React.cloneElement(_buttonOptions.suffix, {
                stroke: tailwind.getColor(
                  isButtonDisabled
                    ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                    : buttonTheme.icon.variant.default[_buttonProps.variant]
                ),
              })}
            </Box>
          )}
        </>
      )}
    </Pressable>
  );
};
