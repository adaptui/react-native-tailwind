import React, { forwardRef, useMemo, useRef, useState } from "react";
import { Platform, TextInputProps, ViewStyle } from "react-native";
import { useHover } from "@react-native-aria/interactions";

import { Box, BoxProps, RNTextInput, TouchableProps } from "../../primitives";
import { useTheme } from "../../theme";
import { cx, RenderPropType, runIfFn, styleAdapter } from "../../utils";
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
}

interface DefaultInputSpinnerProps extends Pick<InputProps, "size"> {
  spinnerStroke: ViewStyle;
}

export const DefaultInputSpinner = (
  state: DefaultInputSpinnerProps,
): JSX.Element => {
  const { size, spinnerStroke } = state;
  return <Spinner size={size !== "xl" ? "xs" : "md"} style={spinnerStroke} />;
};

const RNInput: React.FC<Partial<InputProps>> = forwardRef<
  typeof RNTextInput,
  Partial<InputProps>
>((props, ref) => {
  const [isFocussed, setIsFocussed] = useState(false);

  const handleOnFocus = () => setIsFocussed(true);
  const handleOnBlur = () => setIsFocussed(false);
  const inputRef = useRef();

  const { isHovered, hoverProps } = useHover({}, inputRef);
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
    onFocus,
    onBlur,
    style: textInputStyle,
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
          ? isHovered
            ? inputTheme.variant[variant]?.base?.placeholder?.hover
            : isFocussed
            ? inputTheme.variant[variant]?.base?.placeholder?.focus
            : inputTheme.variant[variant]?.base?.placeholder?.common
          : inputTheme.variant[variant]?.base?.placeholder?.disabled,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocussed, isHovered, editable]);

  React.useEffect(() => {
    // @ts-ignore

    ref?.current?.setNativeProps?.({
      text: value,
    });
  }, [ref, value, suffixWidth, loading, prefixWidth, placeholderTextColor]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = React.useMemo(() => value, []);

  const _prefix: InputProps["prefix"] = React.useMemo(() => {
    const inputPrefix =
      // @ts-ignore
      prefix?.type === Icon
        ? createIcon({
            icon: prefix,
            iconFill: tailwind.getColor(
              cx(
                editable
                  ? invalid
                    ? inputTheme.variant[variant]?.prefix?.invalid
                    : isFocussed
                    ? inputTheme.variant[variant]?.prefix?.focus
                    : isHovered
                    ? inputTheme.variant[variant]?.prefix?.hover
                    : inputTheme.variant[variant]?.prefix?.fill
                  : inputTheme.variant[variant]?.prefix?.disabled,
              ),
            ),
            iconSize: size === "xl" ? 16 : 12,
          })
        : prefix;
    return inputPrefix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    editable,
    loading,
    size,
    prefix,
    variant,
    invalid,
    isFocussed,
    isHovered,
  ]);

  const _suffix: InputProps["suffix"] = React.useMemo(() => {
    const inputSuffix =
      // @ts-ignore
      suffix?.type === Icon
        ? createIcon({
            icon: suffix,
            iconFill: tailwind.getColor(
              cx(
                editable
                  ? invalid
                    ? inputTheme.variant[variant]?.suffix?.invalid
                    : isFocussed
                    ? inputTheme.variant[variant]?.suffix?.focus
                    : isHovered
                    ? inputTheme.variant[variant]?.suffix?.hover
                    : inputTheme.variant[variant]?.suffix?.fill
                  : inputTheme.variant[variant]?.suffix?.disabled,
              ),
            ),
            iconSize: size === "xl" ? 16 : 12,
          })
        : suffix;

    const spinnerStroke = tailwind.style(
      cx(
        editable
          ? inputTheme.variant[variant]?.spinner?.default
          : inputTheme.variant[variant]?.spinner?.disabled,
      ),
    );
    const inputLoading = runIfFn(DefaultInputSpinner, {
      size,
      spinnerStroke,
    });
    return loading ? inputLoading : inputSuffix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    editable,
    loading,
    size,
    suffix,
    variant,
    invalid,
    isFocussed,
    isHovered,
  ]);

  return (
    <Box
      style={[
        tailwind.style(cx(inputTheme.wrapper)),
        styleAdapter(wrapperStyle),
      ]}
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
              inputTheme.size[size]?.base?.common,
              !prefix || !suffix
                ? inputTheme.size[size]?.base?.withoutAddon
                : "",
              inputTheme.variant[variant]?.base?.common,
              isHovered ? inputTheme.variant[variant]?.base?.hover : "",
              isFocussed ? inputTheme.variant[variant]?.base?.focus : "",
              invalid ? inputTheme.variant[variant]?.base?.invalid : "",
              editable ? "" : inputTheme.variant[variant]?.base?.disabled,
              _prefix ? `pl-[${prefixWidth}px]` : "",
              _suffix ? `pr-[${suffixWidth}px]` : "",
            ),
          ),
          isFocussed &&
            Platform.select({
              web: {
                outlineOffset:
                  inputTheme.variant[variant]?.base?.focusWeb?.outlineOffset,
                outlineColor: (tailwind.getColor(
                  cx(inputTheme.variant[variant]?.base?.focusWeb?.borderColor),
                ) || undefined) as string,
                outlineStyle:
                  inputTheme.variant[variant]?.base?.focusWeb?.outlineStyle,
              },
            }),
          styleAdapter(textInputStyle),
        ]}
        placeholderTextColor={placeholderTextColor}
        editable={editable}
        {...restProps}
        onFocus={composeEventHandlers(onFocus, handleOnFocus)}
        onBlur={composeEventHandlers(onBlur, handleOnBlur)}
        defaultValue={defaultValue}
        ref={inputRef}
        {...hoverProps}
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
