import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils/types";

export const Filter: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.351562 3.00156C0.351562 2.64258 0.642577 2.35156 1.00156 2.35156H11.0016C11.3605 2.35156 11.6516 2.64258 11.6516 3.00156C11.6516 3.36055 11.3605 3.65156 11.0016 3.65156H1.00156C0.642577 3.65156 0.351562 3.36055 0.351562 3.00156ZM2.35156 6.00156C2.35156 5.64258 2.64258 5.35156 3.00156 5.35156H9.00156C9.36055 5.35156 9.65156 5.64258 9.65156 6.00156C9.65156 6.36055 9.36055 6.65156 9.00156 6.65156H3.00156C2.64258 6.65156 2.35156 6.36055 2.35156 6.00156ZM5.00156 8.35156C4.64258 8.35156 4.35156 8.64258 4.35156 9.00156C4.35156 9.36055 4.64258 9.65156 5.00156 9.65156H7.00156C7.36055 9.65156 7.65156 9.36055 7.65156 9.00156C7.65156 8.64258 7.36055 8.35156 7.00156 8.35156H5.00156Z"
        fill={fill}
      />
    </Svg>
  );
};
