import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils";

export const Check: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4903 2.23596C10.8038 2.5067 10.8385 2.9803 10.5677 3.29379L5.13915 9.5795C4.99843 9.74244 4.79448 9.83705 4.5792 9.83925C4.36393 9.84145 4.15808 9.75104 4.01406 9.59101L1.44263 6.73387C1.16554 6.42599 1.1905 5.95177 1.49838 5.67468C1.80626 5.39758 2.28048 5.42254 2.55757 5.73042L4.55993 7.95526L9.43249 2.31336C9.70322 1.99987 10.1768 1.96522 10.4903 2.23596Z"
        fill={fill}
      />
    </Svg>
  );
};
