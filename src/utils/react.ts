import React from "react";

import { Dict, RenderPropType } from "../index";

function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

// Merge library & user prop
export const passProps = (component: RenderPropType, props?: Dict) => {
  return React.isValidElement(component)
    ? React.cloneElement(component, {
        ...props,
        ...component.props,
      })
    : runIfFn(component, { ...props });
};

export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
