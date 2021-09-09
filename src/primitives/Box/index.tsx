import { View, ViewProps as RNViewProps } from 'react-native';
import { createComponent } from '../../utils/createComponent';
import { createElement } from '../../utils/createElement';

export type LibraryBoxProps = {};

export type BoxProps = RNViewProps & LibraryBoxProps;

export const Box = createComponent<BoxProps>(
  (props) => {
    return createElement({
      componentType: View,
      props: props,
    });
  },
  { shouldMemo: true }
);
