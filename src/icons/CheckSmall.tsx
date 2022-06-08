import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils";

export const CheckSmall: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.60453 2.95886C9.87622 3.1935 9.90625 3.60396 9.67161 3.87564L5.36269 8.86492C5.24074 9.00613 5.06398 9.08812 4.87741 9.09003C4.69083 9.09194 4.51244 9.01358 4.38762 8.87489L2.34655 6.60704C2.1064 6.34021 2.12803 5.92922 2.39487 5.68907C2.6617 5.44892 3.07269 5.47055 3.31283 5.73739L4.86071 7.45724L8.68774 3.02594C8.92238 2.75425 9.33284 2.72422 9.60453 2.95886Z"
        fill={fill}
      />
    </Svg>
  );
};
