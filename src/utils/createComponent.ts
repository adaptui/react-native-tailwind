import * as React from 'react';
import type { PropsWithChildren } from 'example/node_modules/@types/react';
import { createElement } from './createElement';

export function createComponent<Props>(
  componentType: React.FunctionComponent<Props>,
  options?: { shouldMemo?: boolean }
) {
  const _component = (props: Props, ref: any) => {
    return createElement<Props>({
      componentType,
      props: { ...props, elementRef: ref },
    });
  };
  let ForwardedComponent = React.forwardRef<unknown, PropsWithChildren<Props>>(
    _component
  );
  if (options?.shouldMemo) {
    // @ts-ignore
    ForwardedComponent = React.memo(ForwardedComponent);
  }
  return ForwardedComponent;
}
