import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../index';

export const CaretRight: React.FC<IconProps> = ({ fill = '#52525B' }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.0259 1.80542C4.27143 1.54352 4.68277 1.53025 4.94466 1.77578L8.94466 5.52578C9.07573 5.64866 9.1501 5.82031 9.1501 5.99998C9.1501 6.17964 9.07573 6.3513 8.94466 6.47418L4.94466 10.2242C4.68277 10.4697 4.27143 10.4564 4.0259 10.1945C3.78038 9.93265 3.79365 9.5213 4.05554 9.27578L7.54973 5.99998L4.05554 2.72418C3.79365 2.47865 3.78038 2.06731 4.0259 1.80542Z"
        fill={fill}
      />
    </Svg>
  );
};
