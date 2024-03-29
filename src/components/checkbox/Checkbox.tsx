import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Platform, PressableStateCallbackType } from "react-native";
import { useToggleState } from "@react-stately/toggle";

import { Check, Dash } from "../../icons";
import {
  AnimatedBox,
  Box,
  Text,
  Touchable,
  TouchableProps,
} from "../../primitives";
import { getTextFontFamily, useTailwind, useTheme } from "../../theme";
import {
  createComponent,
  cx,
  generateBoxShadow,
  styleAdapter,
  useHaptic,
  useOnHover,
  useScaleAnimation,
  useWebFocusRing,
} from "../../utils";
import { mergeRefs } from "../../utils/mergeRefs";
import { createIcon } from "../create-icon";
import { Icon } from "../icon";

import { useCheckboxGroupContext } from "./CheckboxGroup";

export type CheckboxSizes = "sm" | "md" | "lg";
export type CheckboxTheme = "base" | "primary" | "danger";

export interface CheckboxProps extends TouchableProps {
  /**
   * How large should the button be?
   * @default md
   */
  size: CheckboxSizes;
  /**
   * Checkbox Theme
   * @default base
   */
  themeColor: CheckboxTheme;
  /**
   * Label for the Checkbox.
   */
  label: string | null;
  /**
   * Description for the Checkbox.
   */
  description: string | null;
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
  /**
   * When set to true, The Tap creates a Touch Feedback
   * Check more -> https://docs.expo.dev/versions/latest/sdk/haptics/
   * @default true
   */
  hapticEnabled: boolean;
}

const RNCheckbox: React.FC<Partial<CheckboxProps>> = forwardRef<
  typeof Touchable,
  Partial<CheckboxProps>
>((props, ref) => {
  const { ts, gc } = useTailwind();
  const checkboxTheme = useTheme("checkbox");

  const checkboxGroupState = useCheckboxGroupContext();
  const checkRef = useRef(null);
  const checkboxRef = mergeRefs([
    ref,
    checkRef,
  ]) as unknown as React.MutableRefObject<null>;

  let {
    size: sizeFromProps,
    themeColor: themeColoeFromProps,
    label,
    description,
    defaultSelected: defaultSelectedStateFromProps,
    isSelected: selectedStateFromProps,
    setSelected,
    isInvalid,
    accessibilityLabel = "Check me",
    hapticEnabled = true,
    isIndeterminate,
    isDisabled,
    style,
    index,
  } = props;

  const { onHoverIn, onHoverOut, hovered } = useOnHover();
  const { focusProps, isFocusVisible, isFocused } = useWebFocusRing();
  const { handlers, animatedStyle } = useScaleAnimation();
  const hapticSelection = useHaptic();

  const hasOnlyLabel = label && !description;

  const size = checkboxGroupState
    ? checkboxGroupState.size
    : sizeFromProps || "md";
  let themeColor = checkboxGroupState
    ? checkboxGroupState.themeColor
    : themeColoeFromProps || "base";

  themeColor = isInvalid ? "danger" : themeColor;

  const isCheckboxSelected = checkboxGroupState
    ? // @ts-ignore
      checkboxGroupState.isSelected(props?.value)
    : selectedStateFromProps;

  const checkboxToggleState = useToggleState({
    isSelected: isCheckboxSelected,
    defaultSelected: defaultSelectedStateFromProps,
    onChange: setSelected,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // indeterminate is a property, but it can only be set via javascript
    // https://css-tricks.com/indeterminate-checkboxes/
    if (inputRef.current) {
      // @ts-ignore Web Only Code to set indeterminate state
      inputRef.current.indeterminate = isIndeterminate;
    }
  });

  const icon = useMemo(() => {
    return isIndeterminate ? (
      <Icon icon={<Dash />} />
    ) : checkboxToggleState.isSelected ? (
      <Icon icon={<Check />} />
    ) : null;
  }, [checkboxToggleState.isSelected, isIndeterminate]);

  const handleChange = useCallback(() => {
    hapticEnabled && hapticSelection?.();
    if (checkboxGroupState) {
      if (props.value) {
        if (checkboxToggleState.isSelected) {
          checkboxGroupState.removeValue(props?.value);
        } else {
          checkboxGroupState.addValue(props?.value);
        }
      }
    } else {
      checkboxToggleState.toggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxGroupState, checkboxToggleState, props.value]);

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
            ref={inputRef}
            onChange={handleChange}
            disabled={isDisabled}
            type="checkbox"
            value={props?.value}
          />
        )}
        <Box
          style={[
            ts(
              cx(
                checkboxTheme.icon?.common,
                checkboxTheme.size[size]?.icon?.wrapper,
                isIndeterminate
                  ? checkboxTheme.themeColor[themeColor]?.default?.icon
                      ?.indeterminate
                  : checkboxToggleState.isSelected
                  ? checkboxTheme.themeColor[themeColor]?.default?.icon?.checked
                  : checkboxTheme.themeColor[themeColor]?.default?.icon
                      ?.unChecked,
                isHovered
                  ? isIndeterminate
                    ? checkboxTheme.themeColor[themeColor]?.hover?.icon
                        ?.indeterminate
                    : checkboxToggleState.isSelected
                    ? checkboxTheme.themeColor[themeColor]?.hover?.icon?.checked
                    : checkboxTheme.themeColor[themeColor]?.hover?.icon
                        ?.unChecked
                  : "",
                pressed
                  ? isIndeterminate
                    ? checkboxTheme.themeColor[themeColor]?.press?.icon
                        ?.indeterminate
                    : checkboxToggleState.isSelected
                    ? checkboxTheme.themeColor[themeColor]?.press?.icon?.checked
                    : checkboxTheme.themeColor[themeColor]?.press?.icon
                        ?.unChecked
                  : "",
                isFocussed && !hasOnlyLabel
                  ? isIndeterminate
                    ? checkboxTheme.themeColor[themeColor]?.focus?.icon
                        ?.indeterminate?.default
                    : checkboxToggleState.isSelected
                    ? checkboxTheme.themeColor[themeColor]?.focus?.icon?.checked
                        ?.default
                    : checkboxTheme.themeColor[themeColor]?.focus?.icon
                        ?.unChecked?.default
                  : "",
                isDisabled
                  ? isIndeterminate
                    ? checkboxTheme.themeColor[themeColor]?.disabled?.icon
                        ?.indeterminate
                    : checkboxToggleState.isSelected
                    ? checkboxTheme.themeColor[themeColor]?.disabled?.icon
                        ?.checked
                    : checkboxTheme.themeColor[themeColor]?.disabled?.icon
                        ?.unChecked
                  : "",
              ),
            ),
            // - Web only - Checkbox toggle on Spacebar Press
            /**
             * * The TypeScript error arises due to an inconsistency between the expected ViewStyle type
             * * and the specific styling provided for the web platform,
             * * which includes outline and boxShadow properties not defined in the ViewStyle type.
             */
            // @ts-ignore
            isFocussed && !hasOnlyLabel
              ? Platform.select({
                  web: {
                    outline: 0,
                    boxShadow: `${generateBoxShadow(
                      isIndeterminate
                        ? checkboxTheme.themeColor[themeColor]?.focus?.icon
                            ?.indeterminate?.boxShadow?.offset
                        : checkboxToggleState.isSelected
                        ? checkboxTheme.themeColor[themeColor]?.focus?.icon
                            ?.checked?.boxShadow?.offset
                        : checkboxTheme.themeColor[themeColor]?.focus?.icon
                            ?.unChecked?.boxShadow?.offset,
                      gc(
                        cx(
                          isIndeterminate
                            ? checkboxTheme.themeColor[themeColor]?.focus?.icon
                                ?.indeterminate?.boxShadow?.color
                            : checkboxToggleState.isSelected
                            ? checkboxTheme.themeColor[themeColor]?.focus?.icon
                                ?.checked?.boxShadow?.color
                            : checkboxTheme.themeColor[themeColor]?.focus?.icon
                                ?.unChecked?.boxShadow?.color,
                        ),
                      ) as string,
                    )}`,
                  },
                })
              : {},
          ]}
        >
          {icon &&
            createIcon({
              icon,
              iconFill: gc(
                cx(
                  isDisabled
                    ? checkboxTheme.themeColor[themeColor]?.disabled?.iconFill
                    : checkboxTheme.themeColor[themeColor]?.default?.iconFill,
                ),
              ),
              iconStyle: ts(cx(checkboxTheme.size[size]?.icon?.iconSize)),
            })}
        </Box>
        <Box style={checkboxTheme.labelDescWrapper}>
          {label && (
            <Text
              style={[
                ts(
                  cx(
                    checkboxTheme.size[size]?.text?.default,
                    isDisabled
                      ? checkboxTheme.label?.text?.disabled
                      : checkboxTheme.label?.text?.common,
                    description && checkboxTheme?.description?.labelText,
                  ),
                ),
                getTextFontFamily(checkboxTheme.label?.text?.common),
                description
                  ? { lineHeight: checkboxTheme?.size[size]?.text?.lineHeight }
                  : {},
              ]}
            >
              {label}
            </Text>
          )}
          {label && description && (
            <Text
              style={[
                ts(
                  cx(
                    checkboxTheme?.description?.common,
                    checkboxTheme?.size[size]?.description?.default,
                  ),
                ),
                getTextFontFamily(checkboxTheme?.description?.common),
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
    <AnimatedBox style={animatedStyle}>
      <Touchable
        onPress={handleChange}
        // Web Callbacks
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        // Web Callbacks
        // A11y Props
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="checkbox"
        accessibilityState={{
          checked: isIndeterminate ? "mixed" : checkboxToggleState.isSelected,
        }}
        accessibilityValue={{ text: props?.value }}
        onAccessibilityTap={handleChange}
        // A11y Props
        /**
         * * The TypeScript error arises due to an inconsistency between the expected ViewStyle type
         * * and the specific styling provided for the web platform,
         * * which includes outline and boxShadow properties not defined in the ViewStyle type.
         */
        // @ts-ignore
        style={(touchState: PressableStateCallbackType) => [
          ts(
            cx(
              checkboxTheme?.label?.common,
              index !== 0
                ? checkboxTheme?.group[checkboxGroupState?.orientation]?.spacing
                : "",
              description ? checkboxTheme?.label?.withDescription : "",
              checkboxTheme.size[size]?.label?.wrapper,
              touchState.pressed
                ? hasOnlyLabel
                  ? checkboxTheme.themeColor[themeColor]?.press?.label
                  : ""
                : "",
              hovered.value && hasOnlyLabel
                ? checkboxTheme.themeColor[themeColor]?.hover?.label
                : "",
            ),
          ),
          Platform.OS === "web" ? checkboxTheme.web : {},
          isFocusVisible && isFocused
            ? Platform.select({
                web: {
                  outline: 0,
                  boxShadow: hasOnlyLabel
                    ? `${generateBoxShadow(
                        checkboxTheme.themeColor[themeColor]?.focus?.label
                          ?.boxShadow?.offset,
                        gc(
                          cx(
                            checkboxTheme.themeColor[themeColor]?.focus?.label
                              ?.boxShadow?.color,
                          ),
                        ) as string,
                      )}`
                    : "",
                  backgroundColor: hasOnlyLabel
                    ? (gc(
                        cx(
                          checkboxTheme.themeColor[themeColor]?.focus?.label
                            ?.default,
                        ),
                      ) as string)
                    : "transparent",
                },
              })
            : {},
          styleAdapter(style, touchState),
        ]}
        ref={checkboxRef}
        onKeyDown={Platform.select({
          web: (e: any) => {
            if (e.code === "Space") {
              e.preventDefault();
              handleChange();
            }
          },
          default: undefined,
        })}
        disabled={isDisabled}
        {...(description ? {} : handlers)}
        {...focusProps}
      >
        {(touchState: PressableStateCallbackType) =>
          children({
            pressed: touchState.pressed,
            isHovered: !!hovered.value,
            isFocussed: !!(isFocusVisible && isFocused),
          })
        }
      </Touchable>
    </AnimatedBox>
  );
});

RNCheckbox.displayName = "RNCheckbox";

export const Checkbox = createComponent<Partial<CheckboxProps>>(RNCheckbox, {
  shouldMemo: true,
});
