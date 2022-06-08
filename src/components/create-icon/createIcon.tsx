import { ViewStyle } from "react-native";

import { passProps, RenderPropType } from "../../utils";

interface CreateIconOptions {
  icon: RenderPropType;
  iconFill?: string;
  iconStyle?: ViewStyle;
  iconSize?: number;
}

export const createIcon = (options: CreateIconOptions) => {
  const { icon, iconFill, iconStyle, iconSize } = options;
  return passProps(icon, {
    color: iconFill,
    style: iconStyle,
    size: iconSize,
  });
};
