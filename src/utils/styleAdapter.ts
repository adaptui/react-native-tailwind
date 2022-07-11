import {
  Falsy,
  PressableStateCallbackType,
  RegisteredStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

import { runIfFn } from "./react";

export const styleAdapter = (
  style:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>),
  touchState?: PressableStateCallbackType,
): ViewStyle | Falsy | RegisteredStyle<ViewStyle> => {
  const _style = touchState ? runIfFn(style, touchState) : style;
  const __style = !Array.isArray(_style) ? _style : StyleSheet.flatten(_style);
  return __style as ViewStyle | Falsy | RegisteredStyle<ViewStyle>;
};
