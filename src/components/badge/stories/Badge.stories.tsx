// stories/Badge.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { BadgeSizes, BadgeTheme, BadgeVariants } from '../Badge';
import BadgeBasic from './Badge.component';

type Meta = ComponentMeta<typeof BadgeBasic>;
type BadgeStoryType = ComponentStory<typeof BadgeBasic>;

const badgeVariants = [
  'solid',
  'outline',
  'subtle',
] as unknown as BadgeVariants[];
const badgeTheme = [
  'primary',
  'secondary',
  'default',
  'success',
  'danger',
] as unknown as BadgeTheme[];

const badgeSizes = ['sm', 'md', 'lg'] as unknown as BadgeSizes[];

export default {
  title: 'Components/Badge/Basic',
  component: BadgeBasic,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    size: {
      options: badgeSizes,
      control: { type: 'radio' },
    },
    themeColor: {
      options: badgeTheme,
      control: { type: 'radio' },
    },
    variant: {
      options: badgeVariants,
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 items-center justify-center')}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Default: BadgeStoryType = (args) => <BadgeBasic {...args} />;

export const Small: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Small.args = {
  size: 'sm',
};

export const Medium: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Medium.args = {
  size: 'md',
};

export const Large: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Large.args = {
  size: 'lg',
};

export const Solid: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Solid.args = {
  variant: 'solid',
};

export const Subtle: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Subtle.args = {
  variant: 'subtle',
};

export const Outline: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Outline.args = {
  variant: 'outline',
};

export const Primary: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Primary.args = {
  themeColor: 'primary',
};

export const Secondary: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Secondary.args = {
  themeColor: 'secondary',
};

export const Danger: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Danger.args = {
  themeColor: 'danger',
};

export const Success: BadgeStoryType = (args) => <BadgeBasic {...args} />;
Success.args = {
  themeColor: 'success',
};
