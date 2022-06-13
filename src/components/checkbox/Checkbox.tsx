import React, { forwardRef, useMemo, useRef } from "react";
import { Platform } from "react-native";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useCheckbox, useCheckboxGroupItem } from "@react-native-aria/checkbox";
import { useFocusRing } from "@react-native-aria/focus";
import { useHover } from "@react-native-aria/interactions";
import { useToggleState } from "@react-stately/toggle";

import { Check, Dash } from "../../icons";
import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, cx } from "../../utils";
import { mergeRefs } from "../../utils/mergeRefs";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { useCheckboxGroupContext } from "./CheckboxGroup";

export type CheckboxSizes = "sm" | "md" | "lg";
export type CheckboxTheme = "base" | "primary" | "danger";

// Props of the useCheckboxGroupItem/useCheckbox Return Type
interface CheckboxAriaProps {
  accessibilityLabel: string;
  accessibilityRole: "checkbox";
  accessibilityState: {
    checked: "mixed";
    disabled: boolean;
  };
  checked: boolean;
  defaultSelected: boolean;
  disabled: boolean;
  isDisabled: boolean;
  isIndeterminate: boolean;
  isSelected: boolean;
  name: string;
  onChange: () => void;
  onPress: () => void;
  onPressIn: () => void;
  onPressOut: () => void;
  readOnly: boolean;
  required: boolean;
  value: boolean;
}

export interface CheckboxProps {
  /**
   * How large should the button be?
   * @default md
   */
  size: CheckboxSizes;
  /**
   * Checkbox Theme
   */
  themeColor: CheckboxTheme;
  /**
   * Label for the Checkbox.
   */
  label: string;
  /**
   * Description for the Checkbox.
   */
  description: string;
  /**
   * Checkbox State
   * @default false
   */
  isSelected: boolean;
  /**
   * Checkbox Default State
   * @default false
   */
  defaultSelected: boolean;
  /**
   * Checkbox Indeterminate State
   * @default false
   */
  isIndeterminate: boolean;
  /**
   * Checkbox onState Change
   */
  setSelected: (isSelected: boolean) => void;
  /**
   * Checkbox Disabled State
   * @default false
   */
  isDisabled: boolean;
  /**
   * Checkbox Invalid State
   * @default false
   */
  isInvalid: boolean;
  /**
   * Accessibility Label
   */
  accessibilityLabel: string;
  /**
   * Checkbox State Value if inside CheckboxGroup
   */
  value: string;
}

const RNCheckbox: React.FC<Partial<CheckboxProps>> = forwardRef<
  typeof Touchable,
  Partial<CheckboxProps>
>((props, ref) => {
  const tailwind = useTheme();
  const checkboxTheme = useTheme("checkbox");

  const checkboxGroupState = useCheckboxGroupContext();

  const checkRef = useRef(null);
  const checkboxRef = mergeRefs([
    ref,
    checkRef,
  ]) as unknown as React.MutableRefObject<null>;

  let {
    size = "md",
    themeColor = "base",
    label,
    description,
    defaultSelected,
    isSelected,
    setSelected,
    isDisabled,
    isIndeterminate,
    isInvalid,
    accessibilityLabel = "Check me",
    value = "",
  } = props;

  themeColor = isInvalid ? "danger" : themeColor;

  const checkboxToggleState = useToggleState({
    isSelected,
    defaultSelected,
    onChange: setSelected,
  });

  const checkboxSpecificProps = {
    isIndeterminate,
    defaultSelected,
    isSelected,
    onChange: setSelected,
    isDisabled,
    "aria-label": accessibilityLabel,
  };

  const { inputProps } = checkboxGroupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        { ...checkboxSpecificProps, value },
        checkboxGroupState,
        checkboxRef,
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(checkboxSpecificProps, checkboxToggleState, checkboxRef);

  const checkboxProps: CheckboxAriaProps = inputProps as CheckboxAriaProps;

  const icon = useMemo(() => {
    return checkboxProps.isIndeterminate ? (
      <Icon icon={<Dash />} />
    ) : checkboxProps.checked ? (
      <Icon icon={<Check />} />
    ) : null;
  }, [checkboxProps.checked, checkboxProps.isIndeterminate]);

  const { focusProps } = useFocusRing();

  const children = ({ pressed = false, isHovered = false }) => {
    return (
      <>
        <Box
          style={[
            tailwind.style(
              cx(
                checkboxTheme.icon.common,
                checkboxTheme.icon.wrapperSize[size],
                checkboxProps.isIndeterminate
                  ? checkboxTheme.icon.themeColor[themeColor]?.indeterminate
                      .default
                  : checkboxProps.checked
                  ? checkboxTheme.icon.themeColor[themeColor]?.checked.default
                  : checkboxTheme.icon.themeColor[themeColor]?.unChecked
                      .default,
                isDisabled
                  ? checkboxProps.isIndeterminate
                    ? checkboxTheme.icon.themeColor[themeColor]?.indeterminate
                        .disabled
                    : checkboxProps.checked
                    ? checkboxTheme.icon.themeColor[themeColor]?.checked
                        .disabled
                    : checkboxTheme.icon.themeColor[themeColor]?.unChecked
                        .disabled
                  : "",
                pressed
                  ? checkboxProps.isIndeterminate
                    ? checkboxTheme.icon.themeColor[themeColor]?.indeterminate
                        .press
                    : checkboxProps.checked
                    ? checkboxTheme.icon.themeColor[themeColor]?.checked.press
                    : checkboxTheme.icon.themeColor[themeColor]?.unChecked.press
                  : "",
                isHovered
                  ? checkboxProps.isIndeterminate
                    ? checkboxTheme.icon.themeColor[themeColor]?.indeterminate
                        .hover
                    : checkboxProps.checked
                    ? checkboxTheme.icon.themeColor[themeColor]?.checked.hover
                    : checkboxTheme.icon.themeColor[themeColor]?.unChecked.hover
                  : "",
              ),
            ),
            { borderWidth: checkboxTheme.icon.border },
          ]}
        >
          {icon &&
            createIcon({
              icon,
              iconFill: tailwind.getColor(
                cx(
                  checkboxProps.isDisabled
                    ? checkboxTheme.icon.themeColor[themeColor]?.iconFill
                        .disabled
                    : checkboxTheme.icon.themeColor[themeColor]?.iconFill
                        .default,
                ),
              ),
              iconStyle: tailwind.style(cx(checkboxTheme.icon.iconSize[size])),
            })}
        </Box>
        <Box style={checkboxTheme.labelDescWrapper}>
          {label && (
            <Text
              style={[
                tailwind.style(
                  cx(
                    checkboxTheme.text.common,
                    checkboxTheme.text.size[size],
                    checkboxProps.disabled ? checkboxTheme.text.disabled : "",
                    description && checkboxTheme.description.labelText,
                  ),
                ),
                description
                  ? { lineHeight: checkboxTheme.text.lineHeight[size] }
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
                    checkboxTheme.description.common,
                    checkboxTheme.description.size[size],
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

  const checkboxItemRef = React.useRef();

  const { isHovered, hoverProps } = useHover({}, checkboxItemRef);

  return Platform.OS === "web" ? (
    <Box
      style={tailwind.style(
        cx(
          checkboxTheme.label.common,
          description ? checkboxTheme.label.withDescription : "",
          checkboxTheme.label.size[size],
          isHovered ? checkboxTheme.label.themeColor[themeColor]?.hover : "",
        ),
      )}
      // @ts-ignore
      accessibilityRole="label"
      {...hoverProps}
      ref={checkboxItemRef}
      accessible={true}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={checkboxRef} />
      </VisuallyHidden>
      {children({ isHovered })}
    </Box>
  ) : (
    <Touchable
      {...checkboxProps}
      style={({ pressed }) =>
        tailwind.style(
          cx(
            checkboxTheme.label.common,
            description ? checkboxTheme.label.withDescription : "",
            checkboxTheme.label.size[size],
            pressed
              ? label && !description
                ? checkboxTheme.label.themeColor[themeColor]?.pressed
                : ""
              : "",
          ),
        )
      }
      ref={checkboxRef}
    >
      {({ pressed }) => children({ pressed })}
    </Touchable>
  );
});

RNCheckbox.displayName = "RNCheckbox";

export const Checkbox = createComponent<Partial<CheckboxProps>>(RNCheckbox, {
  shouldMemo: true,
});
