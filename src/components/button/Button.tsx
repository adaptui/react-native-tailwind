import React from 'react';
import {
  Box,
  Spinner,
  SpinnerSizes,
  Text,
  Touchable,
  useTheme,
} from 'react-native-system';
import { useButtonProps } from './ButtonProps';
import { ButtonSpinner } from './ButtonSpinner';
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
        stroke: tailwind.getColor(
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
        <Box
          style={[
            tailwind.style(buttonTheme.prefix[_buttonProps.size]),
            { aspectRatio: iconAspectRatio },
          ]}
        >
          {_buttonOptions.loading && !_buttonOptions.suffix ? (
            <ButtonSpinner
              size={_buttonProps.size}
              spinner={_buttonOptions.spinner}
            />
          ) : (
            <>
              {/* @ts-ignore */}
              {React.cloneElement(_buttonOptions.prefix, {
                stroke: tailwind.getColor(
                  isButtonDisabled
                    ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                    : buttonTheme.icon.variant.default[_buttonProps.variant]
                ),
              })}
            </>
          )}
        </Box>
      )}
      {children}
      {_buttonOptions.suffix && (
        <Box
          style={[
            tailwind.style(buttonTheme.suffix[_buttonProps.size]),
            { aspectRatio: iconAspectRatio },
          ]}
        >
          {_buttonOptions.loading ? (
            <ButtonSpinner
              size={_buttonProps.size}
              spinner={_buttonOptions.spinner}
            />
          ) : (
            <>
              {/* @ts-ignore */}
              {React.cloneElement(_buttonOptions.suffix, {
                stroke: tailwind.getColor(
                  isButtonDisabled
                    ? buttonTheme.icon.variant.disabled[_buttonProps.variant]
                    : buttonTheme.icon.variant.default[_buttonProps.variant]
                ),
              })}
            </>
          )}
        </Box>
      )}
    </Touchable>
  );
};
