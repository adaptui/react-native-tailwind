import * as React from 'react';
import { AvatarProps } from '../avatarPropTypes';
import { Avatar } from '../Avatar';

export type AvatarBasicProps = AvatarProps;

export const AvatarBasic: React.FC<Partial<AvatarBasicProps>> = (props) => {
  return <Avatar {...props} />;
};

export default AvatarBasic;
