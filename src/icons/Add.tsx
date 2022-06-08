import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils/types";

export const Add: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.65156 2.00156C6.65156 1.64258 6.36055 1.35156 6.00156 1.35156C5.64258 1.35156 5.35156 1.64258 5.35156 2.00156V5.35156H2.00156C1.64258 5.35156 1.35156 5.64258 1.35156 6.00156C1.35156 6.36055 1.64258 6.65156 2.00156 6.65156H5.35156V10.0016C5.35156 10.3605 5.64258 10.6516 6.00156 10.6516C6.36055 10.6516 6.65156 10.3605 6.65156 10.0016V6.65156H10.0016C10.3605 6.65156 10.6516 6.36055 10.6516 6.00156C10.6516 5.64258 10.3605 5.35156 10.0016 5.35156H6.65156V2.00156Z"
        fill={fill}
      />
    </Svg>
  );
};
