import React, { forwardRef } from 'react';
import { Text, Touchable } from '../../primitives';
import { createComponent } from '../../utils';

export type SelectOptionProps = {
  disabled?: boolean;
  label: string;
  value: string;
};

const RNSelectOption: React.FC<SelectOptionProps> = forwardRef<
  typeof Touchable,
  SelectOptionProps
>((props, ref) => {
  const { label } = props;
  return (
    <Touchable ref={ref}>
      <Text>{label}</Text>
    </Touchable>
  );
});

RNSelectOption.displayName = 'RNSelectOption';

export const SelectOption = createComponent<SelectOptionProps>(RNSelectOption, {
  shouldMemo: true,
});
