import { pick } from 'lodash';
import { SpinnerLibProps, SpinnerProps } from 'react-native-system';
import { SPINNER_LIB_KEYS } from './__keys';

interface SpinnerPropsReturnType {
  _spinnerProps: SpinnerLibProps;
}

export const useSpinnerProps = (
  props: React.PropsWithChildren<Partial<SpinnerProps>>
): SpinnerPropsReturnType => {
  props = { size: 'md', stroke: 'transparent', ...props };
  const _spinnerBasicProps = pick(props, SPINNER_LIB_KEYS) as SpinnerLibProps;
  return { _spinnerProps: _spinnerBasicProps };
};
