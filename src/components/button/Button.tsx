import React from 'react';
import { Pressable } from 'react-native';
import { Box, Text, useTheme } from 'react-native-system';
import { useButtonProps } from './ButtonProps';
import { ButtonProps } from './buttonTypes';

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme('button');
  const { _buttonProps, _buttonOptions } = useButtonProps(props);
  const iconAspectRatio = 1;
  return (
    <Pressable
      style={({ pressed }) => [
        tailwind.style(
          buttonTheme.base,
          buttonTheme.size.default[_buttonProps.size],
          buttonTheme.variant.default[_buttonProps.variant],
          props.disabled
            ? buttonTheme.variant.disabled[_buttonProps.variant]
            : '',
          pressed ? buttonTheme.variant.pressed[_buttonProps.variant] : ''
        ),
      ]}
      {...props}
    >
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
              props.disabled
                ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                : buttonTheme.icon.variant.default[_buttonProps.variant]
            ),
          })}
        </Box>
      )}
      {typeof props.children === 'string' ? (
        <Text
          style={tailwind.style([
            buttonTheme.text.size[_buttonProps.size],
            buttonTheme.text.variant.default[_buttonProps.variant],
            props.disabled
              ? buttonTheme.text.variant.disabled[_buttonProps.variant]
              : '',
          ])}
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
              props.disabled
                ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                : buttonTheme.icon.variant.default[_buttonProps.variant]
            ),
          })}
        </Box>
      )}
    </Pressable>
  );
};
