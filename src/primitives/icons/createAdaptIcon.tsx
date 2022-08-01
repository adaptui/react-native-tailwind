// Credits to https://github.com/chakra-ui/chakra-ui/tree/main/packages/icon
import * as React from "react";
import { forwardRef } from "react";
import { View } from "react-native";

import { AdaptIcon, AdaptIconProps } from "./AdaptIcon";

export interface CreateAdaptIconOptions {
  /**
   * The icon `svg` viewBox
   *
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   *
   * @type React.ReactNode | React.ReactNode[]
   */
  path?: React.ReactNode | React.ReactNode[];
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * Fill color for the AdaptIcon Component.
   * @default "#000"
   */
  pathFill?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: AdaptIconProps;
}

export function createAdaptIcon(options: CreateAdaptIconOptions) {
  const {
    path,
    viewBox = "0 0 12 12",
    displayName,
    defaultProps = {},
    ...restOptions
  } = options;

  const AdaptIconComponent = forwardRef<View, AdaptIconProps>((props, ref) => {
    return (
      <AdaptIcon
        ref={ref}
        viewBox={viewBox}
        {...restOptions}
        {...defaultProps}
        {...props}
      >
        {path}
      </AdaptIcon>
    );
  });

  AdaptIconComponent.displayName = displayName;

  return AdaptIconComponent;
}
