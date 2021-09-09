import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { createComponent } from '../../utils/createComponent';
import { createElement } from '../../utils/createElement';

export type LibraryTextProps = {};

export type TextProps = RNTextProps & LibraryTextProps;

export const Text = createComponent<TextProps>(
  (props) => {
    return createElement({
      componentType: RNText,
      props: props,
    });
  },
  { shouldMemo: true }
);
