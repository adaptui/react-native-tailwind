import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils/types";

export const Timeless: React.FC<IconProps> = ({ fill = "#000000" }) => {
  return (
    <Svg viewBox="0 0 38 29" width="100%" height="100%" fill="none">
      <Path
        d="M30.475.896C28.716-.55 9.067-.02 7.52.896 5.973 1.81-.246 11.818.008 12.838.718 15.696 16.163 29 19 29c2.592 0 18.1-13.052 18.987-16.162.322-1.13-5.755-10.498-7.513-11.942zm-4.487 11.081H23.99V8.974h-3.998v8.01h2.999v2.001h-7.997v-2.002h3V8.974h-4v3.003h-1.998V6.972h13.993v5.005z"
        fill={fill}
      />
    </Svg>
  );
};

export default Timeless;
