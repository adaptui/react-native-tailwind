import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import { Platform } from "react-native";

import { Box, Text, Touchable, TouchableProps } from "../../primitives";
import { useTheme } from "../../theme";
import {
  createComponent,
  cx,
  generateBoxShadow,
  styleAdapter,
  useOnFocus,
  useOnHover,
} from "../../utils";
import { mergeRefs } from "../../utils/mergeRefs";

import { useRadioGroupContext } from "./RadioGroup";

export interface RadioProps extends TouchableProps {
  /**
   * Radio Label
   */
  label: string;
  /**
   * Radio Description
   */
  description: string;
  /**
   * Radio State
   */
  value: string;
  /**
   * Radio Disabled
   */
  isDisabled: boolean;
  /**
   * Radio Invalid State
   * @default false
   */
  isInvalid: boolean;
  /**
   * Accesibility Label
   * @default "Tap me"
   */
  accesibilityLabel: string;
}

const RNRadio: React.FC<Partial<RadioProps>> = forwardRef<
  typeof Touchable,
  Partial<RadioProps>
>((props, ref) => {
  let {
    label,
    description,
    isInvalid = false,
    isDisabled: isDisabledFromProps,
    accesibilityLabel = "Tap me",
    style,
    index,
    focusable,
  } = props;

  const hasOnlyLabel = label && !description;

  const tailwind = useTheme();
  const radioTheme = useTheme("radio");

  const radioRef = useRef(null);
  const radioboxRef = mergeRefs([
    ref,
    radioRef,
  ]) as unknown as React.MutableRefObject<null>;

  const { onHoverIn, onHoverOut, hovered } = useOnHover();
  const { onFocus, onBlur, focused } = useOnFocus();

  const state = useRadioGroupContext();
  const {
    themeColor: themeColorFromGroupContext,
    size: sizeFromGroupContext,
    isDisabled: isDisabledFromGroupContext,
    selectedValue,
    setSelectedValue,
    setFocusableIndex,
    orientation,
  } = state;

  const isDisabled = isDisabledFromGroupContext || isDisabledFromProps;
  const isSelected = selectedValue === props?.value;

  useEffect(() => {
    if (selectedValue === props?.value) {
      setFocusableIndex(index as number);
    }
  }, [index, props?.value, selectedValue, setFocusableIndex]);

  const handleChange = useCallback(() => {
    // @ts-ignore
    setSelectedValue(props?.value);
    setFocusableIndex(index as number);
  }, [index, props?.value, setFocusableIndex, setSelectedValue]);

  const size = sizeFromGroupContext;
  const themeColor = isInvalid ? "danger" : themeColorFromGroupContext;

  const children = ({
    pressed = false,
    isHovered = false,
    isFocussed = false,
  }) => {
    return (
      <>
        {Platform.OS === "web" && (
          <input
            hidden
            ref={radioboxRef}
            onChange={handleChange}
            disabled={isDisabled}
            type="radio"
            value={props?.value}
            tabIndex={-1}
          />
        )}
        <Box
          style={[
            tailwind.style(
              cx(
                radioTheme.icon?.common,
                radioTheme.size[size]?.icon?.wrapper,
                isSelected
                  ? radioTheme.themeColor[themeColor]?.icon?.checked?.default
                  : radioTheme.themeColor[themeColor]?.icon?.unChecked?.default,
                isDisabled
                  ? isSelected
                    ? radioTheme.themeColor[themeColor]?.icon?.checked?.disabled
                    : radioTheme.themeColor[themeColor]?.icon?.unChecked
                        ?.disabled
                  : "",
                isHovered
                  ? isSelected
                    ? radioTheme.themeColor[themeColor]?.icon?.checked?.hover
                    : radioTheme.themeColor[themeColor]?.icon?.unChecked?.hover
                  : "",
                isFocussed && !hasOnlyLabel
                  ? isSelected
                    ? radioTheme.themeColor[themeColor]?.icon?.checked?.focus
                        ?.default
                    : radioTheme.themeColor[themeColor]?.icon?.unChecked?.focus
                        ?.default
                  : "",
                pressed
                  ? isSelected
                    ? radioTheme.themeColor[themeColor]?.icon?.checked?.press
                    : radioTheme.themeColor[themeColor]?.icon?.unChecked?.press
                  : "",
              ),
            ),
            isFocussed && !hasOnlyLabel
              ? Platform.select({
                  web: {
                    outline: 0,
                    boxShadow: `${generateBoxShadow(
                      radioTheme.themeColor[themeColor]?.icon?.checked?.focus
                        ?.boxShadow?.offset,
                      tailwind.getColor(
                        cx(
                          isSelected
                            ? radioTheme.themeColor[themeColor]?.icon?.checked
                                ?.focus?.boxShadow?.color
                            : radioTheme.themeColor[themeColor]?.icon?.unChecked
                                ?.focus?.boxShadow?.color,
                        ),
                      ) as string,
                    )}`,
                  },
                })
              : {},
            { borderWidth: radioTheme?.icon?.border },
          ]}
        >
          <Box
            style={tailwind.style(
              cx(
                radioTheme.size[size]?.icon?.innerCircle?.default,
                isSelected
                  ? radioTheme.themeColor[themeColor]?.innerCircle?.checked
                      .default
                  : radioTheme.themeColor[themeColor]?.innerCircle?.unChecked
                      .default,
                isDisabled
                  ? isSelected
                    ? radioTheme.themeColor[themeColor]?.innerCircle?.checked
                        .disabled
                    : radioTheme.themeColor[themeColor]?.innerCircle?.unChecked
                        .disabled
                  : "",
                pressed
                  ? isSelected
                    ? radioTheme.themeColor[themeColor]?.innerCircle?.checked
                        .press
                    : radioTheme.themeColor[themeColor]?.innerCircle?.unChecked
                        .press
                  : "",
              ),
            )}
          />
        </Box>
        <Box style={radioTheme.labelDescWrapper}>
          {label && (
            <Text
              style={[
                tailwind.style(
                  cx(
                    radioTheme?.label?.common,
                    radioTheme.size[size]?.text?.default,
                    isDisabled
                      ? radioTheme.label?.text?.disabled
                      : radioTheme.label?.text?.common,
                    description && radioTheme?.description?.labelText,
                  ),
                ),
                description
                  ? { lineHeight: radioTheme.size[size]?.text?.lineHeight }
                  : {},
              ]}
            >
              {label}
            </Text>
          )}
          {description && (
            <Text
              style={[
                tailwind.style(
                  cx(
                    radioTheme.description.common,
                    radioTheme.size[size]?.description?.default,
                  ),
                ),
              ]}
            >
              {description}
            </Text>
          )}
        </Box>
      </>
    );
  };

  return (
    <Touchable
      onPress={handleChange}
      // Web Callbacks
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onFocus={onFocus}
      onBlur={onBlur}
      // Web Callbacks
      style={touchState => [
        tailwind.style([
          cx(
            radioTheme?.label?.common,
            index !== 0 ? radioTheme?.group[orientation]?.spacing : "",
            description ? radioTheme?.label?.withDescription : "",
            radioTheme.size[size]?.label?.wrapper,
            touchState.pressed
              ? hasOnlyLabel
                ? radioTheme.themeColor[themeColor]?.label?.pressed
                : ""
              : "",
            hovered.value && hasOnlyLabel
              ? radioTheme.themeColor[themeColor]?.label?.hover
              : "",
          ),
        ]),
        focused.value
          ? Platform.select({
              web: {
                outline: 0,
                boxShadow: hasOnlyLabel
                  ? `${generateBoxShadow(
                      radioTheme.themeColor[themeColor]?.label?.focus?.offset,
                      tailwind.getColor(
                        cx(
                          radioTheme.themeColor[themeColor]?.label?.focus
                            ?.color,
                        ),
                      ) as string,
                    )}`
                  : "",
                backgroundColor: hasOnlyLabel
                  ? (tailwind.getColor(
                      cx(
                        radioTheme.themeColor[themeColor]?.label?.focus
                          ?.backgroundColor,
                      ),
                    ) as string)
                  : "transparent",
              },
            })
          : {},
        styleAdapter(style, touchState, true),
      ]}
      ref={radioboxRef}
      disabled={isDisabled}
      // A11y Props
      accessible={true}
      accessibilityLabel={accesibilityLabel}
      accessibilityRole="radio"
      accessibilityState={{ selected: isSelected }}
      accessibilityValue={{ text: props?.value }}
      onAccessibilityTap={handleChange}
      // A11y Props
      // Web Only - Radio Toggle on Spacebar Press
      onKeyDown={Platform.select({
        web: (e: any) => {
          if (e.code === "Space") {
            handleChange();
          }
        },
        default: undefined,
      })}
      focusable={Platform.OS === "web" ? focusable : undefined}
    >
      {({ pressed }) =>
        children({
          pressed,
          isHovered: !!hovered.value,
          isFocussed: !!focused.value,
        })
      }
    </Touchable>
  );
});

RNRadio.displayName = "RNRadio";

export const Radio = createComponent<Partial<RadioProps>>(RNRadio, {
  shouldMemo: true,
});
