// stories/Spinner.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { Spinner } from '../Spinner';

export default {
  title: 'feedback/Spinner/Basic',
  component: Spinner,
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 items-center justify-center')}>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

Default.args = {};

export const ExtraSmall: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

ExtraSmall.args = {
  size: 'xs',
};

export const Small: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

Small.args = {
  size: 'sm',
};

export const Medium: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

Medium.args = {
  size: 'md',
};

export const Large: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

Large.args = {
  size: 'lg',
};

export const ExtraLarge: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

ExtraLarge.args = {
  size: 'xl',
};

export const StrokeVisible: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

StrokeVisible.args = {
  size: 'xl',
  track: 'visible',
};

export const Customised: ComponentStory<typeof Spinner> = () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Spinner
      size={'xs'}
      style={tailwind.style(
        'border-indigo-600 border-b-indigo-300 border-l-indigo-300 my-5'
      )}
    />
    <Spinner
      size={'sm'}
      style={tailwind.style(
        'border-red-600 rounded-md border-b-red-300 border-l-red-300 my-5'
      )}
    />
    <Spinner
      size={'md'}
      style={tailwind.style(
        'border-yellow-600 border-b-yellow-300 border-l-yellow-300 my-5'
      )}
    />
    <Spinner
      size={'lg'}
      style={tailwind.style(
        'my-5 rounded-none border-green-600 border-b-green-300 border-l-green-300'
      )}
    />
    <Spinner
      size={'xl'}
      style={tailwind.style(
        'my-5 border-blue-600 border-b-blue-300 border-l-blue-300'
      )}
    />
  </Box>
);

Customised.args = {};
