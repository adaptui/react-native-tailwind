import { pick } from 'lodash';
import {
  ButtonLibraryProps,
  ButtonOptionProps,
  ButtonProps,
} from './buttonTypes';
import { BUTTON_BASIC_KEYS, BUTTON_OPTION_KEYS } from './__keys';

interface ButtonPropsReturnType {
  _buttonProps: ButtonLibraryProps;
  _buttonOptions: ButtonOptionProps;
}

export const useButtonProps = (
  props: React.PropsWithChildren<Partial<ButtonProps>>
): ButtonPropsReturnType => {
  props = { size: 'md', variant: 'solid', ...props };
  const _buttonBasicProps = pick(
    props,
    BUTTON_BASIC_KEYS
  ) as ButtonLibraryProps;
  const _buttonOptionProps = pick(
    props,
    BUTTON_OPTION_KEYS
  ) as ButtonOptionProps;
  return {
    _buttonProps: _buttonBasicProps,
    _buttonOptions: _buttonOptionProps,
  };
};
