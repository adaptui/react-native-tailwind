import React from 'react';
import {
  Box,
  Spinner,
  SpinnerSizes,
  Text,
  Touchable,
  useTheme,
} from 'react-native-system';
import { createButtonIcon } from './createButtonIcon';
import { ButtonPrefix } from './ButtonPrefix';
import { useButtonProps } from './ButtonProps';
import { ButtonSpinner } from './ButtonSpinner';
import { ButtonSuffix } from './ButtonSuffix';
import { ButtonProps } from './buttonTypes';

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme('button');
  const { _buttonProps, _buttonOptions } = useButtonProps(props);
  const iconAspectRatio = 1;
  const isButtonDisabled = props.disabled || props.loading;
  const children = _buttonOptions.icon ? (
    <Box
      style={[
        tailwind.style([
          buttonTheme.icon.size[_buttonProps.size],
          _buttonOptions.loading ? 'opacity-0' : '',
        ]),
        { aspectRatio: iconAspectRatio },
      ]}
    >
      {/* @ts-ignore */}
      {React.cloneElement(_buttonOptions.icon, {
        color: tailwind.getColor(
          isButtonDisabled
            ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
            : buttonTheme.icon.variant.default[_buttonProps.variant]
        ),
      })}
    </Box>
  ) : typeof props.children === 'string' ? (
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
          _buttonOptions.loading &&
          !_buttonOptions.prefix &&
          !_buttonOptions.suffix
            ? 'opacity-0'
            : '',
        ]),
        props.textStyle,
      ]}
    >
      {props.children}
    </Text>
  ) : (
    props.children
  );
  return (
    <Touchable
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
      disabled={isButtonDisabled}
    >
      {!_buttonOptions.prefix &&
        !_buttonOptions.suffix &&
        _buttonOptions.loading && (
          <Box
            style={tailwind.style('absolute z-10 items-center justify-center')}
          >
            <Spinner
              size={buttonTheme.loading.size[_buttonProps.size] as SpinnerSizes}
            />
          </Box>
        )}
      {_buttonOptions.prefix && (
        <ButtonPrefix size={_buttonProps.size}>
          {_buttonOptions.loading && !_buttonOptions.suffix ? (
            <ButtonSpinner
              size={_buttonProps.size}
              spinner={_buttonOptions.spinner}
            />
          ) : (
            createButtonIcon({
              icon: _buttonOptions.prefix,
              iconFill: tailwind.getColor(
                isButtonDisabled
                  ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                  : buttonTheme.icon.variant.default[_buttonProps.variant]
              ),
            })
          )}
        </ButtonPrefix>
      )}
      {children}
      {_buttonOptions.suffix && (
        <ButtonSuffix size={_buttonProps.size}>
          {_buttonOptions.loading ? (
            <ButtonSpinner
              size={_buttonProps.size}
              spinner={_buttonOptions.spinner}
            />
          ) : (
            createButtonIcon({
              icon: _buttonOptions.suffix,
              iconFill: tailwind.getColor(
                isButtonDisabled
                  ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                  : buttonTheme.icon.variant.default[_buttonProps.variant]
              ),
            })
          )}
        </ButtonSuffix>
      )}
    </Touchable>
  );
};
