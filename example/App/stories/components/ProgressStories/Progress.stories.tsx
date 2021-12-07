import { color, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Text, Touchable, useTheme } from '../../../../../src';
import { ProgressBar } from '../../../../../src/components/progress/ProgressBar';
import { useProgressState } from '../../../utils/useProgressState';

const ProgressBarDefault = () => {
  const tailwind = useTheme();
  const [progressValue, setProgressValue] = useProgressState();
  return (
    <View style={{ width: '100%' }}>
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
      <View style={tailwind.style('mx-2 my-2')}>
        <ProgressBar
          size={radios(
            'size',
            { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
            'lg'
          )}
          value={progressValue}
        />
      </View>
    </View>
  );
};

const ProgressBarCustom = () => {
  const tailwind = useTheme();
  const [progressValue, setProgressValue] = useProgressState();
  return (
    <View style={{ width: '100%' }}>
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
      <View style={tailwind.style('mx-2 my-2')}>
        <ProgressBar
          progressTrackColor={color('progressTrackColor', '#0074B7')}
          trackColor={color('trackColor', '#BFD7ED')}
          size={radios(
            'size',
            { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
            'lg'
          )}
          value={progressValue}
        />
      </View>
    </View>
  );
};

storiesOf('Progress', module)
  .addDecorator((getStory) => (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {getStory()}
    </View>
  ))
  .add('Default', () => <ProgressBarDefault />)
  .add('Customised', () => <ProgressBarCustom />);
