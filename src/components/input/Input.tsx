import { useHover } from '@react-native-aria/interactions';
import React, { forwardRef, useMemo, useRef, useState } from 'react';
import { TextInputProps, ViewStyle } from 'react-native';
import { createIcon, Icon } from '..';
import { Box, RNTextInput } from '../../primitives';
import { useTheme } from '../../theme';
import { RenderPropType, runIfFn } from '../../utils';
import { createComponent } from '../../utils/createComponent';
import { mergeRefs } from '../../utils/mergeRefs';
import { Spinner } from '../spinner';
import { InputPrefix } from './InputPrefix';
import { InputSuffix } from './InputSuffix';

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
  /**
   * Set to True, if the input is loading.
   * @default false
   */
  loading: boolean;
}

interface DefaultInputSpinnerProps extends Pick<InputProps, 'size'> {
  spinnerStroke: ViewStyle;
}

export const DefaultInputSpinner = (
  state: DefaultInputSpinnerProps
): JSX.Element => {
  const { size, spinnerStroke } = state;
  return <Spinner size={size !== 'xl' ? 'xs' : 'md'} style={spinnerStroke} />;
};

const RNInput: React.FC<Partial<InputProps>> = forwardRef<
  typeof RNTextInput,
  Partial<InputProps>
>((props, ref) => {
  const [isFocussed, setIsFocussed] = useState(false);

  const handleOnFocus = () => setIsFocussed(true);
  const handleOnBlur = () => setIsFocussed(false);
  const inputRef = useRef<typeof RNTextInput>(null);
  const inputMergedRef = mergeRefs([ref, inputRef]);
  const { isHovered, hoverProps } = useHover({}, inputMergedRef);

  const {
    size = 'md',
    variant = 'outline',
    textInputWrapper,
    prefix,
    suffix,
    invalid = false,
    editable = true,
    loading,
  } = props;
  const tailwind = useTheme();
  const inputTheme = useTheme('input');

  const [suffixWidth, setSuffixWidth] = React.useState(0);
  const [prefixWidth, setPrefixWidth] = React.useState(0);

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

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    ref?.current?.setNativeProps?.({
      text: props.value,
    });
  }, [
    ref,
    props.value,
    suffixWidth,
    loading,
    prefixWidth,
    placeholderTextColor,
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = React.useMemo(() => props.value, []);

  const _prefix: InputProps['prefix'] = React.useMemo(() => {
    const inputPrefix =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      prefix?.type === Icon
        ? createIcon({
            icon: prefix,
            iconFill: tailwind.getColor(
              editable
                ? invalid
                  ? inputTheme.prefix.variant[variant].invalid
                  : isFocussed
                  ? inputTheme.prefix.variant[variant].focus
                  : isHovered
                  ? inputTheme.prefix.variant[variant].hover
                  : inputTheme.prefix.variant[variant].fill
                : inputTheme.prefix.variant[variant].disabled
            ),
            iconStyle: tailwind.style([
              inputTheme.prefix.variant[variant].common,
            ]),
            iconSize: size === 'xl' ? 16 : 12,
          })
        : prefix;
    return inputPrefix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    editable,
    loading,
    size,
    prefix,
    variant,
    invalid,
    isFocussed,
    isHovered,
  ]);

  const _suffix: InputProps['suffix'] = React.useMemo(() => {
    const inputSuffix =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      suffix?.type === Icon
        ? createIcon({
            icon: suffix,
            iconFill: tailwind.getColor(
              editable
                ? invalid
                  ? inputTheme.suffix.variant[variant].invalid
                  : isFocussed
                  ? inputTheme.suffix.variant[variant].focus
                  : isHovered
                  ? inputTheme.suffix.variant[variant].hover
                  : inputTheme.suffix.variant[variant].fill
                : inputTheme.suffix.variant[variant].disabled
            ),
            iconStyle: tailwind.style([
              inputTheme.suffix.variant[variant].common,
            ]),
            iconSize: size === 'xl' ? 16 : 12,
          })
        : suffix;

    const spinnerStroke = tailwind.style(
      editable
        ? invalid
          ? inputTheme.spinner.variant[variant].invalid
          : inputTheme.spinner.variant[variant].default
        : inputTheme.spinner.variant[variant].disabled
    );
    const inputLoading = runIfFn(DefaultInputSpinner, {
      size,
      spinnerStroke,
    });
    return loading ? inputLoading : inputSuffix;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    editable,
    loading,
    size,
    suffix,
    variant,
    invalid,
    isFocussed,
    isHovered,
  ]);

  return (
    <Box style={[tailwind.style([inputTheme.wrapper]), textInputWrapper]}>
      {_prefix && (
        <InputPrefix
          onLayout={(event) => setPrefixWidth(event.nativeEvent.layout.width)}
          size={size}
          variant={variant}
        >
          {_prefix}
        </InputPrefix>
      )}
      <RNTextInput
        style={[
          tailwind.style(
            inputTheme.base.size[size].common,
            !prefix || !suffix ? inputTheme.base.size[size].withoutAddon : '',
            inputTheme.base.variant[variant].common,
            isHovered ? inputTheme.base.variant[variant].hover : '',
            isFocussed ? inputTheme.base.variant[variant].focus : '',
            invalid ? inputTheme.base.variant[variant].invalid : '',
            editable ? '' : inputTheme.base.variant[variant].disabled,
            _prefix ? `pl-[${prefixWidth}px]` : '',
            _suffix ? `pr-[${suffixWidth}px]` : ''
          ),
        ]}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholderTextColor={placeholderTextColor}
        {...props}
        defaultValue={defaultValue}
        ref={inputMergedRef}
        {...hoverProps}
      />
      {_suffix && (
        <InputSuffix
          onLayout={(event) => setSuffixWidth(event.nativeEvent.layout.width)}
          size={size}
          variant={variant}
        >
          {_suffix}
        </InputSuffix>
      )}
    </Box>
  );
});

RNInput.displayName = 'RNInput';

export const Input = createComponent(RNInput, {
  shouldMemo: true,
});
