import { Text as RNText, TextProps as RNTextProps } from "react-native";

import { createComponent } from "../../utils/createComponent";
import type { Dict } from "../../utils/types";

export type LibraryTextProps = Dict<unknown>;

export type TextProps = RNTextProps & LibraryTextProps;

export const Text = createComponent<TextProps>(RNText, { shouldMemo: true });
