import { pick } from 'lodash';
import { ButtonProps } from './buttonTypes';
import { BUTTON_BASIC_KEYS } from './__keys';

interface ButtonPropsReturnType {
  _buttonProps: ButtonProps;
}

export const useButtonProps = (
  props: React.PropsWithChildren<Partial<ButtonProps>>
): ButtonPropsReturnType => {
  props = { size: 'md', variant: 'solid', ...props };
  const _buttonBasicProps = pick(props, BUTTON_BASIC_KEYS) as ButtonProps;
  return { _buttonProps: _buttonBasicProps };
};
