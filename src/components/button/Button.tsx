import React, { forwardRef } from "react";

import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, styleAdapter } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";
import { Spinner, SpinnerSizes } from "../spinner";

import { ButtonPrefix } from "./ButtonPrefix";
import { useButtonProps } from "./ButtonProps";
import { ButtonSpinner } from "./ButtonSpinner";
import { ButtonSuffix } from "./ButtonSuffix";
import { ButtonProps } from "./buttonTypes";

const RNButton: React.FC<Partial<ButtonProps>> = forwardRef<
  typeof Touchable,
  Partial<ButtonProps>
>(({ style, ...props }, ref) => {
  const tailwind = useTheme();
  const buttonTheme = useTheme("button");
  const { _buttonProps, _buttonOptions, _buttonPressableProps } =
    useButtonProps(props);
  const iconAspectRatio = 1;
  const isButtonDisabled = props.disabled || props.loading;
  /**
   * Button Children
   */
  const children = _buttonOptions.icon ? (
    <Box
      style={[
        tailwind.style(
          cx(
            buttonTheme.icon.size[_buttonProps.size],
            _buttonOptions.loading ? "opacity-0" : "",
          ),
        ),
        { aspectRatio: iconAspectRatio },
      ]}
    >
      {/* @ts-ignore */}
      {React.cloneElement(_buttonOptions.icon, {
        color: tailwind.getColor(
          isButtonDisabled
            ? buttonTheme.icon.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.disabled
            : buttonTheme.icon.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.default,
        ),
      })}
    </Box>
  ) : typeof props.children === "string" ? (
    <Text
      adjustsFontSizeToFit
      allowFontScaling={false}
      selectable={false}
      style={[
        tailwind.style(
          cx(
            buttonTheme.text.size[_buttonProps.size],
            buttonTheme.themeColor[_buttonProps.themeColor]?.[
              _buttonProps.variant
            ]?.text.default,
            isButtonDisabled
              ? buttonTheme.themeColor[_buttonProps.themeColor]?.[
                  _buttonProps.variant
                ]?.text.disabled
              : "",
            _buttonOptions.loading &&
              !_buttonOptions.prefix &&
              !_buttonOptions.suffix
              ? "opacity-0"
              : "",
          ),
        ),
        styleAdapter(_buttonOptions.textStyle, { pressed: false }, false),
      ]}
    >
      {props.children}
    </Text>
  ) : (
    props.children
  );
  /**
   * Button Prefix Component
   */
  const prefix =
    // @ts-ignore
    _buttonOptions.prefix?.type === Icon ? (
      createIcon({
        icon: _buttonOptions.prefix,
        iconFill: tailwind.getColor(
          isButtonDisabled
            ? buttonTheme.icon.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.disabled
            : buttonTheme.icon.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.default,
        ),
        iconStyle: tailwind.style(cx(buttonTheme.prefix[_buttonProps.size])),
      })
    ) : (
      <ButtonPrefix size={_buttonProps.size}>
        {_buttonOptions.prefix}
      </ButtonPrefix>
    );
  /**
   * Button Suffix Component
   */
  const suffix =
    // @ts-ignore
    _buttonOptions.suffix?.type === Icon ? (
      createIcon({
        icon: _buttonOptions.suffix,
        iconFill: tailwind.getColor(
          isButtonDisabled
            ? buttonTheme.icon.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.disabled
            : buttonTheme.icon.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.default,
        ),
        iconStyle: tailwind.style(cx(buttonTheme.suffix[_buttonProps.size])),
      })
    ) : (
      <ButtonSuffix size={_buttonProps.size}>
        {_buttonOptions.suffix}
      </ButtonSuffix>
    );

  return (
    <Touchable
      style={touchState => {
        return [
          tailwind.style(
            cx(
              buttonTheme.base,
              buttonTheme.size.default[_buttonProps.size],
              buttonTheme.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.container.wrapper,
              isButtonDisabled
                ? buttonTheme.themeColor[_buttonProps.themeColor]?.[
                    _buttonProps.variant
                  ]?.container.disabled
                : "",
              touchState.pressed
                ? buttonTheme.themeColor[_buttonProps.themeColor]?.[
                    _buttonProps.variant
                  ]?.container.pressed
                : "",
            ),
          ),
          styleAdapter(style, touchState, true),
        ];
      }}
      {..._buttonPressableProps}
      ref={ref}
      disabled={isButtonDisabled}
    >
      {!_buttonOptions.prefix &&
        !_buttonOptions.suffix &&
        _buttonOptions.loading && (
          <Box style={tailwind.style(cx(buttonTheme.loading.wrapper))}>
            <Spinner
              size={buttonTheme.loading.size[_buttonProps.size] as SpinnerSizes}
            />
          </Box>
        )}
      {_buttonOptions.prefix &&
        (_buttonOptions.loading && !_buttonOptions.suffix ? (
          <ButtonPrefix size={_buttonProps.size}>
            <ButtonSpinner
              size={_buttonProps.size}
              themeColor={_buttonProps.themeColor}
              spinner={_buttonOptions.spinner}
            />
          </ButtonPrefix>
        ) : (
          !_buttonOptions.icon && prefix
        ))}
      {children}
      {_buttonOptions.suffix &&
        (_buttonOptions.loading ? (
          <ButtonSuffix size={_buttonProps.size}>
            <ButtonSpinner
              size={_buttonProps.size}
              themeColor={_buttonProps.themeColor}
              spinner={_buttonOptions.spinner}
            />
          </ButtonSuffix>
        ) : (
          !_buttonOptions.icon && suffix
        ))}
    </Touchable>
  );
});

RNButton.displayName = "RNButton";

export const Button = createComponent<Partial<ButtonProps>>(RNButton, {
  shouldMemo: true,
});
