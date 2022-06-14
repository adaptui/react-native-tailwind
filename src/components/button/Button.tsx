import React, { forwardRef } from "react";

import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx, styleAdapter } from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { ButtonPrefix } from "./ButtonPrefix";
import { ButtonFullWidthSpinner, ButtonSpinner } from "./ButtonSpinner";
import { ButtonSuffix } from "./ButtonSuffix";
import { ButtonProps } from "./buttonTypes";

const RNButton: React.FC<Partial<ButtonProps>> = forwardRef<
  typeof Touchable,
  Partial<ButtonProps>
>(
  (
    {
      size = "md",
      variant = "solid",
      themeColor = "base",
      loading = false,
      prefix,
      suffix,
      iconOnly,
      spinner,
      textStyle,
      style,
      ...props
    },
    ref,
  ) => {
    const tailwind = useTheme();
    const buttonTheme = useTheme("button");

    const iconAspectRatio = 1;

    const isButtonDisabled = props.disabled || loading;

    /**
     * Button Prefix Component
     */
    const _prefix =
      // @ts-ignore
      prefix?.type === Icon ? (
        createIcon({
          icon: prefix,
          iconFill: tailwind.getColor(
            isButtonDisabled
              ? buttonTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : buttonTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
          iconStyle: tailwind.style(cx(buttonTheme.size[size]?.prefix)),
        })
      ) : (
        <ButtonPrefix size={size}>{prefix}</ButtonPrefix>
      );

    const prefixEl =
      loading && !suffix ? (
        <ButtonPrefix size={size}>
          <ButtonSpinner
            size={size}
            spinner={spinner}
            themeColor={themeColor}
            variant={variant}
            prefix={prefix}
          />
        </ButtonPrefix>
      ) : (
        <>{_prefix}</>
      );

    /**
     * Button Suffix Component
     */
    const _suffix =
      // @ts-ignore
      suffix?.type === Icon ? (
        createIcon({
          icon: suffix,
          iconFill: tailwind.getColor(
            isButtonDisabled
              ? buttonTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : buttonTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
          iconStyle: tailwind.style(cx(buttonTheme.size[size]?.suffix)),
        })
      ) : (
        <ButtonSuffix size={size}>{suffix}</ButtonSuffix>
      );

    const suffixEl = loading ? (
      <ButtonSuffix size={size}>
        <ButtonSpinner
          size={size}
          spinner={spinner}
          themeColor={themeColor}
          variant={variant}
          suffix={suffix}
        />
      </ButtonSuffix>
    ) : (
      <>{_suffix}</>
    );

    const defaultChildren = iconOnly ? (
      <Box
        style={[
          tailwind.style(
            cx(
              buttonTheme.size[size]?.icon,
              loading ? buttonTheme.loading.children : "",
            ),
          ),
          { aspectRatio: iconAspectRatio },
        ]}
      >
        {/* @ts-ignore */}
        {React.cloneElement(iconOnly, {
          color: tailwind.getColor(
            isButtonDisabled
              ? buttonTheme.themeColor[themeColor]?.[variant]?.icon.disabled
              : buttonTheme.themeColor[themeColor]?.[variant]?.icon.default,
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
              buttonTheme.size[size]?.text,
              buttonTheme.themeColor[themeColor]?.[variant]?.text.default,
              isButtonDisabled
                ? buttonTheme.themeColor[themeColor]?.[variant]?.text.disabled
                : "",
            ),
          ),
          styleAdapter(textStyle, { pressed: false }, false),
        ]}
      >
        {props.children}
      </Text>
    ) : (
      props.children
    );

    const iconOnlyEl = loading ? (
      <ButtonFullWidthSpinner
        themeColor={themeColor}
        size={size}
        variant={variant}
        spinner={spinner}
      >
        {defaultChildren}
      </ButtonFullWidthSpinner>
    ) : (
      <>{defaultChildren}</>
    );

    const children = (
      <>
        {(!prefix && !suffix) || iconOnly ? (
          iconOnlyEl
        ) : (
          <>
            {prefix ? prefixEl : null}
            {defaultChildren}
            {suffix ? suffixEl : null}
          </>
        )}
      </>
    );

    return (
      <Touchable
        style={touchState => {
          return [
            tailwind.style(
              cx(
                buttonTheme.base,
                buttonTheme.size[size]?.default,
                buttonTheme.themeColor[themeColor]?.[variant]?.container
                  .wrapper,
                isButtonDisabled
                  ? buttonTheme.themeColor[themeColor]?.[variant]?.container
                      .disabled
                  : "",
                touchState.pressed
                  ? buttonTheme.themeColor[themeColor]?.[variant]?.container
                      .pressed
                  : "",
              ),
            ),
            styleAdapter(style, touchState, true),
          ];
        }}
        {...props}
        ref={ref}
        disabled={isButtonDisabled}
      >
        {children}
      </Touchable>
    );
  },
);

RNButton.displayName = "RNButton";

export const Button = createComponent<Partial<ButtonProps>>(RNButton, {
  shouldMemo: true,
});
