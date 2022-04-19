import { VisuallyHidden } from '@react-aria/visually-hidden';
import React, { forwardRef, useRef } from 'react';
import { Platform } from 'react-native';
import { useFocusRing, useRadio } from 'react-native-aria';
import { Box, Text, Touchable } from '../../primitives';
import { useTheme } from '../../theme';
import { createComponent } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { useRadioGroupContext } from './RadioGroup';

export type RadioSizes = 'sm' | 'md' | 'lg';

// Check https://react-spectrum.adobe.com/react-aria/useRadioGroup.html
interface RadioAriaProps {
  accessibilityLabel: string;
  accessibilityRole: 'radio';
  accessibilityState: {
    checked: boolean;
    disabled: boolean;
  };
  checked: boolean;
  disabled: boolean;
  onPress: () => void;
  onPressIn: () => void;
  onPressOut: () => void;
  value: string;
}

export interface RadioProps {
  /**
   * Radio Sizes
   * @default md
   */
  size: RadioSizes;
  /**
   * Radio Label
   */
  label: string;
  /**
   * Radio Description
   */
  description: string;
  /**
   * Radio State
   */
  value: string;
  /**
   * Radio Disabled
   */
  isDisabled: boolean;
  /**
   * Radio Invalid State
   * @default false
   */
  isInvalid: boolean;
}

const RNRadio: React.FC<Partial<RadioProps>> = forwardRef<
  typeof Touchable,
  Partial<RadioProps>
>((props, ref) => {
  const {
    size: inlineRadioSize,
    label,
    description,
    isInvalid = false,
  } = props;

  const tailwind = useTheme();
  const radioTheme = useTheme('radio');

  const radioRef = useRef(null);
  const radioboxRef = mergeRefs([
    ref,
    radioRef,
  ]) as unknown as React.MutableRefObject<null>;

  const {
    isDisabled,
    size: sizeFromGroupContext,
    ...state
  } = useRadioGroupContext();

  const { inputProps } = useRadio(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    { isDisabled, ...props },
    state,
    radioboxRef
  );

  const size = inlineRadioSize || sizeFromGroupContext || 'md';

  const radioProps: RadioAriaProps = inputProps as RadioAriaProps;

  const { focusProps } = useFocusRing();

  const children = (
    <>
      <Box
        style={[
          tailwind.style([
            radioTheme.icon.common,
            radioTheme.icon.wrapperSize[size],
            radioProps.checked
              ? radioTheme.icon.checked.default
              : radioTheme.icon.unChecked.default,
            isInvalid
              ? radioProps.checked
                ? radioTheme.icon.checked.invalid
                : radioTheme.icon.unChecked.invalid
              : '',
            radioProps.disabled
              ? radioProps.checked
                ? radioTheme.icon.checked.disabled
                : radioTheme.icon.unChecked.disabled
              : '',
          ]),
          { borderWidth: radioTheme.icon.border },
        ]}
      >
        <Box
          style={[
            tailwind.style([
              radioTheme.icon.innerCircle.size[size],
              radioProps.checked
                ? radioTheme.icon.innerCircle.checked.default
                : radioTheme.icon.innerCircle.unChecked.default,
              radioProps.disabled
                ? radioProps.checked
                  ? radioTheme.icon.innerCircle.checked.disabled
                  : radioTheme.icon.innerCircle.unChecked.disabled
                : '',
            ]),
          ]}
        />
      </Box>
      <Box style={radioTheme.labelDescWrapper}>
        {label && (
          <Text
            style={[
              tailwind.style(
                radioTheme.text.common,
                radioTheme.text.size[size]
              ),
              description
                ? { lineHeight: radioTheme.text.lineHeight[size] }
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
                radioTheme.description.common,
                radioTheme.description.size[size]
              ),
            ]}
          >
            {description}
          </Text>
        )}
      </Box>
    </>
  );

  return Platform.OS === 'web' ? (
    <Box
      style={tailwind.style([
        radioTheme.label.common,
        description ? radioTheme.label.withDescription : '',
        radioTheme.label.size[size],
        radioTheme.label.disabled,
      ])}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      accessibilityRole="label"
      ref={radioboxRef}
      accessible={true}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={radioboxRef} />
      </VisuallyHidden>
      {children}
    </Box>
  ) : (
    <Touchable
      {...radioProps}
      style={({ pressed }) => [
        tailwind.style([
          radioTheme.label.common,
          description ? radioTheme.label.withDescription : '',
          radioTheme.label.size[size],
          radioTheme.label.disabled,
          pressed ? radioTheme.label.pressed : '',
        ]),
      ]}
      ref={radioboxRef}
    >
      {children}
    </Touchable>
  );
});

RNRadio.displayName = 'RNRadio';

export const Radio = createComponent<Partial<RadioProps>>(RNRadio, {
  shouldMemo: true,
});
