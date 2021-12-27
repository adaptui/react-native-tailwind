// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { CaretRight, Clock, Close } from '../../../assets';
import { Box } from '../../../primitives/Box';
import { Icon } from '../../icon';
import { ButtonSizes, ButtonVariants } from '../buttonTypes';
import { ButtonBasic } from './Button.component';

type Meta = ComponentMeta<typeof ButtonBasic>;
type ButtonStoryType = ComponentStory<typeof ButtonBasic>;

const button_sizes: ButtonSizes[] = ['sm', 'md', 'lg', 'xl'];
const button_variants: ButtonVariants[] = [
  'outline',
  'ghost',
  'solid',
  'subtle',
];

export default {
  title: 'Components/Button/Basic',
  component: ButtonBasic,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    size: {
      options: button_sizes,
      control: { type: 'radio' },
    },
    variant: {
      options: button_variants,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
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

export const Default: ButtonStoryType = (args) => <ButtonBasic {...args} />;

export const Small: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Small.args = { size: 'sm' };

export const Medium: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Medium.args = { size: 'md' };

export const Large: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Large.args = { size: 'lg' };

export const ExtraLarge: ButtonStoryType = (args) => <ButtonBasic {...args} />;
ExtraLarge.args = { size: 'xl' };

export const Solid: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Solid.args = { variant: 'solid' };

export const Subtle: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Subtle.args = { variant: 'subtle' };

export const Outline: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Outline.args = { variant: 'outline' };

export const Ghost: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Ghost.args = { variant: 'ghost' };

export const IconOnly: ButtonStoryType = (args) => <ButtonBasic {...args} />;
IconOnly.args = {
  icon: <Icon icon={<Close />} />,
};

export const Suffix: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Suffix.args = { suffix: <Icon icon={<CaretRight />} /> };

export const Prefix: ButtonStoryType = (args) => <ButtonBasic {...args} />;
Prefix.args = { prefix: <Icon icon={<Clock />} /> };

export const PrefixSuffix: ButtonStoryType = (args) => (
  <ButtonBasic {...args} />
);
PrefixSuffix.args = {
  prefix: <Icon icon={<Clock />} />,
  suffix: <Icon icon={<CaretRight />} />,
};

export const Emoji: ButtonStoryType = (args) => (
  <ButtonBasic {...args}>{'\u2728'}</ButtonBasic>
);
