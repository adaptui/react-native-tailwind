import { passProps, RenderPropType } from 'react-native-system';

interface CreateButtonIconOptions {
  icon: RenderPropType;
  iconFill?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createButtonIcon = (options: CreateButtonIconOptions) => {
  const { icon, iconFill } = options;
  return passProps(icon, {
    fill: iconFill,
  });
};
