import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

export const useTextElement = (
  style?: TextStyle,
  props?: TextProps,
  children?:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
    | string
) => {
  return React.createElement(Text, { ...props, ...style }, children);
};
