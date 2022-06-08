import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils";

export const Equals: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00156 3.35156C2.64258 3.35156 2.35156 3.64258 2.35156 4.00156C2.35156 4.36055 2.64258 4.65156 3.00156 4.65156H9.00156C9.36055 4.65156 9.65156 4.36055 9.65156 4.00156C9.65156 3.64258 9.36055 3.35156 9.00156 3.35156H3.00156ZM3.00156 7.35156C2.64258 7.35156 2.35156 7.64258 2.35156 8.00156C2.35156 8.36055 2.64258 8.65156 3.00156 8.65156H9.00156C9.36055 8.65156 9.65156 8.36055 9.65156 8.00156C9.65156 7.64258 9.36055 7.35156 9.00156 7.35156H3.00156Z"
        fill={fill}
      />
    </Svg>
  );
};
