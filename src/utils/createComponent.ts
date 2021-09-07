import * as React from 'react';

export function createComponent<Props>(
  Component: React.FunctionComponent<Props>,
  options?: { shouldMemo?: boolean }
) {
  const component = (props: Props) => {
    // @ts-ignore
    return React.createElement(Component, props, props?.children);
  };
  let ForwardedComponent = React.forwardRef(component);
  if (options?.shouldMemo) {
    // @ts-ignore
    ForwardedComponent = React.memo(ForwardedComponent);
  }
  return ForwardedComponent;
}
