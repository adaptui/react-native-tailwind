import React, { forwardRef } from "react";
import { Platform } from "react-native";
import {
  CheckboxGroupState,
  useCheckboxGroupState,
} from "@react-stately/checkbox";

import { Box, BoxProps } from "../../primitives";
import { useTheme } from "../../theme";
import {
  createComponent,
  createContext,
  cx,
  getValidChildren,
  passProps,
  styleAdapter,
} from "../../utils";

import { CheckboxSizes, CheckboxTheme } from "./Checkbox";

interface CheckboxGroupContext
  extends Pick<CheckboxGroupProps, "size" | "themeColor" | "orientation">,
    CheckboxGroupState {}

const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createContext<CheckboxGroupContext>({
    strict: false,
    name: "CheckboxGroupProvider",
  });

export { useCheckboxGroupContext };

export interface CheckboxGroupProps extends BoxProps {
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
   * The current value (controlled).
   */
  value: string[];
  /**
   * The default value (uncontrolled).
   */
  defaultValue: string[];
  /**
   * Whether the checkbox group is disabled.
   */
  isDisabled: boolean;
  /**
   * Handler that is called when the value changes.
   */
  onChange: (value: string[]) => void;
  /**
   * Orientation of Radio Group
   */
  orientation: "vertical" | "horizontal";
}

const RNCheckboxGroup: React.FC<Partial<CheckboxGroupProps>> = forwardRef<
  typeof Box,
  Partial<CheckboxGroupProps>
>((props, ref) => {
  const {
    orientation = "vertical",
    size = "md",
    themeColor = "base",
    children,
    value,
    defaultValue,
    isDisabled,
    onChange,
    style,
  } = props;
  const checkboxGroupProps = {
    value,
    defaultValue,
    isDisabled,
    onChange,
  };
  const state = useCheckboxGroupState(checkboxGroupProps);

  const tailwind = useTheme();
  const checkboxGroupTheme = useTheme("checkbox");

  const validChildren = getValidChildren(children);
  return (
    <Box
      style={[
        tailwind.style(cx(checkboxGroupTheme.group[orientation]?.common)),
        styleAdapter(style),
      ]}
      // @ts-ignore Web Only Prop
      accessibilityRole={Platform.OS === "web" ? "group" : undefined}
      ref={ref}
    >
      <CheckboxGroupProvider
        value={{ ...state, size, themeColor, orientation }}
      >
        {validChildren.map((renderElement, index) =>
          passProps(renderElement, {
            index,
          }),
        )}
      </CheckboxGroupProvider>
    </Box>
  );
});

RNCheckboxGroup.displayName = "RNCheckboxGroup";

export const CheckboxGroup = createComponent<Partial<CheckboxGroupProps>>(
  RNCheckboxGroup,
  {
    shouldMemo: true,
  },
);
