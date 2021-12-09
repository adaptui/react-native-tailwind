import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'react-native-system';

export const CaretLeft: React.FC<IconProps> = ({ fill = '#52525B' }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.9743 1.80542C7.72877 1.54352 7.31743 1.53025 7.05554 1.77578L3.05554 5.52578C2.92446 5.64866 2.8501 5.82031 2.8501 5.99998C2.8501 6.17964 2.92446 6.3513 3.05554 6.47418L7.05554 10.2242C7.31743 10.4697 7.72877 10.4564 7.9743 10.1945C8.21982 9.93265 8.20655 9.5213 7.94466 9.27578L4.45047 5.99998L7.94466 2.72418C8.20655 2.47865 8.21982 2.06731 7.9743 1.80542Z"
        fill={fill}
      />
    </Svg>
  );
};
