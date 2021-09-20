import { View, ViewProps as RNViewProps } from 'react-native';
import { createComponent } from '../../utils/createComponent';

export type LibraryBoxProps = {};

export type BoxProps = RNViewProps & LibraryBoxProps;

export const Box = createComponent<BoxProps>(View, { shouldMemo: true });
