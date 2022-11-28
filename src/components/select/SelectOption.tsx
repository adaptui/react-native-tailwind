import React, { forwardRef } from "react";
import { Platform } from "react-native";

import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import {
  createComponent,
  cx,
  generateBoxShadow,
  useOnFocus,
  useOnHover,
} from "../../utils";

import { SelectSizes } from "./Select";

export interface SelectOptionProps {
  disabled?: boolean;
  label: string | null;
  description?: string;
  value: string;
  size: SelectSizes;
  handlePress: () => void;
  isSelected: boolean;
}

const RNSelectOption: React.FC<SelectOptionProps> = forwardRef<
  typeof Touchable,
  SelectOptionProps
>((props, ref) => {
  const {
    label,
    disabled = false,
    handlePress,
    description,
    size = "md",
    isSelected,
  } = props;
  const tailwind = useTheme();
  const selectOptionStyle = useTheme("selectOption");

  const { onHoverIn, onHoverOut, hovered } = useOnHover();
  const { onFocus, onBlur, focused } = useOnFocus();

  const isDisabled = disabled;
  const themeColor = "base";

  const hasOnlyLabel = label && !description;

  const children = ({
    pressed = false,
    isHovered = false,
    isFocussed = false,
  }) => {
    return (
      <>
        <Box style={selectOptionStyle.labelDescWrapper}>
          {label && (
            <Text
              style={[
                tailwind.style(
                  cx(
                    selectOptionStyle?.label?.common,
                    selectOptionStyle.size[size]?.text?.default,
                    isDisabled
                      ? selectOptionStyle.label?.text?.disabled
                      : selectOptionStyle.label?.text?.common,
                    description && selectOptionStyle?.description?.labelText,
                  ),
                ),
                description
                  ? {
                      lineHeight:
                        selectOptionStyle.size[size]?.text?.lineHeight,
                    }
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
                    selectOptionStyle.description.common,
                    selectOptionStyle.size[size]?.description?.default,
                  ),
                ),
              ]}
            >
              {description}
            </Text>
          )}
        </Box>
        <Box
          style={[
            tailwind.style(
              cx(
                selectOptionStyle.icon?.common,
                selectOptionStyle.size[size]?.icon?.wrapper,
                isSelected
                  ? selectOptionStyle.themeColor[themeColor]?.icon?.checked
                      ?.default
                  : selectOptionStyle.themeColor[themeColor]?.icon?.unChecked
                      ?.default,
                isDisabled
                  ? isSelected
                    ? selectOptionStyle.themeColor[themeColor]?.icon?.checked
                        ?.disabled
                    : selectOptionStyle.themeColor[themeColor]?.icon?.unChecked
                        ?.disabled
                  : "",
                isHovered
                  ? isSelected
                    ? selectOptionStyle.themeColor[themeColor]?.icon?.checked
                        ?.hover
                    : selectOptionStyle.themeColor[themeColor]?.icon?.unChecked
                        ?.hover
                  : "",
                isFocussed && !hasOnlyLabel
                  ? isSelected
                    ? selectOptionStyle.themeColor[themeColor]?.icon?.checked
                        ?.focus?.default
                    : selectOptionStyle.themeColor[themeColor]?.icon?.unChecked
                        ?.focus?.default
                  : "",
                pressed
                  ? isSelected
                    ? selectOptionStyle.themeColor[themeColor]?.icon?.checked
                        ?.press
                    : selectOptionStyle.themeColor[themeColor]?.icon?.unChecked
                        ?.press
                  : "",
              ),
            ),
            isFocussed && !hasOnlyLabel
              ? Platform.select({
                  web: {
                    outline: 0,
                    boxShadow: `${generateBoxShadow(
                      selectOptionStyle.themeColor[themeColor]?.icon?.checked
                        ?.focus?.boxShadow?.offset,
                      tailwind.getColor(
                        cx(
                          isSelected
                            ? selectOptionStyle.themeColor[themeColor]?.icon
                                ?.checked?.focus?.boxShadow?.color
                            : selectOptionStyle.themeColor[themeColor]?.icon
                                ?.unChecked?.focus?.boxShadow?.color,
                        ),
                      ) as string,
                    )}`,
                  },
                })
              : {},
          ]}
        >
          <Box
            style={tailwind.style(
              cx(
                selectOptionStyle.size[size]?.icon?.innerCircle?.default,
                isSelected
                  ? selectOptionStyle.themeColor[themeColor]?.innerCircle
                      ?.checked.default
                  : selectOptionStyle.themeColor[themeColor]?.innerCircle
                      ?.unChecked.default,
                isDisabled
                  ? isSelected
                    ? selectOptionStyle.themeColor[themeColor]?.innerCircle
                        ?.checked.disabled
                    : selectOptionStyle.themeColor[themeColor]?.innerCircle
                        ?.unChecked.disabled
                  : "",
                pressed
                  ? isSelected
                    ? selectOptionStyle.themeColor[themeColor]?.innerCircle
                        ?.checked.press
                    : selectOptionStyle.themeColor[themeColor]?.innerCircle
                        ?.unChecked.press
                  : "",
              ),
            )}
          />
        </Box>
      </>
    );
  };

  return (
    <Touchable
      onPress={handlePress}
      disabled={disabled}
      ref={ref}
      // Web Callbacks
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onFocus={onFocus}
      onBlur={onBlur}
      // Web Callbacks
      style={touchState => [
        tailwind.style([
          cx(
            selectOptionStyle?.label?.common,
            description ? selectOptionStyle?.label?.withDescription : "",
            selectOptionStyle.size[size]?.label?.wrapper,
            touchState.pressed
              ? hasOnlyLabel
                ? selectOptionStyle.themeColor[themeColor]?.label?.pressed
                : ""
              : "",
            hovered.value && hasOnlyLabel
              ? selectOptionStyle.themeColor[themeColor]?.label?.hover
              : "",
          ),
        ]),
        focused.value
          ? Platform.select({
              web: {
                outline: 0,
                boxShadow: hasOnlyLabel
                  ? `${generateBoxShadow(
                      selectOptionStyle.themeColor[themeColor]?.label?.focus
                        ?.offset,
                      tailwind.getColor(
                        cx(
                          selectOptionStyle.themeColor[themeColor]?.label?.focus
                            ?.color,
                        ),
                      ) as string,
                    )}`
                  : "",
                backgroundColor: hasOnlyLabel
                  ? (tailwind.getColor(
                      cx(
                        selectOptionStyle.themeColor[themeColor]?.label?.focus
                          ?.backgroundColor,
                      ),
                    ) as string)
                  : "transparent",
              },
            })
          : {},
      ]}
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

export const SelectOption = createComponent<SelectOptionProps>(RNSelectOption, {
  shouldMemo: true,
});
