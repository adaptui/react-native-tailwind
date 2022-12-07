import React from "react";

interface CreateElementProps<Props extends {}> {
  componentType: React.ComponentType<Props>;
  props: Props;
}

export function createElement<Props extends {}>({
  componentType,
  props,
}: CreateElementProps<Props>): React.ReactElement<Props> {
  return React.createElement(componentType, props);
}
