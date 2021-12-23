import * as React from 'react';
import { Badge, BadgeProps } from '../Badge';

export type BadgeBasicProps = BadgeProps;

export const BadgeBasic: React.FC<Partial<BadgeBasicProps>> = (props) => {
  return <Badge {...props}>Beta</Badge>;
};

export default BadgeBasic;
