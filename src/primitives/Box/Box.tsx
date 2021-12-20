import { View, ViewProps as RNViewProps } from 'react-native';
import type { Dict } from '../../../src/utils/types';
import { createComponent } from '../../utils/createComponent';

export type LibraryBoxProps = Dict<unknown>;

export type BoxProps = RNViewProps & LibraryBoxProps;

export const Box = createComponent<BoxProps>(View, { shouldMemo: true });
