import { Pressable, PressableProps } from "react-native";

import { createComponent } from "../../utils/createComponent";
import type { Dict } from "../../utils/types";

export type LibraryTouchableProps = Dict<unknown>;

export type TouchableProps = LibraryTouchableProps & PressableProps;

export const Touchable = createComponent<TouchableProps>(Pressable, {
  shouldMemo: true,
});
