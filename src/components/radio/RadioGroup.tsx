import React, { forwardRef } from "react";
import { useRadioGroup } from "@react-native-aria/radio";
import { RadioGroupState, useRadioGroupState } from "@react-stately/radio";

import { Box } from "../../primitives";
import { useTheme } from "../../theme";
import { createComponent, createContext, getValidChildren } from "../../utils";

import type { RadioSizes } from "./Radio";

const [RadioGroupProvider, useRadioGroupContext] = createContext<
  RadioGroupState & Pick<RadioGroupProps, "size">
>({});

export { useRadioGroupContext };

export interface RadioGroupProps {
  /**
   * Radio Sizes
   * @default md
   */
  size: RadioSizes;
  /**
   * Orientation of Radio Group
   */
  orientation: "vertical" | "horizontal";
  /**
   * Selected Value of Radio Group - (Controlled)
   * (Controlled)
   */
  value: string;
  /**
   * Default Value of Radio Group - (Uncontrolled)
   */
  defaultValue: string;
  /**
   * Radio Group onChange - (Controlled)
   */
  onChange: (value: string) => void;
  /**
   * Is Radio Group Disabled
   */
  isDisabled: boolean;
}

const RNRadioGroup: React.FC<Partial<RadioGroupProps>> = forwardRef<
  typeof Box,
  Partial<RadioGroupProps>
>((props, ref) => {
  const {
    orientation = "vertical",
    size = "md",
    value,
    defaultValue,
    isDisabled = false,
    onChange,
    children,
  } = props;

  const radioBoxGroupProps = {
    value,
    defaultValue,
    isDisabled,
    onChange,
  };

  const tailwind = useTheme();
  const radioGroupTheme = useTheme("radio");

  const state = useRadioGroupState(radioBoxGroupProps);

  const { radioGroupProps } = useRadioGroup(props, state);

  const validChildren = getValidChildren(children);
  return (
    <Box
      style={tailwind.style(radioGroupTheme.group[orientation].common)}
      {...radioGroupProps}
      ref={ref}
    >
      <RadioGroupProvider value={{ ...state, isDisabled, size }}>
        {validChildren.map((renderElement, index) => (
          <Box
            key={index}
            style={tailwind.style(radioGroupTheme.group[orientation].spacing)}
          >
            {renderElement}
          </Box>
        ))}
      </RadioGroupProvider>
    </Box>
  );
});

RNRadioGroup.displayName = "RNRadioGroup";

export const RadioGroup = createComponent<Partial<RadioGroupProps>>(
  RNRadioGroup,
  {
    shouldMemo: true,
  },
);
