import { boolean, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert } from 'react-native';
import { Box, Button, Text } from 'react-native-system';
import { ButtonSizes, ButtonVariants } from 'src/components/button/buttonTypes';
import tailwind from 'twrnc';

const buttonStories = storiesOf('Button', module);
const buttonVariants = [
  'solid',
  'subtle',
  'outline',
  'ghost',
] as ButtonVariants[];
const buttonSizes = ['sm', 'md', 'lg', 'xl'] as ButtonSizes[];

buttonStories.add('Default', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center')}>
      <Button
        onPress={() => Alert.alert('Button Click')}
        disabled={boolean('disabled', false)}
        size={radios(
          'size',
          {
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
          },
          'sm'
        )}
        variant={radios(
          'variant',
          {
            solid: 'solid',
            subtle: 'subtle',
            outline: 'outline',
            ghost: 'ghost',
          },
          'solid'
        )}
      >
        Button
      </Button>
    </Box>
  );
});

buttonStories.add('Button Variantions', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-start')}>
      <Text>Buttons Variant x Sizes</Text>
      <Box style={tailwind.style('my-2')}>
        {buttonSizes.map((size, index) => {
          return (
            <Box key={index} style={tailwind.style('flex flex-row')}>
              {buttonVariants.map((variant, index) => {
                return (
                  <Box key={index} style={tailwind.style('px-1 my-3')}>
                    <Button size={size} variant={variant}>
                      Button
                    </Button>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
});

buttonStories.add('Disabled', () => (
  <Box style={tailwind.style('justify-center flex-1')}>
    {buttonVariants.map((variant, index) => {
      return (
        <Box key={index} style={tailwind.style('my-2 mx-2 justify-center')}>
          <Button
            disabled={boolean('disabled', true)}
            size={radios(
              'size',
              {
                sm: 'sm',
                md: 'md',
                lg: 'lg',
                xl: 'xl',
              },
              'sm'
            )}
            variant={variant}
          >
            Button
          </Button>
        </Box>
      );
    })}
  </Box>
));
