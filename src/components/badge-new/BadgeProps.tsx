import { useMemo } from "react";

import { getComponentProps, RenderProp } from "../../utils/system";

import { BadgeTextProps } from "./BadgeText";
import {
  BadgeUIState,
  BadgeUIStateProps,
  useBadgeUIState,
} from "./BadgeUIState";
import { BadgeWrapperProps } from "./BadgeWrapper";

const componentMap = {
  BadgeWrapper: "wrapperProps",
  BadgeText: "textProps",
};

export function useBadgeProps(props: BadgeNewProps): BadgePropsReturn {
  let { size, themeColor, variant, children, ...restProps } = props;

  const uiState = useBadgeUIState({
    size,
    themeColor,
    variant,
  });
  let uiProps: BadgeUIProps = useMemo(() => ({ ...uiState }), [uiState]);

  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    uiProps,
  );
  const _finalChildren = componentProps?.textProps?.children || finalChildren;
  const wrapperProps: BadgeWrapperProps = useMemo(
    () => ({
      ...uiProps,
      ...restProps,
      ...componentProps.wrapperProps,
    }),
    [componentProps.wrapperProps, restProps, uiProps],
  );

  console.log("%c_finalChildren", "color: #0088cc", _finalChildren);
  const textProps: BadgeTextProps = useMemo(
    () => ({
      ...uiProps,
      ...componentProps.textProps,
      children: _finalChildren,
    }),
    [componentProps.textProps, uiProps, _finalChildren],
  );

  return { uiProps, wrapperProps, textProps };
}

export type BadgeUIProps = BadgeUIState & {};

export type BadgeNewProps = Omit<BadgeWrapperProps, "children"> &
  BadgeUIStateProps & {
    children?: RenderProp<BadgeUIProps>;
  };

export type BadgePropsReturn = {
  uiProps: BadgeUIProps;
  wrapperProps: BadgeWrapperProps;
  textProps: BadgeTextProps;
};
