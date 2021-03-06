import React from "react";

interface CreateElementProps<Props> {
  componentType:
    | React.FunctionComponent<Props>
    | React.ComponentClass<Props>
    | string;
  props: Props;
}

export function createElement<Props>({
  componentType,
  props,
}: CreateElementProps<Props>): React.ReactElement<
  Props,
  string | React.JSXElementConstructor<unknown>
> {
  return React.createElement(componentType, props);
}
