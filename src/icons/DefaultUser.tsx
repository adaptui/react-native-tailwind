import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

import { IconProps } from "../utils";

export const DefaultUser: React.FC<IconProps> = ({ fill = "#52525B" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <G clipPath="url(#clip0_205_794)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.74996 2.99998C4.74996 2.30962 5.3096 1.74998 5.99996 1.74998C6.69031 1.74998 7.24996 2.30962 7.24996 2.99998C7.24996 3.69033 6.69031 4.24998 5.99996 4.24998C5.3096 4.24998 4.74996 3.69033 4.74996 2.99998ZM5.99996 0.249976C4.48117 0.249976 3.24996 1.48119 3.24996 2.99998C3.24996 4.51876 4.48117 5.74998 5.99996 5.74998C7.51874 5.74998 8.74996 4.51876 8.74996 2.99998C8.74996 1.48119 7.51874 0.249976 5.99996 0.249976ZM5.99996 6.24998C5.26541 6.24998 4.53544 6.3656 3.85063 6.59253C3.16593 6.81941 2.53467 7.15488 1.9959 7.5859C1.62822 7.88004 1.31001 8.21353 1.04939 8.57815C0.48594 9.36643 0.601539 10.2418 1.0692 10.8797C1.50953 11.4802 2.25166 11.8789 3.04145 11.9579C5.00888 12.1546 6.99103 12.1546 8.95847 11.9579C9.74826 11.8789 10.4904 11.4802 10.9307 10.8797C11.3984 10.2418 11.514 9.36643 10.9505 8.57815C10.6899 8.21353 10.3717 7.88004 10.004 7.5859C8.91931 6.71814 7.47746 6.24998 5.99996 6.24998ZM4.32245 8.01639C4.8509 7.84128 5.42129 7.74998 5.99996 7.74998C7.17462 7.74998 8.2763 8.12467 9.06697 8.7572C9.33256 8.96967 9.5539 9.20374 9.73021 9.45041C9.8161 9.57057 9.83108 9.66099 9.8285 9.72484C9.82566 9.79533 9.79841 9.88716 9.721 9.99274C9.55788 10.2152 9.22072 10.4242 8.80921 10.4653C6.94103 10.6521 5.05888 10.6521 3.1907 10.4653C2.77919 10.4242 2.44204 10.2152 2.27891 9.99274C2.2015 9.88716 2.17425 9.79533 2.17141 9.72484C2.16883 9.66099 2.18381 9.57057 2.2697 9.45041C2.44601 9.20374 2.66736 8.96967 2.93294 8.7572C3.32276 8.44534 3.79389 8.19154 4.32245 8.01639Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_205_794">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
