// stories/ButtonStack.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { CaretRight, Clock } from '../../../assets';
import { Box } from '../../../primitives/Box';
import { Icon } from '../../icon';
import { ButtonSizes, ButtonVariants } from '../buttonTypes';
import { ButtonBasic } from './Button.component';

type Meta = ComponentMeta<typeof ButtonBasic>;
type ButtonStoryType = ComponentStory<typeof ButtonBasic>;

const button_sizes: ButtonSizes[] = ['sm', 'md', 'lg', 'xl'];
const button_variants: ButtonVariants[] = [
  'solid',
  'subtle',
  'outline',
  'ghost',
];

export default {
  title: 'Components/Button/Stack',
  component: ButtonBasic,
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

export const Default: ButtonStoryType = () => {
  return (
    <Box>
      {button_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {button_variants.map((variant) => {
              return (
                <Box key={variant} style={tailwind.style('m-2')}>
                  <ButtonBasic size={size} variant={variant} />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const LoadingStack: ButtonStoryType = () => {
  return (
    <Box>
      {button_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {button_variants.map((variant) => {
              return (
                <Box key={variant} style={tailwind.style('m-2')}>
                  <ButtonBasic loading size={size} variant={variant} />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const IconOnly: ButtonStoryType = () => {
  return (
    <Box>
      {button_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {button_variants.map((variant) => {
              return (
                <Box key={variant} style={tailwind.style('m-2')}>
                  <ButtonBasic
                    icon={<Icon icon={<Clock />} />}
                    size={size}
                    variant={variant}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const SuffixStack: ButtonStoryType = () => {
  return (
    <Box>
      {button_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {button_variants.map((variant) => {
              return (
                <Box key={variant} style={tailwind.style('m-2')}>
                  <ButtonBasic
                    suffix={<Icon icon={<CaretRight />} />}
                    size={size}
                    variant={variant}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const PrefixStack: ButtonStoryType = () => {
  return (
    <Box>
      {button_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {button_variants.map((variant) => {
              return (
                <Box key={variant} style={tailwind.style('m-2')}>
                  <ButtonBasic
                    prefix={<Icon icon={<Clock />} />}
                    size={size}
                    variant={variant}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const PrefixSuffixStack: ButtonStoryType = () => {
  return (
    <Box>
      {button_sizes.map((size) => {
        return (
          <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
            {button_variants.map((variant) => {
              return (
                <Box key={variant} style={tailwind.style('m-2')}>
                  <ButtonBasic
                    suffix={<Icon icon={<CaretRight />} />}
                    prefix={<Icon icon={<Clock />} />}
                    size={size}
                    variant={variant}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
