import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { ListRenderItemInfo, PressableProps } from "react-native";
import { useControllableState } from "@chakra-ui/hooks";
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { isUndefined } from "lodash";

import { Text, Touchable } from "../../primitives";
import { useTheme } from "../../theme";
import {
  createComponent,
  createContext,
  RenderPropType,
  styleAdapter,
  useOnHover,
} from "../../utils";

import { SelectOption } from "./SelectOption";
import { SelectPrefix } from "./SelectPrefix";
import { SelectSuffix } from "./SelectSuffix";

export type SelectSizes = "sm" | "md" | "lg" | "xl";
export type SelectVariants = "outline" | "subtle" | "underline" | "ghost";

export type ItemData = { value: string; disabled?: boolean; label: string };

function keyExtractor(item: ItemData) {
  return `select-item-${item.value}`;
}

export interface SelectProps extends PressableProps {
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
  /**
   * Bottomsheet Snap points
   */
  snapPoints: string[];
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
    options,
    snapPoints: _snapPoints,
    style,
    ...otherProps
  } = props;

  const [prefixWidth, setPrefixWidth] = React.useState(0);
  const [suffixWidth, setSuffixWidth] = React.useState(0);

  const [selectState, setSelectState] = useControllableState({
    defaultValue: defaultState,
    value: state,
    onChange: onStateChange,
  });

  const selectRef = useRef();

  const { onHoverIn, onHoverOut, hovered } = useOnHover();
  const isHovered = useMemo(
    () => (hovered.value ? true : false),
    [hovered.value],
  );
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(
    () => (_snapPoints ? _snapPoints : ["50%"]),
    [_snapPoints],
  );

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderSelectItem = ({ item }: ListRenderItemInfo<ItemData>) => {
    const handleSelectItemPress = () => {
      setSelectState(item.value);
      bottomSheetModalRef.current?.dismiss();
    };
    const isSelected = selectState === item.value;
    return (
      <SelectOption
        key={`select-item-${item.value}`}
        value={item.value}
        label={item.label}
        size={size}
        handlePress={handleSelectItemPress}
        isSelected={isSelected}
      />
    );
  };

  return (
    <SelectGroupProvider value={{ selectState, setSelectState }}>
      <Touchable
        // Web Callbacks
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        // Web Callbacks
        onPress={handlePresentModalPress}
        style={touchState => [
          tailwind.style([
            selectStyle.base.common,
            selectStyle.base.size[size].common,
            !prefix ? selectStyle.base.size[size].withoutAddon : "",
            selectStyle.base.variant[variant].default,
            invalid ? selectStyle.base.variant[variant].invalid : "",
            disabled ? selectStyle.base.variant[variant].disabled : "",
            touchState.pressed || hovered.value
              ? selectStyle.base.variant[variant].pressedOrHovered
              : "",
          ]),
          styleAdapter(style, touchState),
        ]}
        {...otherProps}
        disabled={disabled}
        ref={selectRef}
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
                  pressed || hovered.value
                    ? selectStyle.base.text.variant[variant].pressedOrHovered
                    : disabled
                    ? selectStyle.base.text.variant[variant].disabled
                    : isUndefined(selectState)
                    ? selectStyle.base.text.variant[variant].default
                    : selectStyle.base.text.variant[variant].filled,
                  prefix ? `pl-[${prefixWidth}px]` : "",
                  `pr-[${suffixWidth}px]`,
                ])}
              >
                {isUndefined(selectState)
                  ? placeholder
                  : options?.filter(item => item.value === selectState)[0]
                      ?.label}
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
        style={tailwind.style("rounded-t-lg shadow-lg")}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
          contentContainerStyle={tailwind.style("px-4")}
          extraData={selectState}
        />
      </BottomSheetModal>
    </SelectGroupProvider>
  );
});

RNSelect.displayName = "RNSelect";

export const Select = createComponent<Partial<SelectProps>>(RNSelect, {
  shouldMemo: true,
});
