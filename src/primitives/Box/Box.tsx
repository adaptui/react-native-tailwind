import { View, ViewProps as RNViewProps } from "react-native";

import { createComponent } from "../../utils/createComponent";
import type { Dict } from "../../utils/types";

export type LibraryBoxProps = Dict<unknown>;

export type BoxProps = RNViewProps & LibraryBoxProps;

export const Box = createComponent<BoxProps>(View, { shouldMemo: true });
