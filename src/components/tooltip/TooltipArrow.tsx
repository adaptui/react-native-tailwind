import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { createComponent } from '../../utils';

const RNTooltipArrow = () => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 5" fill="none">
      <Path
        d="M11.1466 0C16.3801 0 -4.3808 0 0.853735 0C2.7834 0 4.5931 5 6.00014 5C7.40719 5 9.23748 0 11.1466 0Z"
        fill="#27272A"
      />
    </Svg>
  );
};

RNTooltipArrow.displayName = 'RNTooltipArrow';

export const TooltipArrow = createComponent(RNTooltipArrow, {
  shouldMemo: true,
});
