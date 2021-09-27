/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import type { PropsWithChildren } from 'example/node_modules/@types/react';
import { createElement } from './createElement';

export function createComponent<Props>(
  componentType:
    | React.FunctionComponent<Props>
    | React.ComponentClass<Props>
    | string,
  options?: { shouldMemo?: boolean }
):
  | React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>
  | typeof componentType {
  const _component = (props: Props, ref: unknown) => {
    return createElement<Props>({
      componentType,
      props: { ...props, ref },
    });
  };
  let ForwardedComponent = React.forwardRef<unknown, PropsWithChildren<Props>>(
    _component
  );
  if (options?.shouldMemo) {
    // @ts-ignore
    ForwardedComponent = React.memo(ForwardedComponent);
  }
  return ForwardedComponent as unknown as
    | React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>
    | typeof componentType;
}
