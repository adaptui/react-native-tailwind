import { Pressable, PressableProps } from 'react-native';
import { createComponent } from '../../utils/createComponent';
import { createElement } from '../../utils/createElement';

export type LibraryTouchableProps = {};

export type TouchableProps = LibraryTouchableProps & PressableProps;

export const Touchable = createComponent<TouchableProps>(
  (touchableProps) => {
    return createElement({
      componentType: Pressable,
      props: touchableProps,
    });
  },
  { shouldMemo: true }
);
