// stories/Box.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '../Text';

export default {
  title: 'primitives/Text',
  component: Text,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Default: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The font size of this
    text is 32.
  </Text>
);

Default.args = {
  style: { fontSize: 32 },
};
