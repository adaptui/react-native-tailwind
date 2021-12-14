import { ViewStyle } from 'react-native';
import { passProps, RenderPropType } from 'react-native-system';

interface CreateButtonIconOptions {
  icon: RenderPropType;
  iconFill?: string;
  iconStyle?: ViewStyle;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createButtonIcon = (options: CreateButtonIconOptions) => {
  const { icon, iconFill, iconStyle } = options;
  return passProps(icon, {
    color: iconFill,
    style: iconStyle,
  });
};
