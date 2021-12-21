// stories/Box.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Box } from '../Box';

export default {
  title: 'components/Box',
  component: Box,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} as ComponentMeta<typeof Box>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Basic: ComponentStory<typeof Box> = (args) => <Box {...args} />;

Basic.args = {
  style: { backgroundColor: 'blue', height: 50 },
};
