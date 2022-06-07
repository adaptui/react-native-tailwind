import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../../utils/types";

export const Dash: React.FC<IconProps> = ({ fill = "#52525B" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.3501 5.99998C2.3501 5.64099 2.64111 5.34998 3.0001 5.34998H9.0001C9.35908 5.34998 9.6501 5.64099 9.6501 5.99998C9.6501 6.35896 9.35908 6.64998 9.0001 6.64998H3.0001C2.64111 6.64998 2.3501 6.35896 2.3501 5.99998Z"
        fill={fill}
      />
    </Svg>
  );
};
