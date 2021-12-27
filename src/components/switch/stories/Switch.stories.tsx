// stories/Switch.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { Switch } from '../Switch';

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
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = () => <Switch />;

Default.args = {
  size: 'xl',
};

export const Customised: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);

Customised.args = {
  size: 'xl',
  onStateColor: '#1D5244',
  offStateColor: '#BC6447',
  onStatePressedColor: '#339178',
  offStatePressedColor: '#d39885',
};
