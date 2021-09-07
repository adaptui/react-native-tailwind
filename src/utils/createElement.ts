import React from 'react';

interface CreateElementProps {
  props: any;
  children: React.ReactNode;
  component: string | React.ComponentType;
}

export function createElement({
  props,
  children,
  component,
}: CreateElementProps) {
  return React.createElement(component, props, children);
}
