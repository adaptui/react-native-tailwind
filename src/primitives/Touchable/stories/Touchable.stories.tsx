// stories/Box.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { Text } from '../../';
import { useTheme } from '../../../index';
import { Touchable } from '../Touchable';

export default {
  title: 'primitives/Touchable',
  component: Touchable,
  argTypes: {
    onPress: { action: 'pressed' },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} as ComponentMeta<typeof Touchable>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Default: ComponentStory<typeof Touchable> = (args) => {
  const tailwind = useTheme();
  return (
    <Touchable {...args}>
      <Text style={tailwind.style('text-center text-white')}>
        Touchable Wrapped Text
      </Text>
    </Touchable>
  );
};

Default.args = {
  style: { padding: 4, backgroundColor: 'gray', borderRadius: 8, margin: 32 },
};
