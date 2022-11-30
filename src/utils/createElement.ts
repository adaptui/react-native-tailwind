import React from "react";

interface CreateElementProps<Props extends {}> {
  componentType: React.ElementType;
  props: Props;
}

export function createElement<Props extends {}>({
  componentType,
  props,
}: CreateElementProps<Props>): React.ReactElement<
  Props,
  string | React.JSXElementConstructor<unknown>
> {
  return React.createElement(componentType, props);
}
