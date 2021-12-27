import * as React from 'react';

import { Button } from '../Button';
import { ButtonProps } from '../buttonTypes';

export type ButtonBasicProps = ButtonProps;

export const ButtonBasic: React.FC<Partial<ButtonBasicProps>> = (props) => {
  return <Button {...props}>{props.children || 'Continue'}</Button>;
};

export default ButtonBasic;
