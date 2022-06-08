import { pick } from "lodash";

import { SpinnerLibProps, SpinnerProps } from "../../index";

import { SPINNER_LIB_KEYS } from "./__keys";

interface SpinnerPropsReturnType {
  _spinnerLibProps: SpinnerLibProps;
}

export const useSpinnerProps = (
  props: React.PropsWithChildren<Partial<SpinnerProps>>,
): SpinnerPropsReturnType => {
  props = { size: "md", track: "transparent", ...props };
  const _spinnerLibProps = pick(props, SPINNER_LIB_KEYS) as SpinnerLibProps;
  return { _spinnerLibProps };
};
