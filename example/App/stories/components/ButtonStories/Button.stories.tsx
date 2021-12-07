import { boolean, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert } from 'react-native';
import { Box, Button, Spinner, Text } from 'react-native-system';
import { ButtonSizes, ButtonVariants } from 'src/components/button/buttonTypes';
import tailwind from 'twrnc';
import { CaretRight, Clock } from '../../../../../src/assets';

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
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-center')}>
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
        Continue
      </Button>
    </Box>
  );
});

buttonStories.add('Button With Suffix', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-center')}>
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
        suffix={<CaretRight />}
      >
        Continue
      </Button>
    </Box>
  );
});

buttonStories.add('Button With Prefix', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-center')}>
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
        prefix={<Clock />}
      >
        Continue
      </Button>
    </Box>
  );
});

buttonStories.add('Button Suffix Prefix', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-center')}>
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
        prefix={<Clock />}
        suffix={<CaretRight />}
      >
        Continue
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
                    <Button
                      loading={boolean('loading', false)}
                      disabled={boolean('disabled', false)}
                      size={size}
                      variant={variant}
                    >
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

buttonStories.add('Loading', () => (
  <Box style={tailwind.style('justify-center flex-1')}>
    {buttonVariants.map((variant, index) => {
      return (
        <Box key={index} style={tailwind.style('my-2 mx-2 justify-center')}>
          <Button
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
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
            Continue
          </Button>
        </Box>
      );
    })}
  </Box>
));

buttonStories.add('Icon Only Variants', () => (
  <Box style={tailwind.style('mx-2 flex-1 justify-center items-start')}>
    <Box style={tailwind.style('my-2')}>
      {buttonSizes.map((size, index) => {
        return (
          <Box key={index} style={tailwind.style('flex flex-row')}>
            {buttonVariants.map((variant, index) => {
              return (
                <Box key={index} style={tailwind.style('px-1 my-3')}>
                  <Button
                    loading={boolean('loading', false)}
                    size={size}
                    variant={variant}
                    icon={<Clock />}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  </Box>
));

buttonStories.add('Button Suffix With Loading', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-start')}>
      <Box style={tailwind.style('my-2')}>
        {buttonSizes.map((size, index) => {
          return (
            <Box key={index} style={tailwind.style('flex flex-row flex-wrap')}>
              {buttonVariants.map((variant, index) => {
                return (
                  <Box key={index} style={tailwind.style('px-1 my-3')}>
                    <Button
                      size={size}
                      loading={boolean('loading', false)}
                      variant={variant}
                      suffix={<CaretRight />}
                    >
                      Continue
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

buttonStories.add('Button Prefix With Loading', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-start')}>
      <Box style={tailwind.style('my-2')}>
        {buttonSizes.map((size, index) => {
          return (
            <Box key={index} style={tailwind.style('flex flex-row flex-wrap')}>
              {buttonVariants.map((variant, index) => {
                return (
                  <Box key={index} style={tailwind.style('px-1 my-3')}>
                    <Button
                      loading={boolean('loading', false)}
                      size={size}
                      variant={variant}
                      prefix={<Clock />}
                    >
                      Waiting
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

buttonStories.add('Button Suffix/Prefix With Loading', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-start')}>
      <Box style={tailwind.style('my-2')}>
        {buttonSizes.map((size, index) => {
          return (
            <Box key={index} style={tailwind.style('flex flex-row flex-wrap')}>
              {buttonVariants.map((variant, index) => {
                return (
                  <Box key={index} style={tailwind.style('px-1 my-3')}>
                    <Button
                      size={size}
                      variant={variant}
                      prefix={<Clock />}
                      suffix={<CaretRight />}
                      loading={boolean('loading', false)}
                    >
                      Continue
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

buttonStories.add('Button Suffix/Prefix With Custom Loading', () => {
  return (
    <Box style={tailwind.style('mx-2 flex-1 justify-center items-start')}>
      <Box style={tailwind.style('my-2')}>
        {buttonSizes.map((size, index) => {
          return (
            <Box key={index} style={tailwind.style('flex flex-row flex-wrap')}>
              {buttonVariants.map((variant, index) => {
                return (
                  <Box key={index} style={tailwind.style('px-1 my-3')}>
                    <Button
                      size={size}
                      variant={variant}
                      prefix={<Clock />}
                      suffix={<CaretRight />}
                      loading={boolean('loading', false)}
                      spinner={
                        <Spinner
                          style={tailwind.style(
                            'border-indigo-600 border-b-indigo-300 border-l-indigo-300'
                          )}
                        />
                      }
                    >
                      Continue
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
