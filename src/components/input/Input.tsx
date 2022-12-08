import React, { forwardRef, ReactNode, useMemo, useRef, useState } from "react";
import { Platform, TextInputProps } from "react-native";

import { Box, BoxProps, RNTextInput, TouchableProps } from "../../primitives";
import { useTheme } from "../../theme";
import {
  cx,
  generateBoxShadow,
  RenderPropType,
  runIfFn,
  styleAdapter,
  useOnFocus,
  useOnHover,
} from "../../utils";
import { createComponent } from "../../utils/createComponent";
import { composeEventHandlers } from "../../utils/mergeRefs";
import { Spinner } from "../spinner";
import { createIcon, Icon } from "..";

import { InputPrefix } from "./InputPrefix";
import { InputSuffix } from "./InputSuffix";

export type InputVariants = "outline" | "subtle" | "underline" | "ghost";
export type InputSizes = "sm" | "md" | "lg" | "xl";

export interface InputProps extends TextInputProps {
  /**
   * The Input Container Wrapper
   */
  textInputWrapperProps: BoxProps;
  /**
   * A Component Theme of How the input should look
   * @default outline
   */
  variant: InputVariants;
  /**
   * The Component Size of How large should the input be?
   * @default md
   */
  size: InputSizes;
  /**
   * Prefix for the Input component
   */
  prefix: RenderPropType;
  /**
   * Suffix for the Input component
   */
  suffix: RenderPropType;
  /**
   * Set to True, if the value of the input is invalid.
   * @default false
   */
  invalid: boolean;
  /**
   * Set to True, if the input is loading.
   * @default false
   */
  loading: boolean;
  /**
   * Prefix wrapper props extends Touchable Props
   */
  _prefixProps: TouchableProps;
  /**
   * Suffix wrapper props extends Touchable Props
   */
  _suffixProps: TouchableProps;
  /**
   * A11y Label
   */
  accessibilityLabel: string;
}

interface DefaultInputSpinnerProps extends Pick<InputProps, "size"> {
  spinnerStroke: string;
}

export const DefaultInputSpinner = (
  state: DefaultInputSpinnerProps,
): JSX.Element => {
  const { size, spinnerStroke } = state;
  return <Spinner size={size !== "xl" ? "xs" : "md"} stroke={spinnerStroke} />;
};

const RNInput: React.FC<Partial<InputProps>> = forwardRef<
  typeof RNTextInput,
  Partial<InputProps>
>((props, ref) => {
  const { onHoverIn, onHoverOut, hovered: isHovered } = useOnHover();
  const { onFocus, onBlur, focused: isFocussedWeb } = useOnFocus();
  const [isFocussedMobile, setIsFocussedMobile] = useState(false);
  const handleOnFocus = () => setIsFocussedMobile(true);
  const handleOnBlur = () => setIsFocussedMobile(false);
  const inputRef = useRef();

  const {
    size = "md",
    variant = "outline",
    textInputWrapperProps = {},
    prefix,
    suffix,
    invalid = false,
    editable = true,
    loading,
    _prefixProps,
    _suffixProps,
    value,
    style: textInputStyle,
    accessibilityLabel,
    ...restProps
  } = props;
  const tailwind = useTheme();
  const inputTheme = useTheme("input");

  const { style: wrapperStyle = {}, ...otherWrapperProps } =
    textInputWrapperProps;

  const [suffixWidth, setSuffixWidth] = React.useState(0);
  const [prefixWidth, setPrefixWidth] = React.useState(0);

  const placeholderTextColor = useMemo(() => {
    return tailwind.getColor(
      cx(
        editable
          ? isHovered.value
            ? inputTheme.variant[variant]?.hover?.placeholder
            : isFocussedWeb.value || isFocussedMobile
            ? Platform.select({
                web: inputTheme.variant[variant]?.focus?.placeholder,
                default: inputTheme.variant[variant]?.active?.placeholder,
              })
            : inputTheme.variant[variant]?.default?.placeholder
          : inputTheme.variant[variant]?.disabled?.placeholder,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocussedWeb, isHovered, editable, isFocussedMobile]);

  React.useEffect(() => {
    // @ts-ignore

    ref?.current?.setNativeProps?.({
      text: value,
    });
  }, [ref, value, suffixWidth, loading, prefixWidth, placeholderTextColor]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = React.useMemo(() => value, []);

  const _prefix = React.useMemo(() => {
    const inputPrefix =
      // @ts-ignore
      prefix?.type === Icon
        ? createIcon({
            icon: prefix,
            iconFill: tailwind.getColor(
              cx(
                editable
                  ? invalid
                    ? inputTheme.variant[variant]?.invalid?.prefix
                    : isFocussedWeb.value || isFocussedMobile
                    ? Platform.select({
                        web: inputTheme.variant[variant]?.focus?.prefix,
                        default: inputTheme.variant[variant]?.active?.prefix,
                      })
                    : isHovered.value
                    ? inputTheme.variant[variant]?.hover?.prefix
                    : inputTheme.variant[variant]?.default?.prefix
                  : inputTheme.variant[variant]?.disabled?.prefix,
              ),
            ),
            iconSize: size === "xl" ? 16 : 12,
          })
        : prefix;
    const prefixComponent = inputPrefix as ReactNode;
    return prefixComponent;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    editable,
    loading,
    size,
    prefix,
    variant,
    invalid,
    isFocussedWeb,
    isFocussedMobile,
    isHovered,
  ]);

  const _suffix = React.useMemo(() => {
    const inputSuffix =
      // @ts-ignore
      suffix?.type === Icon
        ? createIcon({
            icon: suffix,
            iconFill: tailwind.getColor(
              cx(
                editable
                  ? invalid
                    ? inputTheme.variant[variant]?.invalid?.suffix
                    : isFocussedWeb.value || isFocussedMobile
                    ? Platform.select({
                        web: inputTheme.variant[variant]?.focus?.suffix,
                        default: inputTheme.variant[variant]?.active?.suffix,
                      })
                    : isHovered.value
                    ? inputTheme.variant[variant]?.hover?.suffix
                    : inputTheme.variant[variant]?.default?.suffix
                  : inputTheme.variant[variant]?.disabled?.suffix,
              ),
            ),
            iconSize: size === "xl" ? 16 : 12,
          })
        : suffix;

    const spinnerStroke = tailwind.getColor(
      cx(
        editable
          ? inputTheme.variant[variant]?.default?.suffix
          : inputTheme.variant[variant]?.disabled?.suffix,
      ),
    ) as string;
    const inputLoading = runIfFn(DefaultInputSpinner, {
      size,
      spinnerStroke,
    });
    const suffixComponent = (loading ? inputLoading : inputSuffix) as ReactNode;
    return suffixComponent;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    editable,
    loading,
    size,
    suffix,
    variant,
    invalid,
    isFocussedWeb,
    isFocussedMobile,
    isHovered,
  ]);

  return (
    <Box
      style={[
        tailwind.style(cx(inputTheme.wrapper)),
        styleAdapter(wrapperStyle),
      ]}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      {...otherWrapperProps}
    >
      {_prefix && (
        <InputPrefix
          onLayout={event => setPrefixWidth(event.nativeEvent.layout.width)}
          size={size}
          variant={variant}
          {..._prefixProps}
        >
          {_prefix}
        </InputPrefix>
      )}
      <RNTextInput
        style={[
          tailwind.style(
            cx(
              inputTheme.size[size]?.base?.default,
              !prefix || !suffix
                ? inputTheme.size[size]?.base?.withoutAddon
                : "",
              inputTheme.variant[variant]?.default?.base,
              isHovered.value ? inputTheme.variant[variant]?.hover?.base : "",
              isFocussedWeb.value || isFocussedMobile
                ? Platform.select({
                    web: inputTheme.variant[variant]?.focus?.base?.common,
                    default: inputTheme.variant[variant]?.active?.base,
                  })
                : "",
              invalid ? inputTheme.variant[variant]?.invalid?.base : "",
              editable ? "" : inputTheme.variant[variant]?.disabled?.base,
              _prefix ? `pl-[${prefixWidth}px]` : "",
              _suffix ? `pr-[${suffixWidth}px]` : "",
            ),
          ),
          isFocussedWeb.value
            ? Platform.select({
                web: {
                  outline: 0,
                  boxShadow: generateBoxShadow(
                    inputTheme.variant[variant]?.focus?.base?.boxShadow?.offset,
                    tailwind.getColor(
                      inputTheme.variant[variant]?.focus?.base?.boxShadow
                        ?.color,
                    ) as string,
                  ),
                },
              })
            : {},
          styleAdapter(textInputStyle),
        ]}
        placeholderTextColor={placeholderTextColor}
        editable={editable}
        {...restProps}
        onFocus={composeEventHandlers(onFocus, handleOnFocus)}
        onBlur={composeEventHandlers(onBlur, handleOnBlur)}
        // A11y Props
        accessibilityLabel={accessibilityLabel}
        // A11y Props
        defaultValue={defaultValue}
        ref={inputRef}
      />
      {_suffix && (
        <InputSuffix
          onLayout={event => setSuffixWidth(event.nativeEvent.layout.width)}
          size={size}
          variant={variant}
          {..._suffixProps}
        >
          {_suffix}
        </InputSuffix>
      )}
    </Box>
  );
});

RNInput.displayName = "RNInput";

export const Input = createComponent(RNInput, {
  shouldMemo: true,
});
