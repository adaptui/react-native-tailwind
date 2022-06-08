import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils/types";

export const Slash: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17667 10.8928C2.86578 10.7133 2.75926 10.3158 2.93875 10.0049L7.93875 1.34464C8.11825 1.03375 8.51578 0.927231 8.82667 1.10672C9.13756 1.28622 9.24408 1.68375 9.06459 1.99464L4.06459 10.6549C3.8851 10.9658 3.48756 11.0723 3.17667 10.8928Z"
        fill={fill}
      />
    </Svg>
  );
};
