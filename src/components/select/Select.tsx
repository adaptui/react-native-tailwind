import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import {
  ListRenderItemInfo,
  PressableProps,
  PressableStateCallbackType,
} from "react-native";
import { useControllableState } from "@chakra-ui/hooks";
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { isUndefined } from "lodash";

import { Text, Touchable } from "../../primitives";
import {
  getTextFontFamily,
  getTextLineHeight,
  useTailwind,
  useTheme,
} from "../../theme";
import {
  createComponent,
  createContext,
  cx,
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
   * The Select Options to render inside the Bottomsheet Flatlist
   */
  options: Array<ItemData>;
  /**
   * Default value of Select when it is uncontrolled
   */
  defaultState: string;
  /**
   * Value of Select when it is controlled
   */
  state: string;
  /**
   * Callback called with the new value when on selecting options from Flatlist
   */
  onStateChange: (val: string) => void;
  /**
   * Placeholder value
   * @default "Select Option"
   */
  placeholder: string;
  /**
   * How large should the select be?
   * @default md
   */
  size: SelectSizes;
  /**
   * How the select should look?
   * @default outline
   */
  variant: SelectVariants;
  /**
   * Prefix for the Select Component
   */
  prefix: RenderPropType;
  /**
   * Suffix for the Select Component
   */
  suffix: RenderPropType;
  /**
   * Set to True, if the value of the Select component is invalid.
   */
  invalid: boolean;
  /**
   * Set to true, if the select is disabled.
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
  const { ts } = useTailwind();
  const selectStyle = useTheme("select");

  const {
    size = "md",
    variant = "outline",
    prefix,
    suffix,
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
        style={(touchState: PressableStateCallbackType) => [
          ts([
            cx(
              selectStyle.base?.common,
              selectStyle.base?.size[size]?.common,
              !prefix ? selectStyle.base?.size[size]?.withoutAddon : "",
              selectStyle.base?.variant[variant]?.default,
              invalid ? selectStyle.base?.variant[variant]?.invalid : "",
              disabled ? selectStyle.base?.variant[variant]?.disabled : "",
              touchState.pressed || hovered.value
                ? selectStyle.base?.variant[variant]?.pressedOrHovered
                : "",
            ),
          ]),
          styleAdapter(style, touchState),
        ]}
        {...otherProps}
        disabled={disabled}
        ref={selectRef}
      >
        {(touchState: PressableStateCallbackType) => {
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
                isPressedOrHovered={touchState.pressed || isHovered}
                isDefaultState={isUndefined(selectState)}
              />
              <Text
                style={[
                  ts([
                    cx(
                      selectStyle.base?.size[size]?.text,
                      touchState.pressed || hovered.value
                        ? selectStyle.base?.variant[variant]?.text
                            ?.pressedOrHovered
                        : disabled
                        ? selectStyle.base?.variant[variant]?.text?.disabled
                        : isUndefined(selectState)
                        ? selectStyle.base?.variant[variant]?.text?.default
                        : selectStyle.base?.variant[variant]?.text?.filled,
                      prefix ? `pl-[${prefixWidth}px]` : "",
                      `pr-[${suffixWidth}px]`,
                    ),
                  ]),
                  getTextFontFamily(selectStyle.base?.size[size]?.text),
                  getTextLineHeight(selectStyle.base?.size[size]?.text),
                ]}
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
                disabled={disabled}
                invalid={invalid}
                suffix={suffix}
                isPressedOrHovered={touchState.pressed || isHovered}
                isDefaultState={isUndefined(selectState)}
              />
            </>
          );
        }}
      </Touchable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={ts("rounded-t-lg shadow-lg")}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
          contentContainerStyle={ts("px-4")}
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
