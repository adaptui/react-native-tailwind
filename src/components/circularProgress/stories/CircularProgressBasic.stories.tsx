import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { CircularProgressSizes } from '../CircularProgress';
import { Box } from '../../../primitives/Box';
import CircularProgressBasic from './CircularProgressBasic.component';
import { ScrollView } from 'react-native';

type Meta = ComponentMeta<typeof CircularProgressBasic>;
type ProgressStory = ComponentStory<typeof CircularProgressBasic>;

export default {
  title: 'Feedback/CircularProgress/Basic',
  component: CircularProgressBasic,
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
} as Meta;

export const Small: ProgressStory = (args) => (
  <CircularProgressBasic {...args} />
);
Small.args = { size: 'sm' };

export const Medium: ProgressStory = (args) => (
  <CircularProgressBasic {...args} />
);
Medium.args = { size: 'md' };

export const Large: ProgressStory = (args) => (
  <CircularProgressBasic {...args} />
);
Large.args = { size: 'lg' };

export const ExtraLarge: ProgressStory = (args) => (
  <CircularProgressBasic {...args} />
);
ExtraLarge.args = { size: 'xl' };

export const WithHint: ProgressStory = (args) => (
  <CircularProgressBasic {...args} />
);
WithHint.args = { hint: true };

export const Customised: ProgressStory = (args) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Box style={tailwind.style('flex items-center justify-between')}>
      {['sm', 'md', 'lg', 'xl'].map((item) => (
        <Box key={item} style={tailwind.style('py-2')}>
          <CircularProgressBasic
            {...args}
            key={item}
            size={item as CircularProgressSizes}
            hint
            progressTrackColor="#5849DD"
            trackColor="#cecaf5"
          />
        </Box>
      ))}
    </Box>
    <Box style={tailwind.style('flex items-center justify-between')}>
      {['sm', 'md', 'lg', 'xl'].map((item) => (
        <Box key={item} style={tailwind.style('py-2')}>
          <CircularProgressBasic
            {...args}
            key={item}
            size={item as CircularProgressSizes}
            hint
            progressTrackColor="#40A16A"
            trackColor="#b9e3cb"
          />
        </Box>
      ))}
    </Box>
    <Box style={tailwind.style('flex items-center justify-between')}>
      {['sm', 'md', 'lg', 'xl'].map((item) => (
        <Box key={item} style={tailwind.style('py-2')}>
          <CircularProgressBasic
            {...args}
            key={item}
            size={item as CircularProgressSizes}
            hint
            progressTrackColor="#F89286"
            trackColor="#fddad6"
          />
        </Box>
      ))}
    </Box>
    <Box style={tailwind.style('flex items-center justify-between')}>
      {['sm', 'md', 'lg', 'xl'].map((item) => (
        <Box key={item} style={tailwind.style('py-2')}>
          <CircularProgressBasic
            {...args}
            key={item}
            size={item as CircularProgressSizes}
            hint
            progressTrackColor="#CE0C4A"
          />
        </Box>
      ))}
    </Box>
  </ScrollView>
);
