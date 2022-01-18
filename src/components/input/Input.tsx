import { useHover } from '@react-native-aria/interactions';
import React, { forwardRef, useMemo, useState } from 'react';
import { TextInputProps, ViewStyle } from 'react-native';
import { Box, RNTextInput } from '../../primitives';
import { useTheme } from '../../theme';
import { RenderPropType } from '../../utils';
import { createComponent } from '../../utils/createComponent';

export type InputVariants = 'outline' | 'subtle' | 'underline' | 'ghost';
export type InputSizes = 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends TextInputProps {
  /**
   * The Input Container Wrapper
   */
  textInputWrapper: ViewStyle;
  /**
   * A Component Theme of How the input should look
   * @default outline
   */
  variant: InputVariants;
  /**
   * The Component Size of How large should the input be?
   * @default md
   */
  size: InputSizes;
  /**
   * Prefix for the Input component
   */
  prefix: RenderPropType;
  /**
   * Suffix for the Input component
   */
  suffix: RenderPropType;
  /**
   * Set to True, if the value of the input is invalid.
   * @default false
   */
  invalid: boolean;
}

const RNInput: React.FC<Partial<InputProps>> = forwardRef<
  typeof RNTextInput,
  Partial<InputProps>
>((props, ref) => {
  const [isFocussed, setIsFocussed] = useState(false);

  const handleOnFocus = () => setIsFocussed(true);
  const handleOnBlur = () => setIsFocussed(false);

  const { isHovered, hoverProps } = useHover({}, ref);

  const {
    size = 'md',
    variant = 'outline',
    textInputWrapper,
    prefix,
    suffix,
    invalid = false,
    editable = true,
  } = props;
  const tailwind = useTheme();
  const inputTheme = useTheme('input');

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    ref?.current?.setNativeProps?.({
      text: props.value,
    });
  }, [ref, props.value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = React.useMemo(() => props.value, []);

  const placeholderTextColor = useMemo(() => {
    return tailwind.getColor(
      editable
        ? isHovered
          ? inputTheme.base.variant[variant].placeholder.hover
          : isFocussed
          ? inputTheme.base.variant[variant].placeholder.focus
          : inputTheme.base.variant[variant].placeholder.common
        : inputTheme.base.variant[variant].placeholder.disabled
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocussed, isHovered, editable]);

  return (
    <Box
      ref={ref}
      style={[tailwind.style([inputTheme.wrapper]), textInputWrapper]}
    >
      <RNTextInput
        style={[
          tailwind.style(
            inputTheme.base.size[size].common,
            !prefix || !suffix ? inputTheme.base.size[size].withoutAddon : '',
            inputTheme.base.variant[variant].common,
            isHovered ? inputTheme.base.variant[variant].hover : '',
            isFocussed ? inputTheme.base.variant[variant].focus : '',
            invalid ? inputTheme.base.variant[variant].invalid : '',
            editable ? '' : inputTheme.base.variant[variant].disabled
          ),
        ]}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholderTextColor={placeholderTextColor}
        {...props}
        defaultValue={defaultValue}
        {...hoverProps}
      />
    </Box>
  );
});

RNInput.displayName = 'RNInput';

export const Input = createComponent(RNInput, {
  shouldMemo: true,
});
