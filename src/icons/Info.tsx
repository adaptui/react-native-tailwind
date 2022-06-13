import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils";

export const Info: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99814 1.46016C3.4552 1.46016 1.39375 3.52161 1.39375 6.06454C1.39375 8.60747 3.4552 10.6689 5.99814 10.6689C8.54107 10.6689 10.6025 8.60747 10.6025 6.06454C10.6025 3.52161 8.54107 1.46016 5.99814 1.46016ZM0.09375 6.06454C0.09375 2.80364 2.73723 0.160156 5.99814 0.160156C9.25904 0.160156 11.9025 2.80364 11.9025 6.06454C11.9025 9.32544 9.25904 11.9689 5.99814 11.9689C2.73723 11.9689 0.09375 9.32544 0.09375 6.06454ZM6.00156 5.46484C6.36055 5.46484 6.65156 5.75586 6.65156 6.11484V8.61484C6.65156 8.97383 6.36055 9.26484 6.00156 9.26484C5.64258 9.26484 5.35156 8.97383 5.35156 8.61484V6.11484C5.35156 5.75586 5.64258 5.46484 6.00156 5.46484ZM6.75156 3.76328C6.75156 4.1775 6.41578 4.51328 6.00156 4.51328C5.58735 4.51328 5.25156 4.1775 5.25156 3.76328C5.25156 3.34907 5.58735 3.01328 6.00156 3.01328C6.41578 3.01328 6.75156 3.34907 6.75156 3.76328Z"
        fill={fill}
      />
    </Svg>
  );
};