import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { createComponent } from '../../utils/createComponent';

export type LibraryTextProps = {};

export type TextProps = RNTextProps & LibraryTextProps;

export const Text = createComponent<TextProps>(RNText, { shouldMemo: true });
