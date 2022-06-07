import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils";

export const Equals: React.FC<IconProps> = ({ fill = "#52525B" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.0001 3.34998C2.64111 3.34998 2.3501 3.64099 2.3501 3.99998C2.3501 4.35896 2.64111 4.64998 3.0001 4.64998H9.0001C9.35908 4.64998 9.6501 4.35896 9.6501 3.99998C9.6501 3.64099 9.35908 3.34998 9.0001 3.34998H3.0001ZM3.0001 7.34998C2.64111 7.34998 2.3501 7.64099 2.3501 7.99998C2.3501 8.35896 2.64111 8.64998 3.0001 8.64998H9.0001C9.35908 8.64998 9.6501 8.35896 9.6501 7.99998C9.6501 7.64099 9.35908 7.34998 9.0001 7.34998H3.0001Z"
        fill={fill}
      />
    </Svg>
  );
};
