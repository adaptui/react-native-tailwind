import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils/types";

export const AddSmall: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.65502 2.65C6.65502 2.29101 6.36401 2 6.00502 2C5.64604 2 5.35502 2.29101 5.35502 2.65V5.35502H2.65C2.29101 5.35502 2 5.64604 2 6.00502C2 6.36401 2.29101 6.65502 2.65 6.65502H5.35502V9.3547C5.35502 9.71368 5.64604 10.0047 6.00502 10.0047C6.36401 10.0047 6.65502 9.71368 6.65502 9.3547V6.65502H9.3547C9.71368 6.65502 10.0047 6.36401 10.0047 6.00502C10.0047 5.64604 9.71368 5.35502 9.3547 5.35502H6.65502V2.65Z"
        fill={fill}
      />
    </Svg>
  );
};
