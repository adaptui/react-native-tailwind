import React, { forwardRef, useRef } from "react";
import { Platform } from "react-native";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useFocusRing } from "@react-native-aria/focus";
import { useHover } from "@react-native-aria/interactions";
import { useRadio } from "@react-native-aria/radio";

import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx } from "../../utils";
import { mergeRefs } from "../../utils/mergeRefs";

import { useRadioGroupContext } from "./RadioGroup";

// Check https://react-spectrum.adobe.com/react-aria/useRadioGroup.html
// Props of the useRadio Return Type
interface RadioAriaProps {
  accessibilityLabel: string;
  accessibilityRole: "radio";
  accessibilityState: {
    checked: boolean;
    disabled: boolean;
  };
  checked: boolean;
  disabled: boolean;
  onPress: () => void;
  onPressIn: () => void;
  onPressOut: () => void;
  value: string;
}

export interface RadioProps {
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
  } = props;

  const tailwind = useTheme();
  const radioTheme = useTheme("radio");

  const radioRef = useRef(null);
  const radioboxRef = mergeRefs([
    ref,
    radioRef,
  ]) as unknown as React.MutableRefObject<null>;

  const {
    themeColor: themeColorFromGroupContext,
    size: sizeFromGroupContext,
    isDisabled: isDisabledFromGroupContext,
    ...state
  } = useRadioGroupContext();

  const { inputProps } = useRadio(
    // @ts-ignore
    { isDisabled: isDisabledFromGroupContext || isDisabledFromProps, ...props },
    state,
    radioboxRef,
  );

  const size = sizeFromGroupContext;
  const themeColor = isInvalid ? "danger" : themeColorFromGroupContext;

  const radioProps: RadioAriaProps = inputProps as RadioAriaProps;

  const { focusProps } = useFocusRing();

  const children = ({ pressed = false, isHovered = false }) => {
    return (
      <>
        <Box
          style={[
            tailwind.style(
              cx(
                radioTheme.icon?.common,
                radioTheme.size[size]?.icon?.wrapper,
                radioProps.checked
                  ? radioTheme.themeColor[themeColor]?.icon?.checked?.default
                  : radioTheme.themeColor[themeColor]?.icon?.unChecked?.default,
                radioProps.disabled
                  ? radioProps.checked
                    ? radioTheme.themeColor[themeColor]?.icon?.checked?.disabled
                    : radioTheme.themeColor[themeColor]?.icon?.unChecked
                        ?.disabled
                  : "",
                pressed
                  ? radioProps.checked
                    ? radioTheme.themeColor[themeColor]?.icon?.checked?.press
                    : radioTheme.themeColor[themeColor]?.icon?.unChecked?.press
                  : "",
                isHovered
                  ? radioProps.checked
                    ? radioTheme.themeColor[themeColor]?.icon?.checked?.hover
                    : radioTheme.themeColor[themeColor]?.icon?.unChecked?.hover
                  : "",
              ),
            ),
            { borderWidth: radioTheme?.icon?.border },
          ]}
        >
          <Box
            style={tailwind.style(
              cx(
                radioTheme.size[size]?.icon?.innerCircle?.default,
                radioProps.checked
                  ? radioTheme.themeColor[themeColor]?.innerCircle?.checked
                      .default
                  : radioTheme.themeColor[themeColor]?.innerCircle?.unChecked
                      .default,
                radioProps.disabled
                  ? radioProps.checked
                    ? radioTheme.themeColor[themeColor]?.innerCircle?.checked
                        .disabled
                    : radioTheme.themeColor[themeColor]?.innerCircle?.unChecked
                        .disabled
                  : "",
                pressed
                  ? radioProps.checked
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
                    radioProps.disabled
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
  const radioItemRef = React.useRef();

  const { isHovered, hoverProps } = useHover({}, radioItemRef);

  return Platform.OS === "web" ? (
    <Box
      style={[
        tailwind.style([
          cx(
            radioTheme?.label?.common,
            description ? radioTheme?.label?.withDescription : "",
            radioTheme.size[size]?.label?.wrapper,
            isHovered ? radioTheme.themeColor[themeColor]?.label?.hover : "",
          ),
        ]),
      ]}
      // @ts-ignore
      accessibilityRole="label"
      {...hoverProps}
      ref={radioItemRef}
      accessible={true}
    >
      <VisuallyHidden>
        <input {...radioProps} {...focusProps} ref={radioboxRef} />
      </VisuallyHidden>
      {children({ isHovered })}
    </Box>
  ) : (
    <Touchable
      {...radioProps}
      style={touchState => [
        tailwind.style([
          cx(
            radioTheme?.label?.common,
            description ? radioTheme?.label?.withDescription : "",
            radioTheme.size[size]?.label?.wrapper,
            touchState.pressed
              ? label && !description
                ? radioTheme.themeColor[themeColor]?.label?.pressed
                : ""
              : "",
          ),
        ]),
      ]}
      ref={radioboxRef}
    >
      {({ pressed }) => children({ pressed })}
    </Touchable>
  );
});

RNRadio.displayName = "RNRadio";

export const Radio = createComponent<Partial<RadioProps>>(RNRadio, {
  shouldMemo: true,
});
