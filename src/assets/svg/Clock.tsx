import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../utils/types';

export const Clock: React.FC<IconProps> = ({ fill = '#52525B' }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.36104 5.99994C1.36104 3.43794 3.43794 1.36104 5.99994 1.36104C8.56193 1.36104 10.6388 3.43794 10.6388 5.99994C10.6388 8.56193 8.56193 10.6388 5.99994 10.6388C3.43794 10.6388 1.36104 8.56193 1.36104 5.99994ZM5.99994 0.0610352C2.71997 0.0610352 0.0610352 2.71997 0.0610352 5.99994C0.0610352 9.2799 2.71997 11.9388 5.99994 11.9388C9.2799 11.9388 11.9388 9.2799 11.9388 5.99994C11.9388 2.71997 9.2799 0.0610352 5.99994 0.0610352ZM6.6501 3.99995C6.6501 3.64096 6.35908 3.34995 6.0001 3.34995C5.64111 3.34995 5.3501 3.64096 5.3501 3.99995V6.49995C5.3501 6.71727 5.45871 6.92023 5.63954 7.04078L7.13954 8.04078C7.43824 8.23991 7.8418 8.15919 8.04093 7.8605C8.24006 7.56181 8.15935 7.15824 7.86065 6.95911L6.6501 6.15208V3.99995Z"
        fill={fill}
      />
    </Svg>
  );
};
