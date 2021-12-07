import { number, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {
  Box,
  CircularProgress,
  CircularProgressSizes,
  Text,
  Touchable,
} from 'react-native-system';
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
      <Box style={tailwind.style('items-center ')}>
        <Box style={tailwind.style('my-2')}>
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
    </Box>
  );
};

const CircularProgressWithHint: React.FC = () => {
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
      <Box style={tailwind.style('items-center ')}>
        {['sm', 'md', 'lg', 'xl'].map((item) => (
          <Box key={item} style={tailwind.style('my-2')}>
            <CircularProgress
              key={item}
              size={item as CircularProgressSizes}
              value={progressValue}
              hint
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const CircularProgressWithCustomisation: React.FC = () => {
  const [progressValue, setProgressValue] = useProgressState(0, 2);
  return (
    <Box style={tailwind.style('flex-1 justify-center items-center')}>
      <Touchable
        style={tailwind.style(
          'p-1 bg-gray-800 rounded-md items-center mx-10 my-4'
        )}
        onPress={() => setProgressValue(0)}
      >
        <Text style={tailwind.style('text-white')}>Reset Progress</Text>
      </Touchable>
      <Box style={tailwind.style('flex items-center flex-row justify-between')}>
        {['sm', 'md', 'lg', 'xl'].map((item) => (
          <Box key={item} style={tailwind.style('py-2')}>
            <CircularProgress
              key={item}
              size={item as CircularProgressSizes}
              value={progressValue}
              hint
              progressTrackColor="#5849DD"
              trackColor="#cecaf5"
            />
          </Box>
        ))}
      </Box>
      <Box style={tailwind.style('flex items-center flex-row justify-between')}>
        {['sm', 'md', 'lg', 'xl'].map((item) => (
          <Box key={item} style={tailwind.style('py-2')}>
            <CircularProgress
              key={item}
              size={item as CircularProgressSizes}
              value={progressValue}
              hint
              progressTrackColor="#40A16A"
              trackColor="#b9e3cb"
            />
          </Box>
        ))}
      </Box>
      <Box style={tailwind.style('flex items-center flex-row justify-between')}>
        {['sm', 'md', 'lg', 'xl'].map((item) => (
          <Box key={item} style={tailwind.style('py-2')}>
            <CircularProgress
              key={item}
              size={item as CircularProgressSizes}
              value={progressValue}
              hint
              progressTrackColor="#F89286"
              trackColor="#fddad6"
            />
          </Box>
        ))}
      </Box>
      <Box style={tailwind.style('flex items-center flex-row justify-between')}>
        {['sm', 'md', 'lg', 'xl'].map((item) => (
          <Box key={item} style={tailwind.style('py-2')}>
            <CircularProgress
              key={item}
              size={item as CircularProgressSizes}
              value={progressValue}
              hint
              progressTrackColor="#CE0C4A"
            />
          </Box>
        ))}
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

circularProgressStories.add('With Hint', () => <CircularProgressWithHint />);

circularProgressStories.add('Customised', () => (
  <CircularProgressWithCustomisation />
));
