import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

export const useBoxElement = (
  style?: ViewStyle,
  props?: ViewProps,
  children?:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
    | JSX.Element[]
    | JSX.Element
) => {
  return React.createElement(View, { ...props, ...style }, children);
};
