import React, { forwardRef, useMemo, useRef, useState } from "react";
import { Platform, TextInputProps, ViewStyle } from "react-native";

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
import { composeEventHandlers, mergeRefs } from "../../utils/mergeRefs";
import { Spinner } from "../spinner";
import { createIcon, Icon, TextAreaSuffix } from "..";

export type TextAreaVariants = "outline" | "subtle" | "underline";
export type TextAreaSizes = "sm" | "md" | "lg" | "xl";

export interface TextAreaProps extends TextInputProps {
  /**
   * The TextArea Container Wrapper
   */
  textInputWrapperProps: BoxProps;
  /**
   * A Component Theme of How the input should look
   * @default outline
   */
  variant: TextAreaVariants;
  /**
   * The Component Size of How large should the input be?
   * @default md
   */
  size: TextAreaSizes;
  /**
   * Prefix for the TextArea component
   */
  prefix: RenderPropType;
  /**
   * Suffix for the TextArea component
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
   * Suffix wrapper props extends Touchable Props
   */
  _suffixProps: TouchableProps;
  /**
   * A11y Label
   */
  accessibilityLabel: string;
}

interface DefaultTextAreaSpinnerProps extends Pick<TextAreaProps, "size"> {
  spinnerStroke: ViewStyle;
}

export const DefaultTextAreaSpinner = (
  state: DefaultTextAreaSpinnerProps,
): JSX.Element => {
  const { size, spinnerStroke } = state;
  return <Spinner size={size !== "xl" ? "xs" : "md"} style={spinnerStroke} />;
};

const RNTextArea: React.FC<Partial<TextAreaProps>> = forwardRef<
  typeof RNTextInput,
  Partial<TextAreaProps>
>((props, ref) => {
  const { onHoverIn, onHoverOut, hovered: isHovered } = useOnHover();
  const { onFocus, onBlur, focused: isFocussedWeb } = useOnFocus();
  const [isFocussedMobile, setIsFocussedMobile] = useState(false);
  const handleOnFocus = () => setIsFocussedMobile(true);
  const handleOnBlur = () => setIsFocussedMobile(false);

  const localRef = useRef();
  const inputRef = mergeRefs([localRef, ref]);

  const {
    size = "md",
    variant = "outline",
    textInputWrapperProps = {},
    prefix,
    suffix,
    invalid = false,
    editable = true,
    loading,
    _suffixProps,
    value,
    style: textInputStyle,
    accessibilityLabel,
    ...restProps
  } = props;
  const tailwind = useTheme();
  const textAreaTheme = useTheme("textArea");

  const { style: wrapperStyle = {}, ...otherWrapperProps } =
    textInputWrapperProps;

  const [suffixWidth, setSuffixWidth] = React.useState(0);

  const placeholderTextColor = useMemo(() => {
    return tailwind.getColor(
      cx(
        editable
          ? isHovered.value
            ? textAreaTheme.variant[variant]?.hover?.placeholder
            : isFocussedWeb.value || isFocussedMobile
            ? Platform.select({
                web: textAreaTheme.variant[variant]?.focus?.placeholder,
                default: textAreaTheme.variant[variant]?.active?.placeholder,
              })
            : textAreaTheme.variant[variant]?.default?.placeholder
          : textAreaTheme.variant[variant]?.disabled?.placeholder,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocussedWeb, isHovered, editable, isFocussedMobile]);

  React.useEffect(() => {
    // @ts-ignore

    inputRef?.current?.setNativeProps?.({
      text: value,
    });
  }, [inputRef, value, suffixWidth, loading, placeholderTextColor]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = React.useMemo(() => value, []);

  const _suffix: TextAreaProps["suffix"] = React.useMemo(() => {
    const inputSuffix =
      // @ts-ignore
      suffix?.type === Icon
        ? createIcon({
            icon: suffix,
            iconFill: tailwind.getColor(
              cx(
                editable
                  ? invalid
                    ? textAreaTheme.variant[variant]?.invalid?.suffix
                    : isFocussedWeb.value || isFocussedMobile
                    ? Platform.select({
                        web: textAreaTheme.variant[variant]?.focus?.suffix,
                        default: textAreaTheme.variant[variant]?.active?.suffix,
                      })
                    : isHovered.value
                    ? textAreaTheme.variant[variant]?.hover?.suffix
                    : textAreaTheme.variant[variant]?.default?.suffix
                  : textAreaTheme.variant[variant]?.disabled?.suffix,
              ),
            ),
            iconSize: size === "xl" ? 16 : 12,
          })
        : suffix;

    const spinnerStroke = tailwind.style(
      cx(
        editable
          ? textAreaTheme.variant[variant]?.default?.suffix
          : textAreaTheme.variant[variant]?.disabled?.suffix,
      ),
    );
    const inputLoading = runIfFn(DefaultTextAreaSpinner, {
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
    isFocussedWeb,
    isFocussedMobile,
    isHovered,
  ]);

  return (
    <Box
      style={[
        tailwind.style(cx(textAreaTheme.wrapper)),
        styleAdapter(wrapperStyle),
      ]}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      {...otherWrapperProps}
    >
      <RNTextInput
        style={[
          tailwind.style(
            cx(
              textAreaTheme.size[size]?.base?.default,
              !prefix || !suffix
                ? textAreaTheme.size[size]?.base?.withoutAddon
                : "",
              textAreaTheme.variant[variant]?.default?.base,
              isHovered.value
                ? textAreaTheme.variant[variant]?.hover?.base
                : "",
              isFocussedWeb.value || isFocussedMobile
                ? Platform.select({
                    web: textAreaTheme.variant[variant]?.focus?.base?.common,
                    default: textAreaTheme.variant[variant]?.active?.base,
                  })
                : "",
              invalid ? textAreaTheme.variant[variant]?.invalid?.base : "",
              editable ? "" : textAreaTheme.variant[variant]?.disabled?.base,
              _suffix ? `pr-[${suffixWidth}px]` : "",
            ),
          ),
          isFocussedWeb.value
            ? Platform.select({
                web: {
                  outline: 0,
                  boxShadow: generateBoxShadow(
                    textAreaTheme.variant[variant]?.focus?.base?.boxShadow
                      ?.offset,
                    tailwind.getColor(
                      textAreaTheme.variant[variant]?.focus?.base?.boxShadow
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
        accessible
        accessibilityRole="text"
        multiline={true}
        ref={inputRef}
      />
      {_suffix && (
        <TextAreaSuffix
          onLayout={(event: {
            nativeEvent: { layout: { width: React.SetStateAction<number> } };
          }) => setSuffixWidth(event.nativeEvent.layout.width)}
          size={size}
          variant={variant}
          {..._suffixProps}
        >
          {_suffix}
        </TextAreaSuffix>
      )}
    </Box>
  );
});

RNTextArea.displayName = "RNTextArea";

export const TextArea = createComponent(RNTextArea, {
  shouldMemo: true,
});
