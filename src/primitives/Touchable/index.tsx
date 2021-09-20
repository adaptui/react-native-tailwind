import { Pressable, PressableProps } from 'react-native';
import { createComponent } from '../../utils/createComponent';

export type LibraryTouchableProps = {};

export type TouchableProps = LibraryTouchableProps & PressableProps;

export const Touchable = createComponent<TouchableProps>(Pressable, {
  shouldMemo: true,
});
