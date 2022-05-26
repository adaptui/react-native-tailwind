// stories/Input.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Close, Search } from '../../../assets';
import { Box } from '../../../primitives/Box';
import { Icon } from '../../icon';
import { InputSizes, InputVariants } from '../Input';
import { InputBasic } from './Input.component';

type Meta = ComponentMeta<typeof InputBasic>;
type InputStoryType = ComponentStory<typeof InputBasic>;

const input_sizes: InputSizes[] = ['sm', 'md', 'lg', 'xl'];
const input_variants: InputVariants[] = [
  'outline',
  'ghost',
  'underline',
  'subtle',
];

export default {
  title: 'Components/Input/Basic',
  component: InputBasic,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    size: {
      options: input_sizes,
      control: { type: 'radio' },
    },
    variant: {
      options: input_variants,
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

export const Default: InputStoryType = (args) => <InputBasic {...args} />;

export const Small: InputStoryType = (args) => <InputBasic {...args} />;
Small.args = { size: 'sm' };

export const Medium: InputStoryType = (args) => <InputBasic {...args} />;
Medium.args = { size: 'md' };

export const Large: InputStoryType = (args) => <InputBasic {...args} />;
Large.args = { size: 'lg' };

export const ExtraLarge: InputStoryType = (args) => <InputBasic {...args} />;
ExtraLarge.args = { size: 'xl' };

export const Underline: InputStoryType = (args) => <InputBasic {...args} />;
Underline.args = { variant: 'underline' };

export const Subtle: InputStoryType = (args) => <InputBasic {...args} />;
Subtle.args = { variant: 'subtle' };

export const Outline: InputStoryType = (args) => <InputBasic {...args} />;
Outline.args = { variant: 'outline' };

export const Ghost: InputStoryType = (args) => <InputBasic {...args} />;
Ghost.args = { variant: 'ghost' };

export const Suffix: InputStoryType = (args) => <InputBasic {...args} />;
Suffix.args = { suffix: <Icon icon={<Close />} /> };

export const Prefix: InputStoryType = (args) => <InputBasic {...args} />;
Prefix.args = { prefix: <Icon icon={<Search />} /> };

export const PrefixSuffix: InputStoryType = (args) => <InputBasic {...args} />;
PrefixSuffix.args = {
  prefix: <Icon icon={<Search />} />,
  suffix: <Icon icon={<Close />} />,
};

export const Invalid: InputStoryType = (args) => <InputBasic {...args} />;

Invalid.args = {
  invalid: true,
};

export const Loading: InputStoryType = (args) => <InputBasic {...args} />;

Loading.args = {
  loading: true,
};
