import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../utils/types';

export const Search: React.FC<IconProps> = ({ fill = '#52525B' }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 5C1.75 3.20507 3.20507 1.75 5 1.75C6.79493 1.75 8.25 3.20507 8.25 5C8.25 5.88836 7.89357 6.69348 7.31592 7.28014C7.3098 7.28586 7.30376 7.29171 7.29779 7.29767C7.29182 7.30365 7.28597 7.3097 7.28024 7.31582C6.69357 7.89353 5.88841 8.25 5 8.25C3.20507 8.25 1.75 6.79493 1.75 5ZM7.78661 8.84715C7.00387 9.4151 6.04105 9.75 5 9.75C2.37665 9.75 0.25 7.62335 0.25 5C0.25 2.37665 2.37665 0.25 5 0.25C7.62335 0.25 9.75 2.37665 9.75 5C9.75 6.04098 9.41514 7.00375 8.84725 7.78647L11.5305 10.4697C11.8233 10.7626 11.8233 11.2374 11.5305 11.5303C11.2376 11.8232 10.7627 11.8232 10.4698 11.5303L7.78661 8.84715Z"
        fill={fill}
      />
    </Svg>
  );
};
