import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../utils';
import { Icon } from '../icon';
import { TooltipPlacement } from './Tooltip';

const UpArrow: React.FC<IconProps> = ({ fill = '#27272A' }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 5" fill="none">
      <Path
        d="M0.853444 5C-4.38012 5 16.3808 5 11.1463 5C9.2166 5 7.4069 1.7719e-06 5.99986 1.52589e-06C4.59281 8.03032e-07 2.76252 5 0.853444 5Z"
        fill={fill}
      />
    </Svg>
  );
};

const LeftArrow: React.FC<IconProps> = ({ fill = '#27272A' }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 5 12" fill="none">
      <Path
        d="M5 0.853444C5 -4.38012 5 16.3808 5 11.1463C5 9.2166 1.53071e-07 7.4069 2.14575e-07 5.99985C-2.00758e-07 4.59281 5 2.76252 5 0.853444Z"
        fill={fill}
      />
    </Svg>
  );
};

const RightArrow: React.FC<IconProps> = ({ fill = '#27272A' }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 5 12" fill="none">
      <Path
        d="M3.73052e-08 0.853444C-1.91461e-07 -4.38012 7.16027e-07 16.3808 4.87219e-07 11.1463C4.0287e-07 9.2166 5 7.4069 5 5.99985C5 4.59281 1.20754e-07 2.76252 3.73052e-08 0.853444Z"
        fill={fill}
      />
    </Svg>
  );
};

const DownArrow: React.FC<IconProps> = ({ fill = '#27272A' }) => {
  return (
    <Svg width="12" height="5" viewBox="0 0 12 5" fill="none">
      <Path
        d="M11.1466 0C16.3801 0 -4.3808 0 0.853735 0C2.7834 0 4.5931 5 6.00014 5C7.40719 5 9.23748 0 11.1466 0Z"
        fill={fill}
      />
    </Svg>
  );
};

interface TooltipArrowProps {
  placement: TooltipPlacement;
}

const TooltipArrow: React.FC<TooltipArrowProps> = ({ placement }) => {
  if (placement.split(' ')[0] === 'top') {
    return <Icon icon={<DownArrow />} size={12} />;
  } else if (placement.split(' ')[0] === 'left') {
    return <Icon icon={<RightArrow />} size={12} />;
  } else if (placement.split(' ')[0] === 'right') {
    return <Icon icon={<LeftArrow />} size={12} />;
  } else if (placement.split(' ')[0] === 'bottom') {
    return <Icon icon={<UpArrow />} size={12} />;
  } else {
    return null;
  }
};

export default TooltipArrow;
