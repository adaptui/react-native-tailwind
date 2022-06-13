import React, { forwardRef } from "react";

import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, styleAdapter } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

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
  const children = _buttonOptions.iconOnly ? (
    <Box
      style={[
        tailwind.style(
          cx(
            buttonTheme.size[_buttonProps.size]?.icon,
            _buttonOptions.loading ? "opacity-0" : "",
          ),
        ),
        { aspectRatio: iconAspectRatio },
      ]}
    >
      {/* @ts-ignore */}
      {React.cloneElement(_buttonOptions.iconOnly, {
        color: tailwind.getColor(
          isButtonDisabled
            ? buttonTheme.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.icon.disabled
            : buttonTheme.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.icon.default,
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
            buttonTheme.size[_buttonProps.size]?.text,
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
            ? buttonTheme.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.icon.disabled
            : buttonTheme.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.icon.default,
        ),
        iconStyle: tailwind.style(
          cx(buttonTheme.size[_buttonProps.size]?.prefix),
        ),
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
            ? buttonTheme.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.icon.disabled
            : buttonTheme.themeColor[_buttonProps.themeColor]?.[
                _buttonProps.variant
              ]?.icon.default,
        ),
        iconStyle: tailwind.style(
          cx(buttonTheme.size[_buttonProps.size]?.suffix),
        ),
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
              buttonTheme.size[_buttonProps.size]?.default,
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
            <ButtonSpinner
              themeColor={_buttonProps.themeColor}
              size={_buttonProps.size}
              variant={_buttonProps.variant}
              iconOnly
            />
          </Box>
        )}
      {_buttonOptions.prefix &&
        (_buttonOptions.loading && !_buttonOptions.suffix ? (
          <ButtonPrefix size={_buttonProps.size}>
            <ButtonSpinner
              size={_buttonProps.size}
              variant={_buttonProps.variant}
              themeColor={_buttonProps.themeColor}
              spinner={_buttonOptions.spinner}
            />
          </ButtonPrefix>
        ) : (
          !_buttonOptions.iconOnly && prefix
        ))}
      {children}
      {_buttonOptions.suffix &&
        (_buttonOptions.loading ? (
          <ButtonSuffix size={_buttonProps.size}>
            <ButtonSpinner
              size={_buttonProps.size}
              themeColor={_buttonProps.themeColor}
              spinner={_buttonOptions.spinner}
              variant={_buttonProps.variant}
            />
          </ButtonSuffix>
        ) : (
          !_buttonOptions.iconOnly && suffix
        ))}
    </Touchable>
  );
});

RNButton.displayName = "RNButton";

export const Button = createComponent<Partial<ButtonProps>>(RNButton, {
  shouldMemo: true,
});
