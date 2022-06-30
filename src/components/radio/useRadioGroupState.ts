/**
 * All Credit goes to the developers of the Open Source
 * Adobe React Spectrum @react-stately
 * for providing an hook useRadioGroupState which I have tweaked a little bit to work for Mobile
 * Check out their useRadioGroupState
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/radio/src/useRadioGroupState.ts
 */

import { useControllableState } from "@chakra-ui/hooks";

export interface RadioGroupState {
  /** Whether the radio group is disabled. */
  readonly isDisabled: boolean;

  /** The currently selected value. */
  readonly selectedValue: string | null;

  /** Sets the selected value. */
  setSelectedValue(value: string): void;
}

export interface RadioGroupProps {
  /**
   * Whether the radio group is disabled
   */
  isDisabled: boolean;
  /**
   * Default value of Radio Group - Uncontrolled State
   */
  defaultValue: string;
  /**
   * Value of Radio Group - Controlled State
   */
  value: string;
  /**
   * onChange callback - (Controlled)
   */
  onChange: (value: string) => void;
}
/**
 * Provides state management for a radio group component. Provides a name for the group,
 * and manages selection and focus state.
 */
export function useRadioGroupState(props: RadioGroupProps): RadioGroupState {
  const { isDisabled, defaultValue, value, onChange } = props;
  let [selectedValue, setSelected] = useControllableState({
    value,
    onChange,
    defaultValue,
  });

  let setSelectedValue = (_value: string) => {
    if (!isDisabled) {
      setSelected(_value);
    }
  };

  return {
    selectedValue,
    setSelectedValue,
    isDisabled: isDisabled,
  };
}
