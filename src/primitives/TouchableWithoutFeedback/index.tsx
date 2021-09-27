import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native';
import type { Dict } from 'src/utils/types';
import { createComponent } from '../../utils/createComponent';

export type LibraryTouchableWithoutFeedbackProps = Dict<unknown>;

export type TouchableWithoutFeedbackProps =
  LibraryTouchableWithoutFeedbackProps & RNTouchableWithoutFeedbackProps;

export const TouchableWithoutFeedback =
  createComponent<TouchableWithoutFeedbackProps>(RNTouchableWithoutFeedback, {
    shouldMemo: true,
  });
