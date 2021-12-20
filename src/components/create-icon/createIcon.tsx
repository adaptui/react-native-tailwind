import { ViewStyle } from 'react-native';
import { passProps, RenderPropType } from '../../index';

interface CreateIconOptions {
  icon: RenderPropType;
  iconFill?: string;
  iconStyle?: ViewStyle;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createIcon = (options: CreateIconOptions) => {
  const { icon, iconFill, iconStyle } = options;
  return passProps(icon, {
    color: iconFill,
    style: iconStyle,
  });
};
