import React, { forwardRef, useCallback } from "react";
import {
  GestureResponderEvent,
  Platform,
  PressableProps,
  PressableStateCallbackType,
  TextStyle,
} from "react-native";

import { RenderPropType } from "../../index";
import { AnimatedBox, Box, Text, Touchable } from "../../primitives";
import {
  getTextFontFamily,
  getTextLineHeight,
  useTailwind,
  useTheme,
} from "../../theme";
import {
  createComponent,
  cx,
  generateBoxShadow,
  styleAdapter,
  useHaptic,
  useOnFocus,
  useOnHover,
  useScaleAnimation,
} from "../../utils";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { ButtonPrefix } from "./ButtonPrefix";
import { ButtonFullWidthSpinner, ButtonSpinner } from "./ButtonSpinner";
import { ButtonSuffix } from "./ButtonSuffix";

export type ButtonSizes = "sm" | "md" | "lg" | "xl";
export type ButtonVariants = "outline" | "ghost" | "solid" | "subtle";
export type ButtonTheme =
  | "base"
  | "primary"
  | "secondary"
  | "success"
  | "danger";

export interface ButtonProps extends PressableProps {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: ButtonSizes;
  /**
   * How the button should look?
   *
   * @default solid
   */
  variant: ButtonVariants;
  /**
   * How the button should be themed?
   *
   * @default base
   */
  themeColor: ButtonTheme;
  /**
   * A Suffix Element.
   * If added, the Button will show a suffix Element before the Button's text.
   */
  suffix: RenderPropType;
  /**
   * A Prefix Element.
   * If added, the Button will show a prefix Element after the Button's text.
   */
  prefix: RenderPropType;
  /**
   * If `true`, the button will show a spinner.
   *
   * @default false
   */
  loading: boolean;
  /**
   * If added, the button will only show an icon ignoring other childrens.
   */
  iconOnly: RenderPropType;
  /**
   * If added, the button will show this spinner components
   *
   * @default "<Spinner />"
   */
  spinner: RenderPropType;
  /**
   * The Text style of the Tag component.
   * @default {}
   */
  textStyle: TextStyle;
  /**
   * When a view is marked as accessible,
   * it is a good practice to set an accessibilityLabel on the view,
   * so that people who use VoiceOver know what element they have selected.
   * VoiceOver will read this string when a user selects the associated element.
   */
  accesibilityLabel: string;
  /**
   * When set to true, The Tap creates a Touch Feedback
   * Check more -> https://docs.expo.dev/versions/latest/sdk/haptics/
   * @default true
   */
  hapticEnabled: boolean;
}

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
      hapticEnabled = true,
      prefix,
      suffix,
      iconOnly,
      spinner,
      textStyle,
      style,
      accesibilityLabel,
      onPress,
      ...props
    },
    ref,
  ) => {
    const { ts, gc } = useTailwind();
    const buttonTheme = useTheme("button");
    const { handlers, animatedStyle } = useScaleAnimation();
    const hapticMedium = useHaptic("medium");
    const { onHoverIn, onHoverOut, hovered } = useOnHover();
    const { onFocus, onBlur, focused } = useOnFocus();

    const iconAspectRatio = 1;

    const isButtonDisabled = props.disabled || loading;

    const handlePress = useCallback((event: GestureResponderEvent) => {
      onPress && onPress(event);
      hapticEnabled && hapticMedium?.();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Button Prefix Component
     */
    const _prefix =
      // @ts-ignore
      prefix?.type === Icon ? (
        createIcon({
          icon: prefix,
          iconFill: gc(
            isButtonDisabled
              ? buttonTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : buttonTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
          iconStyle: ts(cx(buttonTheme.size[size]?.prefix)),
        })
      ) : (
        <ButtonPrefix size={size}>{prefix as React.ReactNode}</ButtonPrefix>
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
          iconFill: gc(
            isButtonDisabled
              ? buttonTheme.themeColor[themeColor]?.[variant]?.icon?.disabled
              : buttonTheme.themeColor[themeColor]?.[variant]?.icon?.default,
          ),
          iconStyle: ts(cx(buttonTheme.size[size]?.suffix)),
        })
      ) : (
        <ButtonSuffix size={size}>{suffix as React.ReactNode}</ButtonSuffix>
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

    const defaultChildren = (
      iconOnly ? (
        <Box
          style={[
            ts(
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
            color: gc(
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
            ts(
              cx(
                buttonTheme.size[size]?.text,
                buttonTheme.themeColor[themeColor]?.[variant]?.text.default,
                isButtonDisabled
                  ? buttonTheme.themeColor[themeColor]?.[variant]?.text.disabled
                  : "",
              ),
            ),
            getTextFontFamily(buttonTheme.size[size]?.text),
            getTextLineHeight(buttonTheme.size[size]?.text),
            styleAdapter(textStyle),
          ]}
        >
          {props.children}
        </Text>
      ) : (
        props.children
      )
    ) as React.ReactNode;

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
      <AnimatedBox style={animatedStyle}>
        <Touchable
          style={(touchState: PressableStateCallbackType) => {
            return [
              ts(
                cx(
                  buttonTheme.base,
                  buttonTheme.size[size]?.default,
                  buttonTheme.themeColor[themeColor]?.[variant]?.container
                    ?.wrapper,
                  isButtonDisabled
                    ? buttonTheme.themeColor[themeColor]?.[variant]?.container
                        ?.disabled
                    : "",
                  hovered.value
                    ? buttonTheme.themeColor[themeColor]?.[variant]?.container
                        ?.hover
                    : "",
                  touchState.pressed
                    ? buttonTheme.themeColor[themeColor]?.[variant]?.container
                        ?.pressed
                    : "",
                ),
              ),
              focused.value
                ? Platform.select({
                    web: {
                      outline: 0,
                      boxShadow: `${generateBoxShadow(
                        buttonTheme.themeColor[themeColor]?.[variant]?.container
                          ?.focus?.offset,
                        gc(
                          cx(
                            buttonTheme.themeColor[themeColor]?.[variant]
                              ?.container?.focus?.color,
                          ),
                        ) as string,
                      )}`,
                      borderColor:
                        buttonTheme.themeColor[themeColor]?.[variant]?.container
                          ?.focus?.borderColor,
                    },
                  })
                : {},
              styleAdapter(style, touchState),
            ];
          }}
          {...props}
          // Web Callbacks
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onFocus={onFocus}
          onBlur={onBlur}
          // Web Callbacks
          // A11y Props
          accessible
          accessibilityLabel={accesibilityLabel}
          accessibilityRole="button"
          // A11y Props
          ref={ref}
          disabled={isButtonDisabled}
          {...handlers}
          onPress={handlePress}
        >
          {children}
        </Touchable>
      </AnimatedBox>
    );
  },
);

RNButton.displayName = "RNButton";

export const Button = createComponent<Partial<ButtonProps>>(RNButton, {
  shouldMemo: true,
});
