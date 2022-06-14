import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from "react-native";

import { createComponent } from "../../utils/createComponent";
import type { Dict } from "../../utils/types";

export type LibraryTouchableWithoutFeedbackProps = Dict<unknown>;

export type TouchableWithoutFeedbackProps =
  LibraryTouchableWithoutFeedbackProps & RNTouchableWithoutFeedbackProps;

export const TouchableWithoutFeedback =
  createComponent<TouchableWithoutFeedbackProps>(RNTouchableWithoutFeedback, {
    shouldMemo: true,
  });
