import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import React, { forwardRef, useMemo, useRef } from 'react';
import { Platform } from 'react-native';
import { useFocusRing, useHover } from 'react-native-aria';
import { Check, Dash } from '../../assets';
import { Box, Text, Touchable } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { createIcon } from '../create-icon';
import { Icon } from '../icon';
import { useCheckboxGroupContext } from './CheckboxGroup';

export type CheckboxSizes = 'sm' | 'md' | 'lg';

interface CheckboxAriaProps {
  accessibilityLabel: string;
  accessibilityRole: 'checkbox';
  accessibilityState: {
    checked: 'mixed';
    disabled: boolean;
  };
  checked: boolean;
  defaultSelected: boolean;
  disabled: boolean;
  isDisabled: boolean;
  isIndeterminate: boolean;
  isSelected: boolean;
  name: string;
  onChange: () => void;
  onPress: () => void;
  onPressIn: () => void;
  onPressOut: () => void;
  readOnly: boolean;
  required: boolean;
  value: boolean;
}

export interface CheckboxProps {
  /**
   * Checkbox Sizes
   * @default md
   */
  size: CheckboxSizes;
  /**
   * Checkbox Label
   */
  label: string;
  /**
   * Checkbox Description
   */
  description: string;
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
}

const RNCheckbox: React.FC<Partial<CheckboxProps>> = forwardRef<
  typeof Touchable,
  Partial<CheckboxProps>
>((props, ref) => {
  const tailwind = useTheme();
  const checkboxTheme = useTheme('checkbox');

  const checkboxGroupState = useCheckboxGroupContext();

  const checkRef = useRef(null);
  const checkboxRef = mergeRefs([
    ref,
    checkRef,
  ]) as unknown as React.MutableRefObject<null>;

  const {
    size = 'md',
    label,
    description,
    defaultSelected,
    isSelected,
    setSelected,
    isDisabled,
    isIndeterminate,
    isInvalid,
    accessibilityLabel,
    value = '',
  } = props;

  const checkboxToggleState = useToggleState({
    isSelected,
    defaultSelected,
    onChange: setSelected,
  });

  const checkboxSpecificProps = {
    isIndeterminate,
    defaultSelected,
    isSelected,
    'onChange': setSelected,
    isDisabled,
    'aria-label': accessibilityLabel,
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { inputProps } = checkboxGroupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        { ...checkboxSpecificProps, value },
        checkboxGroupState,
        checkboxRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(checkboxSpecificProps, checkboxToggleState, checkboxRef);

  const checkboxProps: CheckboxAriaProps = inputProps as CheckboxAriaProps;

  const icon = useMemo(() => {
    return checkboxProps.isIndeterminate ? (
      <Icon icon={<Dash />} />
    ) : checkboxProps.checked ? (
      <Icon icon={<Check />} />
    ) : null;
  }, [checkboxProps.checked, checkboxProps.isIndeterminate]);

  const { focusProps } = useFocusRing();

  const children = (pressedOrHovered: boolean) => {
    return (
      <>
        <Box
          style={[
            tailwind.style([
              checkboxTheme.icon.common,
              checkboxTheme.icon.wrapperSize[size],
              checkboxProps.checked
                ? checkboxTheme.icon.checked.default
                : checkboxTheme.icon.unChecked.default,
              checkboxProps.isIndeterminate
                ? checkboxTheme.icon.indeterminate.default
                : '',
              isInvalid
                ? checkboxProps.isIndeterminate
                  ? checkboxTheme.icon.indeterminate.invalid
                  : checkboxProps.checked
                  ? checkboxTheme.icon.checked.invalid
                  : checkboxTheme.icon.unChecked.invalid
                : '',
              isDisabled
                ? checkboxProps.isIndeterminate
                  ? checkboxTheme.icon.indeterminate.disabled
                  : checkboxProps.checked
                  ? checkboxTheme.icon.checked.disabled
                  : checkboxTheme.icon.unChecked.disabled
                : '',
              pressedOrHovered
                ? checkboxProps.isIndeterminate
                  ? checkboxTheme.icon.indeterminate.pressedOrHovered
                  : checkboxProps.checked
                  ? checkboxTheme.icon.checked.pressedOrHovered
                  : checkboxTheme.icon.unChecked.pressedOrHovered
                : '',
            ]),
            { borderWidth: checkboxTheme.icon.border },
          ]}
        >
          {icon &&
            createIcon({
              icon,
              iconFill: tailwind.getColor('text-white'),
              iconStyle: tailwind.style(checkboxTheme.icon.iconSize[size]),
            })}
        </Box>
        <Box style={checkboxTheme.labelDescWrapper}>
          {label && (
            <Text
              style={[
                tailwind.style(
                  checkboxTheme.text.common,
                  checkboxTheme.text.size[size]
                ),
                description
                  ? { lineHeight: checkboxTheme.text.lineHeight[size] }
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
                  checkboxTheme.description.common,
                  checkboxTheme.description.size[size]
                ),
              ]}
            >
              {description}
            </Text>
          )}
        </Box>
      </>
    );
  };

  const checkboxItemRef = React.useRef();

  const { isHovered, hoverProps } = useHover({}, checkboxItemRef);

  return Platform.OS === 'web' ? (
    <Box
      style={tailwind.style([
        checkboxTheme.label.common,
        description ? checkboxTheme.label.withDescription : '',
        checkboxTheme.label.size[size],
        checkboxTheme.label.disabled,
        isHovered ? checkboxTheme.label.pressed : '',
      ])}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      accessibilityRole="label"
      {...hoverProps}
      ref={checkboxItemRef}
      accessible={true}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={checkboxRef} />
      </VisuallyHidden>
      {children(isHovered)}
    </Box>
  ) : (
    <Touchable
      {...checkboxProps}
      style={({ pressed }) => [
        tailwind.style([
          checkboxTheme.label.common,
          description ? checkboxTheme.label.withDescription : '',
          checkboxTheme.label.size[size],
          checkboxTheme.label.disabled,
          pressed ? checkboxTheme.label.pressed : '',
        ]),
      ]}
      ref={checkboxRef}
    >
      {({ pressed }) => children(pressed)}
    </Touchable>
  );
});

RNCheckbox.displayName = 'RNCheckbox';

export const Checkbox = createComponent<Partial<CheckboxProps>>(RNCheckbox, {
  shouldMemo: true,
});
