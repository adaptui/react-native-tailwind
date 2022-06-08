import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils/types";

export const CaretDown: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.807 4.02737C1.54511 4.27289 1.53184 4.68423 1.77737 4.94613L5.52737 8.94613C5.65025 9.0772 5.8219 9.15157 6.00156 9.15157C6.18123 9.15157 6.35288 9.0772 6.47576 8.94613L10.2258 4.94613C10.4713 4.68423 10.458 4.27289 10.1961 4.02737C9.93423 3.78184 9.52289 3.79511 9.27737 4.057L6.00156 7.55119L2.72576 4.057C2.48024 3.79511 2.0689 3.78184 1.807 4.02737Z"
        fill={fill}
      />
    </Svg>
  );
};
