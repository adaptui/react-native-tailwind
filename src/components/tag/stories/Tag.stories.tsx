// stories/Tag.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { CaretRight, Clock } from '../../../assets';
import { Box } from '../../../primitives/Box';
import { Icon } from '../../icon';
import { TagBasic } from './TagBasic.component';

type Meta = ComponentMeta<typeof TagBasic>;
type TagStoryType = ComponentStory<typeof TagBasic>;

export default {
  title: 'Components/Tag/Basic',
  component: TagBasic,
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
} as Meta;

export const Default: TagStoryType = (args) => <TagBasic {...args} />;

Default.args = {
  size: 'lg',
  variant: 'solid',
};

export const Small: TagStoryType = (args) => <TagBasic {...args} />;

Small.args = {
  size: 'sm',
  variant: 'solid',
};

export const Medium: TagStoryType = (args) => <TagBasic {...args} />;

Medium.args = {
  size: 'md',
  variant: 'solid',
};

export const Large: TagStoryType = (args) => <TagBasic {...args} />;

Large.args = {
  size: 'lg',
  variant: 'solid',
};

export const ExtraLarge: TagStoryType = (args) => <TagBasic {...args} />;

ExtraLarge.args = {
  size: 'xl',
  variant: 'solid',
};

export const Solid: TagStoryType = (args) => <TagBasic {...args} />;

Solid.args = {
  size: 'lg',
  variant: 'solid',
};

export const Outline: TagStoryType = (args) => <TagBasic {...args} />;

Outline.args = {
  size: 'lg',
  variant: 'outline',
};

export const Subtle: TagStoryType = (args) => <TagBasic {...args} />;

Subtle.args = {
  size: 'lg',
  variant: 'subtle',
};

export const Prefix: TagStoryType = (args) => <TagBasic {...args} />;

Prefix.args = {
  size: 'lg',
  variant: 'subtle',
  prefix: <Icon icon={<Clock />} />,
};

export const Suffix: TagStoryType = (args) => <TagBasic {...args} />;

Suffix.args = {
  size: 'lg',
  variant: 'subtle',
  suffix: <Icon icon={<CaretRight />} />,
};

export const WithSuffixPrefix: TagStoryType = (args) => <TagBasic {...args} />;

WithSuffixPrefix.args = {
  size: 'lg',
  variant: 'solid',
  suffix: <Icon icon={<CaretRight />} />,
  prefix: <Icon icon={<Clock />} />,
};
