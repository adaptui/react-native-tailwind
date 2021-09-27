import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import type { Dict } from 'src/utils/types';
import { createComponent } from '../../utils/createComponent';

export type LibraryTextProps = Dict<unknown>;

export type TextProps = RNTextProps & LibraryTextProps;

export const Text = createComponent<TextProps>(RNText, { shouldMemo: true });
