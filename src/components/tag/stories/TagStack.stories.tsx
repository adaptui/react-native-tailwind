import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Clock, Close } from '../../../assets';
import { TagSizes, TagVariant } from '../../../components/tag';
import { Box } from '../../../primitives/Box';
import { Icon } from '../../icon';
import { TagBasic } from './TagBasic.component';

type Meta = ComponentMeta<typeof TagBasic>;
type TagStoryType = ComponentStory<typeof TagBasic>;

export default {
  title: 'Components/Tag/Stack',
  component: TagBasic,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  decorators: [
    (Story) => (
      <Box style={tailwind.style('flex-1 justify-center items-start')}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const tagSizes: TagSizes[] = ['sm', 'md', 'lg', 'xl'];
const tagVariants: TagVariant[] = ['solid', 'subtle', 'outline'];

export const Default: TagStoryType = () => {
  return (
    <Box style={tailwind.style('')}>
      {tagSizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {tagVariants.map((variant) => {
              return (
                <TagBasic
                  key={variant}
                  size={size}
                  variant={variant}
                  touchableContainerStyle={tailwind.style('m-2')}
                />
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const Prefix: TagStoryType = () => {
  return (
    <Box style={tailwind.style('flex-col items-start')}>
      {tagSizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {tagVariants.map((variant) => {
              return (
                <TagBasic
                  key={variant}
                  size={size}
                  variant={variant}
                  prefix={<Icon icon={<Clock />} />}
                  touchableContainerStyle={tailwind.style('m-2')}
                />
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const Suffix: TagStoryType = () => {
  return (
    <Box style={tailwind.style('flex-col items-start')}>
      {tagSizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {tagVariants.map((variant) => {
              return (
                <TagBasic
                  key={variant}
                  size={size}
                  variant={variant}
                  suffix={<Icon icon={<Close />} />}
                  touchableContainerStyle={tailwind.style('m-2')}
                />
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const WithSuffixPrefix: TagStoryType = () => {
  return (
    <Box style={tailwind.style('flex-col items-start')}>
      {tagSizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {tagVariants.map((variant) => {
              return (
                <TagBasic
                  key={variant}
                  size={size}
                  variant={variant}
                  prefix={<Icon icon={<Clock />} />}
                  suffix={<Icon icon={<Close />} />}
                  touchableContainerStyle={tailwind.style('m-2')}
                />
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
