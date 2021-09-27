import { Pressable, PressableProps } from 'react-native';
import type { Dict } from 'src/utils/types';
import { createComponent } from '../../utils/createComponent';

export type LibraryTouchableProps = Dict<unknown>;

export type TouchableProps = LibraryTouchableProps & PressableProps;

export const Touchable = createComponent<TouchableProps>(Pressable, {
  shouldMemo: true,
});
