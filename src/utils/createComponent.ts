import type { PropsWithChildren } from "react";
import * as React from "react";

import { createElement } from "./createElement";

export function createComponent<Props extends {}>(
  componentType: React.ComponentType<Props>,
  options?: { shouldMemo?: boolean },
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
    _component,
  );
  if (options?.shouldMemo) {
    // @ts-ignore
    ForwardedComponent = React.memo(ForwardedComponent);
  }
  return ForwardedComponent as unknown as
    | React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>
    | typeof componentType;
}
