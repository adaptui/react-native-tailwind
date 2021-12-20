import React from 'react';

import { Button } from '../../src/components/button/index';

export default {
  title: 'components/MyButton',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed' },
  },
};

export const Basic = (args) => <Button {...args}>Continue</Button>;

Basic.args = {
  size: 'xl',
};
