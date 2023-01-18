import React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "../utils/types";

export const Dribble: React.FC<IconProps> = ({ fill = "#525252" }) => {
  return (
    <Svg viewBox="0 0 64 64" width="100%" height="100%" fill="none">
      <Path
        d="M32 6C17.641 6 6 17.641 6 32s11.641 26 26 26 26-11.641 26-26S46.359 6 32 6zm17.488 12.673a21.882 21.882 0 014.5 12.862c-4.48-.847-9.661-1.261-15.157-.152a98.919 98.919 0 00-2.086-4.547c6.467-2.705 10.587-6.057 12.743-8.163zm-2.722-2.967c-1.871 1.808-5.719 4.956-11.907 7.499A102.046 102.046 0 0026.8 10.627 21.905 21.905 0 0132 10a21.914 21.914 0 0114.766 5.706zm-23.942-3.693a97.76 97.76 0 018.23 12.563c-5.393 1.703-12.17 2.839-20.502 2.548 1.527-6.724 6.142-12.285 12.272-15.111zM10 32c0-.3.011-.599.023-.896 1.112.046 2.208.076 3.271.076 7.911 0 14.417-1.22 19.684-2.948a95.974 95.974 0 011.953 4.193c-6.267 2.099-12.812 6.412-19.101 14.473C12.214 42.976 10 37.743 10 32zm8.803 17.59c5.859-7.593 11.865-11.596 17.655-13.475 2.097 5.409 3.593 10.831 4.384 16.024A21.878 21.878 0 0132 54a21.885 21.885 0 01-13.197-4.41zm25.761.454c-.854-4.859-2.281-9.884-4.195-14.897 4.723-.823 9.239-.41 13.34.407-.976 5.981-4.371 11.156-9.145 14.49z"
        fill={fill}
      />
    </Svg>
  );
};