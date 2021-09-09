import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native';
import { createComponent } from '../../utils/createComponent';
import { createElement } from '../../utils/createElement';

export type LibraryTouchableWithoutFeedbackProps = {};

export type TouchableWithoutFeedbackProps =
  LibraryTouchableWithoutFeedbackProps & RNTouchableWithoutFeedbackProps;

export const TouchableWithoutFeedback =
  createComponent<TouchableWithoutFeedbackProps>(
    (touchableProps) => {
      return createElement({
        componentType: RNTouchableWithoutFeedback,
        props: touchableProps,
      });
    },
    { shouldMemo: true }
  );
