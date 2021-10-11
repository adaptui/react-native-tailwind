import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Text, Touchable, useTailwindThemeContext } from 'react-native-system';
import { ProgressBar } from '../../../src/components/progress/ProgressBar';
import { useProgressState } from '../utils/useProgressState';

const ProgressBarDefault = () => {
  const tailwind = useTailwindThemeContext();
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
      <View style={tailwind.style('mx-2 my-2')}>
        <Text style={tailwind.style('my-2')}> SM </Text>
        <ProgressBar size="sm" value={progressValue} />
      </View>
      <View style={tailwind.style('mx-2 my-2')}>
        <Text style={tailwind.style('my-2')}> MD </Text>
        <ProgressBar size="md" value={progressValue} />
      </View>
      <View style={tailwind.style('mx-2 my-2')}>
        <Text style={tailwind.style('my-2')}> LG </Text>
        <ProgressBar size="lg" value={progressValue} />
      </View>
      <View style={tailwind.style('mx-2 my-2 w-1/2')}>
        <Text style={tailwind.style('my-2')}> XL </Text>
        <ProgressBar size="xl" value={progressValue} />
      </View>
      <View
        style={tailwind.style(
          'p-1 bg-gray-100 rounded-md items-center mx-10 my-4'
        )}
      >
        <Text style={tailwind.style('my-2')}>Indeterminate Progress</Text>
      </View>
      <View style={tailwind.style('mx-2 my-2')}>
        <Text style={tailwind.style('my-2')}> SM </Text>
        <ProgressBar size="sm" />
      </View>
      <View style={tailwind.style('mx-2 my-2')}>
        <Text style={tailwind.style('my-2')}> MD </Text>
        <ProgressBar size="md" />
      </View>
      <View style={tailwind.style('mx-2 my-2')}>
        <Text style={tailwind.style('my-2')}> LG </Text>
        <ProgressBar size="lg" />
      </View>
      <View style={tailwind.style('mx-2 my-2 w-1/2')}>
        <Text style={tailwind.style('my-2')}> XL </Text>
        <ProgressBar size="xl" />
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
  .add('Default', () => <ProgressBarDefault />);
