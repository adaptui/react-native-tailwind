// stories/TooltipBasic.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { TooltipBasic } from './TooltipBasic.component';

type Meta = ComponentMeta<typeof TooltipBasic>;
type TagStoryType = ComponentStory<typeof TooltipBasic>;

export default {
  title: 'popups/Tooltip/Basic',
  component: TooltipBasic,
  parameters: {
    options: { showPanel: true },
  },
  argTypes: {
    placement: {
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <Box
        style={tailwind.style(
          'flex-1 w-full h-full items-center justify-center'
        )}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Default: TagStoryType = (args) => <TooltipBasic {...args} />;

Default.args = {
  content: 'Add your information',
};

export const Top: TagStoryType = (args) => <TooltipBasic {...args} />;

Top.args = {
  content: 'Add your information',
  placement: 'top',
};

export const Right: TagStoryType = (args) => <TooltipBasic {...args} />;

Right.args = {
  content: 'Add your information',
  placement: 'right',
};

export const Bottom: TagStoryType = (args) => <TooltipBasic {...args} />;

Bottom.args = {
  content: 'Add your information',
  placement: 'bottom',
};

export const Left: TagStoryType = (args) => <TooltipBasic {...args} />;

Left.args = {
  content: 'Add your information',
  placement: 'left',
};
