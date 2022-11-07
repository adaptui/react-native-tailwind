import React, {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react";

import { Dict } from "./types";

export function createComponent<O extends Options>(
  render: (props: Props<O>) => ReactElement,
) {
  const Role = (props: Props<O>, ref: React.Ref<any>) =>
    render({ ref, ...props });
  return forwardRef(Role) as unknown as Component<O>;
}

export function createComponentType<O extends ComponentOptions>(
  render: (props: Props<O>) => React.ReactElement,
  type: string,
) {
  const Role = (props: Props<O>, ref: React.Ref<any>) =>
    render({ ref, ...props, __TYPE__: type });

  const Component = forwardRef(Role) as unknown as ComponentProps<O>;
  Component.defaultProps = { __TYPE__: type };

  return Component;
}

export function createElement(Type: ElementType, props: HTMLProps<Options>) {
  const { as: As, wrapElement, ...rest } = props;
  let element: ReactElement;
  if (As && typeof As !== "string") {
    element = <As {...rest} />;
  } else if (isRenderProp(props.children)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, ...otherProps } = rest;
    element = props.children(otherProps) as ReactElement;
  } else if (As) {
    element = <As {...rest} />;
  } else {
    element = <Type {...rest} />;
  }
  if (wrapElement) {
    return wrapElement(element);
  }
  return element;
}

function isRenderProp(children: any): children is AriakitRenderProp {
  return typeof children === "function";
}

export function createHook<O extends Options>(
  useProps: (props: Props<O>) => HTMLProps<O>,
) {
  const useRole = (props: Props<O> = {} as Props<O>) => {
    const htmlProps = useProps(props);
    const copy = {} as typeof htmlProps;
    for (const prop in htmlProps) {
      if (hasOwnProperty(htmlProps, prop) && htmlProps[prop] !== undefined) {
        copy[prop] = htmlProps[prop];
      }
    }
    return copy;
  };
  return useRole as Hook<O>;
}

/**
 * Checks whether `prop` is an own property of `obj` or not.
 */
export function hasOwnProperty<T extends AnyObject>(
  object: T,
  prop: keyof any,
): prop is keyof T {
  return Object.prototype.hasOwnProperty.call(object, prop);
}

export type ComponentProps<O> = Component<O> & {
  defaultProps?: { __TYPE__: string };
};

export type ComponentOptions<T extends As = any> = Options<T> & {
  __TYPE__?: string;
};

/**
 * A component hook that supports the `as` prop and the `children` prop as a
 * function.
 * @template O Options
 * @example
 * type ButtonHook = Hook<Options<"button">>;
 */
export type Hook<O extends Options> = {
  <T extends As = NonNullable<O["as"]>>(
    props?: Omit<O, "as"> & Omit<HTMLProps<Options<T>>, keyof O> & Options<T>,
  ): HTMLProps<Options<T>>;
  displayName?: string;
};

/**
 * Props with the `as` prop.
 * @template T The `as` prop
 * @example
 * type ButtonOptions = Options<"button">;
 */
export type Options<T extends As = any> = { as?: T };

/**
 * Options & HTMLProps
 * @template O Options
 * @example
 * type ButtonProps = Props<Options<"button">>;
 */
export type Props<O extends Options> = O & HTMLProps<O>;

export type Component<O extends Options> = {
  <T extends As>(
    props: Omit<O, "as"> &
      Omit<HTMLProps<Options<T>>, keyof O> &
      Required<Options<T>>,
  ): JSX.Element | null;
  (props: Props<O>): JSX.Element | null;
  displayName?: string;
};

/**
 * The `as` prop.
 * @template P Props
 */
export type As<P = any> = ElementType<P>;

/**
 * Props that automatically includes HTML props based on the `as` prop.
 * @template O Options
 * @example
 * type ButtonHTMLProps = HTMLProps<Options<"button">>;
 */
export type HTMLProps<O extends Options> = {
  wrapElement?: WrapElement;
  children?: Children;
  [index: `data-${string}`]: unknown;
} & Omit<ComponentPropsWithRef<NonNullable<O["as"]>>, keyof O | "children">;

/**
 * The `wrapElement` prop.
 */
export type WrapElement = (element: ReactElement) => ReactElement;

/**
 * The `children` prop that supports a function.
 * @template T Element type.
 */
export type Children<T = any> =
  | ReactNode
  | AriakitRenderProp<HTMLAttributes<T> & RefAttributes<T>>;

/**
 * Render prop type.
 * @template P Props
 * @example
 * const children: RenderProp = (props) => <div {...props} />;
 */
export type AriakitRenderProp<P = AnyObject> = (props: P) => ReactNode;

/**
 * Any object.
 */
export type AnyObject = Record<keyof any, any>;

// Function assertions
export function isFunction(value: any): value is Function {
  return typeof value === "function";
}

export function runIfFnChildren<T, U>(
  valueOrFn: T,
  ...args: U[]
): React.ReactNode | React.ReactNode[] {
  if (!isFunction(valueOrFn)) {
    return valueOrFn as unknown as React.ReactNode;
  }

  if (valueOrFn(...args).type.toString() !== "Symbol(react.fragment)") {
    return [valueOrFn(...args)];
  }

  return valueOrFn(...args).props.children;
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(
  children: React.ReactNode | React.ReactNode[],
) {
  return React.Children.toArray(children as React.ReactNode).filter(child =>
    React.isValidElement(child),
  );
}

export const getComponentProps = <T extends any, P>(
  componentMaps: Dict<string>,
  children: RenderProp<T>,
  props: P,
) => {
  const normalizedChildren = runIfFnChildren(children, props);
  const validChildren = getValidChildren(normalizedChildren);
  const componentProps: AnyObject = {};
  const finalChildren: React.ReactNode[] = [];

  if (validChildren.length > 0) {
    validChildren.forEach(function (child) {
      // @ts-ignore
      if (componentMaps[child?.props?.__TYPE__]) {
        // @ts-ignore
        componentProps[componentMaps[child?.props?.__TYPE__]] = child.props;
      } else {
        finalChildren.push(child);
      }
    });
  } else {
    finalChildren.push(normalizedChildren);
  }

  return { componentProps, finalChildren };
};

export function runIfFn<T extends AnyObject = AnyObject>(
  component: RenderProp<T>,
  props: T,
): React.ReactNode {
  return isFunction(component) ? component({ ...props }) : component;
}

// Merge library & user prop
export const passProps = <T extends AnyObject = AnyObject, S = AnyObject>(
  component: RenderProp<S>,
  stateProps: S,
  props?: T,
) => {
  return React.isValidElement(component)
    ? React.cloneElement(component, {
        ...props,
        // @ts-ignore
        ...component?.props,
      })
    : runIfFn(component, { ...stateProps, ...props });
};

export declare type RenderProp<T = AnyObject> =
  | React.ReactNode
  | AriakitRenderProp<T>;
