// stories/ProgressBar.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import ProgressBasic from './ProgressBasic.component';

export default {
  title: 'Feedback/Progress/Basic',
  component: ProgressBasic,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    trackColor: {
      control: { type: 'color' },
    },
    progressTrackColor: {
      control: { type: 'color' },
    },
  },
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 items-center justify-center')}>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof ProgressBasic>;

export const Default: ComponentStory<typeof ProgressBasic> = (args) => (
  <ProgressBasic {...args} />
);

Default.args = {};

export const Customised: ComponentStory<typeof ProgressBasic> = (args) => (
  <ProgressBasic {...args} />
);

Customised.args = {
  progressTrackColor: '#35C759',
  trackColor: '#b9ecc6',
};

export const Small: ComponentStory<typeof ProgressBasic> = (args) => (
  <ProgressBasic {...args} />
);
Small.args = {
  size: 'sm',
};

export const Medium: ComponentStory<typeof ProgressBasic> = (args) => (
  <ProgressBasic {...args} />
);
Medium.args = {
  size: 'md',
};

export const Large: ComponentStory<typeof ProgressBasic> = (args) => (
  <ProgressBasic {...args} />
);
Large.args = {
  size: 'lg',
};

export const ExtraLarge: ComponentStory<typeof ProgressBasic> = (args) => (
  <ProgressBasic {...args} />
);
ExtraLarge.args = {
  size: 'xl',
};
