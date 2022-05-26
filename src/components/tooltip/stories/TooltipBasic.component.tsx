import * as React from 'react';
import { Button } from '../../button';
import { Tooltip, TooltipProps } from '../Tooltip';

export type TooltipBasicProps = TooltipProps;

export const TooltipBasic: React.FC<TooltipBasicProps> = (props) => {
  return (
    <Tooltip {...props}>
      <Button size="lg">Tooltip Trigger</Button>
    </Tooltip>
  );
};

export default TooltipBasic;
