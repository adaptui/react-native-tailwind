// stories/Switch.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { Switch } from '../Switch';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Meta = ComponentMeta<typeof Switch>;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type SwitchStoryType = ComponentStory<typeof Switch>;

export default {
  title: 'components/Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 items-center justify-center')}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Default: SwitchStoryType = () => <Switch />;

Default.args = {
  size: 'xl',
};

export const Customised: SwitchStoryType = (args) => <Switch {...args} />;

Customised.args = {
  size: 'xl',
  onStateColor: '#1D5244',
  offStateColor: '#BC6447',
  onStatePressedColor: '#339178',
  offStatePressedColor: '#d39885',
};

export const IOS: SwitchStoryType = (args) => <Switch {...args} />;

IOS.args = {
  size: 'xl',
  onStateColor: '#35C759',
  offStateColor: '#E8E9EB',
  onStatePressedColor: '#5bd379',
  offStatePressedColor: '#d6d8db',
};
