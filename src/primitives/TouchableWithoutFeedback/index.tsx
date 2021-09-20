import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native';
import { createComponent } from '../../utils/createComponent';

export type LibraryTouchableWithoutFeedbackProps = {};

export type TouchableWithoutFeedbackProps =
  LibraryTouchableWithoutFeedbackProps & RNTouchableWithoutFeedbackProps;

export const TouchableWithoutFeedback =
  createComponent<TouchableWithoutFeedbackProps>(RNTouchableWithoutFeedback, {
    shouldMemo: true,
  });
