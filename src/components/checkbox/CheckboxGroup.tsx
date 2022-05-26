import { useCheckboxGroup } from '@react-native-aria/checkbox';
import {
  CheckboxGroupState,
  useCheckboxGroupState,
} from '@react-stately/checkbox';
import React, { forwardRef } from 'react';
import { Box } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent, createContext, getValidChildren } from '../../utils';

const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createContext<CheckboxGroupState>({
    strict: false,
    name: 'CheckboxGroupProvider',
  });

export { useCheckboxGroupContext };

export interface CheckboxGroupProps {
  orientation: 'vertical' | 'horizontal';
  value: string[];
  defaultValue: string[];
  isDisabled: boolean;
  onChange: (value: string[]) => null;
}

const RNCheckboxGroup: React.FC<Partial<CheckboxGroupProps>> = forwardRef<
  typeof Box,
  Partial<CheckboxGroupProps>
>((props, ref) => {
  const {
    orientation = 'vertical',
    children,
    value,
    defaultValue,
    isDisabled,
    onChange,
  } = props;
  const checkboxGroupProps = {
    value,
    defaultValue,
    isDisabled,
    onChange,
  };
  const state = useCheckboxGroupState(checkboxGroupProps);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { groupProps } = useCheckboxGroup(checkboxGroupProps, state);

  const tailwind = useTheme();
  const checkboxGroupTheme = useTheme('checkbox');

  const validChildren = getValidChildren(children);
  return (
    <Box
      style={tailwind.style(checkboxGroupTheme.group[orientation].common)}
      {...groupProps}
      ref={ref}
    >
      <CheckboxGroupProvider value={{ ...state }}>
        {validChildren.map((renderElement, index) => (
          <Box
            key={index}
            style={tailwind.style(
              checkboxGroupTheme.group[orientation].spacing
            )}
          >
            {renderElement}
          </Box>
        ))}
      </CheckboxGroupProvider>
    </Box>
  );
});

RNCheckboxGroup.displayName = 'RNCheckboxGroup';

export const CheckboxGroup = createComponent<Partial<CheckboxGroupProps>>(
  RNCheckboxGroup,
  {
    shouldMemo: true,
  }
);
