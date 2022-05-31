import { TextInput as DTextInput, TextInputProps } from 'react-native';
import { createComponent } from '../../utils/createComponent';

export type RNTextInputProps = TextInputProps;

export const RNTextInput = createComponent<RNTextInputProps>(DTextInput, {
  shouldMemo: true,
});
