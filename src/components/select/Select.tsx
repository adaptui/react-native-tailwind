import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { useControllableState } from "@chakra-ui/hooks";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useHover } from "@react-native-aria/interactions";
import { isUndefined } from "lodash";

import { Box, Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, createContext, RenderPropType } from "../../utils";

import { SelectPrefix } from "./SelectPrefix";
import { SelectSuffix } from "./SelectSuffix";

export type SelectSizes = "sm" | "md" | "lg" | "xl";
export type SelectVariants = "outline" | "subtle" | "underline" | "ghost";

type ItemData = { value: string; disabled: boolean; label: string };

export interface SelectProps {
  /**
   * The Select Options
   */
  options: Array<ItemData>;
  /**
   * Default value of Select when value is uncontrolled
   */
  defaultState: string;
  /**
   * Default value of Select when value is controlled
   */
  state: string;
  /**
   * Callback called with the new value when it changes.
   */
  onStateChange: (val: string) => void;
  /**
   * Default placeholder value
   */
  placeholder: string;
  /**
   * How large should the select be?
   *
   * @default md
   */
  size: SelectSizes;
  /**
   * How the select should look?
   *
   * @default outline
   */
  variant: SelectVariants;
  /**
   * Prefix for the Select.
   */
  prefix: RenderPropType;
  /**
   * True, if the value of the textarea is invalid.
   */
  invalid: boolean;
  /**
   * True, if the select is disabled.
   */
  disabled: boolean;
}

const [SelectGroupProvider, useSelectGroupContext] = createContext({
  strict: false,
  name: "SelectGroupProvider",
});

export { useSelectGroupContext };

const RNSelect: React.FC<Partial<SelectProps>> = forwardRef<
  typeof Touchable,
  Partial<SelectProps>
>((props, _ref) => {
  const tailwind = useTheme();
  const selectStyle = useTheme("select");

  const {
    size = "md",
    variant = "outline",
    prefix,
    invalid = false,
    disabled = false,
    defaultState,
    state,
    onStateChange,
    placeholder = "Select option",
  } = props;

  const [prefixWidth, setPrefixWidth] = React.useState(0);
  const [suffixWidth, setSuffixWidth] = React.useState(0);

  const [selectState, setSelectState] = useControllableState({
    defaultValue: defaultState,
    value: state,
    onChange: onStateChange,
  });

  const selectRef = useRef();

  const { isHovered, hoverProps } = useHover({}, selectRef);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SelectGroupProvider value={{ selectState, setSelectState }}>
      <Touchable
        onPress={handlePresentModalPress}
        style={({ pressed }) => [
          tailwind.style([
            selectStyle.base.common,
            selectStyle.base.size[size].common,
            !prefix ? selectStyle.base.size[size].withoutAddon : "",
            selectStyle.base.variant[variant].common,
            invalid ? selectStyle.base.variant[variant].invalid : "",
            disabled ? selectStyle.base.variant[variant].disabled : "",
            pressed || isHovered
              ? selectStyle.base.variant[variant].pressedOrHovered
              : "",
          ]),
        ]}
        disabled={disabled}
        ref={selectRef}
        {...hoverProps}
      >
        {({ pressed }) => {
          return (
            <>
              <SelectPrefix
                onLayout={event =>
                  setPrefixWidth(event.nativeEvent.layout.width)
                }
                size={size}
                variant={variant}
                disabled={disabled}
                invalid={invalid}
                prefix={prefix}
                isPressedOrHovered={pressed || isHovered}
              />
              <Text
                style={tailwind.style([
                  selectStyle.base.text.size[size],
                  pressed || isHovered
                    ? selectStyle.base.text.variant[variant].common
                    : disabled
                    ? selectStyle.base.text.variant[variant].disabled
                    : isUndefined(selectState)
                    ? selectStyle.base.text.variant[variant].initial
                    : selectStyle.base.text.variant[variant].common,
                  prefix ? `pl-[${prefixWidth}px]` : "",
                  `pr-[${suffixWidth}px]`,
                ])}
              >
                {isUndefined(selectState) ? placeholder : selectState}
              </Text>
              <SelectSuffix
                onLayout={event =>
                  setSuffixWidth(event.nativeEvent.layout.width)
                }
                size={size}
                variant={variant}
                invalid={invalid}
                disabled={disabled}
                isPressedOrHovered={pressed || isHovered}
              />
            </>
          );
        }}
      </Touchable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={tailwind.style("rounded-t-lg shadow-lg")}
      >
        <Box style={tailwind.style("flex-1")}>{props.children}</Box>
      </BottomSheetModal>
    </SelectGroupProvider>
  );
});

RNSelect.displayName = "RNSelect";

export const Select = createComponent<Partial<SelectProps>>(RNSelect, {
  shouldMemo: true,
});
