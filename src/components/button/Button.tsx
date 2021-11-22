import React from 'react';
import { Pressable } from 'react-native';
import { Text, useTheme } from 'react-native-system';
import { useButtonProps } from './ButtonProps';
import { ButtonProps } from './buttonTypes';

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme('button');
  const { _buttonProps } = useButtonProps(props);
  return (
    <Pressable
      style={({ pressed }) => [
        tailwind.style(
          buttonTheme.base,
          buttonTheme.size.default[_buttonProps.size],
          buttonTheme.variant.default[_buttonProps.variant],
          _buttonProps.disabled
            ? buttonTheme.variant.disabled[_buttonProps.variant]
            : '',
          pressed ? buttonTheme.variant.pressed[_buttonProps.variant] : ''
        ),
      ]}
      {...props}
    >
      {typeof props.children === 'string' ? (
        <Text
          style={tailwind.style([
            buttonTheme.text.size[_buttonProps.size],
            buttonTheme.text.variant.default[_buttonProps.variant],
            _buttonProps.disabled
              ? buttonTheme.text.variant.disabled[_buttonProps.variant]
              : '',
          ])}
        >
          {props.children}
        </Text>
      ) : (
        props.children
      )}
    </Pressable>
  );
};
