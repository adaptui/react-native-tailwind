import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Box, Tag, TagSizes, TagVariant } from '../../../../../src';
import { Clock } from '../../../../../src/assets';

const tagStories = storiesOf('Tag', module);

const tagVariants = ['solid', 'subtle', 'outline'] as TagVariant[];
const tagSizes = ['sm', 'md', 'lg', 'xl'] as TagSizes[];

tagStories.add('Default', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Box style={tailwind.style('my-2')}>
      {tagSizes.map((size, index) => {
        return (
          <Box key={index} style={tailwind.style('flex flex-row')}>
            {tagVariants.map((variant, index) => {
              return (
                <Box key={index} style={tailwind.style('px-1 my-3')}>
                  <Tag size={size} variant={variant}>
                    Images
                  </Tag>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  </Box>
));

tagStories.add('Tag with Close Suffix', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Box style={tailwind.style('my-2')}>
      {tagSizes.map((size, index) => {
        return (
          <Box key={index} style={tailwind.style('flex flex-row')}>
            {tagVariants.map((variant, index) => {
              return (
                <Box key={index} style={tailwind.style('px-1 my-3')}>
                  <Tag closable={true} size={size} variant={variant}>
                    Images
                  </Tag>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  </Box>
));

tagStories.add('Tag with Prefix', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Box style={tailwind.style('my-2')}>
      {tagSizes.map((size, index) => {
        return (
          <Box key={index} style={tailwind.style('flex flex-row')}>
            {tagVariants.map((variant, index) => {
              return (
                <Box key={index} style={tailwind.style('px-1 my-3')}>
                  <Tag
                    disabled={boolean('disabled', false)}
                    prefix={<Clock />}
                    size={size}
                    variant={variant}
                  >
                    Images
                  </Tag>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  </Box>
));

tagStories.add('Tag Disabled', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Box style={tailwind.style('my-2')}>
      {tagSizes.map((size, index) => {
        return (
          <Box key={index} style={tailwind.style('flex flex-row')}>
            {tagVariants.map((variant, index) => {
              return (
                <Box key={index} style={tailwind.style('px-1 my-3')}>
                  <Tag disabled={true} size={size} variant={variant}>
                    Images
                  </Tag>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  </Box>
));

tagStories.add('Customised Tag', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Box style={tailwind.style('my-2')}>
      <Tag
        textStyle={tailwind.style('text-green-100 text-4xl')}
        containerStyle={tailwind.style('bg-green-400')}
        disabled={true}
        variant={'solid'}
      >
        Active
      </Tag>
    </Box>
  </Box>
));
