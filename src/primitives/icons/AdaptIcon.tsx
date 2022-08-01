import Svg, { Path } from "react-native-svg";

import { useTheme } from "../../theme";
import { cx } from "../../utils";
import {
  As,
  createComponentType,
  createElement,
  createHook,
  Props,
} from "../../utils/system";
import { BoxOptions, useBox } from "../box";

import { fallbackIcon } from "./__utils";

export const useAdaptIcon = createHook<AdaptIconOptions>(
  ({ d, pathFill = "#000", ...props }) => {
    console.log("%cprops", "color: #ffa280", props);
    const _viewBox = props.viewBox ?? fallbackIcon.viewBox;
    const fallback = d ? <Path fill={pathFill} d={d} /> : fallbackIcon.children;
    const children = props.children ?? fallback;

    const iconStyles = useTheme("icon");
    const className = cx(iconStyles.base, props.className);

    props = {
      ...props,
      viewBox: _viewBox,
      children,
      className,
    };

    props = useBox(props);

    return props;
  },
);

export const AdaptIcon = createComponentType<AdaptIconOptions>(props => {
  const htmlProps = useAdaptIcon(props);

  return createElement(Svg, htmlProps);
}, "AdaptIcon");

export type AdaptIconOptions<T extends As = typeof Svg> = BoxOptions<T> & {
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * Fill color for the AdaptIcon Component.
   * @default "#000"
   */
  pathFill?: string;
};

export type AdaptIconProps<T extends As = typeof Svg> = Props<
  AdaptIconOptions<T>
>;
