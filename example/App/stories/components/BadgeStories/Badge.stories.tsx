import { radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView, View } from 'react-native';
import tailwind from 'twrnc';
import { Badge, BadgeTheme, BadgeVariants, Box } from '../../../../../src';

const badgeStories = storiesOf('Badge', module);

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

badgeStories.add('Default', () => (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <Badge
      size={radios('size', { sm: 'sm', md: 'md', lg: 'lg' }, 'lg')}
      variant={radios(
        'variant',
        { outline: 'outline', solid: 'solid', subtle: 'subtle' },
        'solid'
      )}
      themeColor={radios(
        'themeColor',
        {
          primary: 'primary',
          secondary: 'secondary',
          default: 'default',
          success: 'success',
          danger: 'danger',
        },
        'default'
      )}
    >
      {text('children', 'Beta')}
    </Badge>
  </View>
));

badgeStories.add('Variation Stack', () => (
  <ScrollView
    contentContainerStyle={{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
    }}
  >
    {badgeTheme.map((theme, index) => {
      return (
        <Box key={index} style={tailwind.style('flex flex-row')}>
          {badgeVariants.map((variant, index) => {
            return (
              <Box key={index} style={tailwind.style('px-1 my-3')}>
                <Badge size="sm" variant={variant} themeColor={theme}>
                  {text('children', 'Beta')}
                </Badge>
              </Box>
            );
          })}
        </Box>
      );
    })}
    {badgeTheme.map((theme, index) => {
      return (
        <Box key={index} style={tailwind.style('flex flex-row')}>
          {badgeVariants.map((variant, index) => {
            return (
              <Box key={index} style={tailwind.style('px-1 my-3')}>
                <Badge size="md" variant={variant} themeColor={theme}>
                  {text('children', 'Beta')}
                </Badge>
              </Box>
            );
          })}
        </Box>
      );
    })}
    {badgeTheme.map((theme, index) => {
      return (
        <Box key={index} style={tailwind.style('flex flex-row')}>
          {badgeVariants.map((variant, index) => {
            return (
              <Box key={index} style={tailwind.style('px-1 my-3')}>
                <Badge size="lg" variant={variant} themeColor={theme}>
                  {text('children', 'Beta')}
                </Badge>
              </Box>
            );
          })}
        </Box>
      );
    })}
  </ScrollView>
));
