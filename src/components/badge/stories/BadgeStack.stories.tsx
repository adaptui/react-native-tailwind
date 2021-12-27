// stories/BadgeStacl.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { BadgeSizes, BadgeTheme, BadgeVariants } from '../Badge';
import BadgeBasic from './Badge.component';

type Meta = ComponentMeta<typeof BadgeBasic>;
type BadgeStackStoryType = ComponentStory<typeof BadgeBasic>;

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
  title: 'Components/Badge/Stack',
  component: BadgeBasic,
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

export const Default: BadgeStackStoryType = () => (
  <Box>
    {badgeSizes.map((size) => {
      return (
        <Box style={tailwind.style('flex-row flex-wrap m-2')} key={size}>
          {badgeVariants.map((variant) => {
            return (
              <Box key={variant} style={tailwind.style('m-1')}>
                {badgeTheme.map((theme) => {
                  return (
                    <Box key={theme} style={tailwind.style('m-1')}>
                      <BadgeBasic
                        size={size}
                        variant={variant}
                        themeColor={theme}
                      />
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      );
    })}
  </Box>
);
