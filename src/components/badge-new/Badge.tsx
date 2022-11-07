import * as React from "react";
import { View } from "react-native";

import { BadgeNewProps, useBadgeProps } from "./BadgeProps";
import { BadgeText } from "./BadgeText";
import { BadgeWrapper } from "./BadgeWrapper";

export const BadgeNew = React.forwardRef<View, BadgeNewProps>((props, ref) => {
  const { wrapperProps, textProps } = useBadgeProps(props);

  return (
    <BadgeWrapper ref={ref} {...wrapperProps}>
      <BadgeText {...textProps} />
    </BadgeWrapper>
  );
});

BadgeNew.displayName = "BadgeNew";
