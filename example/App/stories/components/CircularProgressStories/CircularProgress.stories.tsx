import { number, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Box, CircularProgress, Text, Touchable } from 'react-native-system';
import tailwind from 'twrnc';
import { useProgressState } from '../../../utils/useProgressState';

const circularProgressStories = storiesOf('Circular Progress', module);

const CircularProgressDefault: React.FC = () => {
  const [progressValue, setProgressValue] = useProgressState();
  return (
    <Box style={tailwind.style('flex-1 justify-center')}>
      <Touchable
        style={tailwind.style(
          'p-1 bg-gray-800 rounded-md items-center mx-10 my-4'
        )}
        onPress={() => setProgressValue(0)}
      >
        <Text style={tailwind.style('text-white')}>Reset Progress</Text>
      </Touchable>
      <Touchable
        style={tailwind.style(
          'p-1 bg-gray-800 rounded-md items-center mx-10 my-4'
        )}
        onPress={() => setProgressValue(null)}
      >
        <Text style={tailwind.style('text-white')}>Make Indeterminate</Text>
      </Touchable>
      <Box style={tailwind.style('items-center')}>
        <CircularProgress
          size={radios(
            'size',
            { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
            'md'
          )}
          value={progressValue}
          strokeWidth={number('strokeWidth', 2)}
        />
      </Box>
    </Box>
  );
};

circularProgressStories.add('Default Indeterminate', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <CircularProgress
      size={radios('size', { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }, 'md')}
    />
  </Box>
));

circularProgressStories.add('Default with Value', () => (
  <CircularProgressDefault />
));
