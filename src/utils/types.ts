import type { PathProps } from "react-native-svg";

export type Dict<T = unknown> = Record<string, T>;

export type DeepDictionary<K> = {
  [P in keyof K]: K[P] extends Dict
    ? DeepDictionary<K[P]> & { [x: string]: unknown }
    : K[P];
};

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type RenderPropType<T = unknown> =
  | React.ReactNode
  | ((args: T) => JSX.Element | React.ReactNode);

export type IconProps = PathProps;

export type AnyObject = Record<keyof any, any>;

export type RenderProp<P = AnyObject> = (props: P) => React.ReactNode;
