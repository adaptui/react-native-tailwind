import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'react-native-system';
import { Text } from '../../../src/primitives/Text';
import { Touchable } from '../../../src/primitives/Touchable';

const actions = {
  onPressTouchable: () => {
    action('Touchable Pressed!');
    Alert.alert('Touchable Pressed');
  },
};

const TouchableComponent = () => {
  const tailwind = useTheme();
  return (
    <Touchable
      onPress={actions.onPressTouchable}
      style={({ pressed }) => [
        tailwind.style('p-1 m-2 rounded-md'),
        pressed ? tailwind.style('bg-blue-800') : tailwind.style('bg-blue-600'),
      ]}
    >
      <Text style={tailwind.style('text-center text-white text-lg')}>
        Text wrapped inside Touchable{' '}
      </Text>
    </Touchable>
  );
};

storiesOf('Touchable', module).add('Basic', () => <TouchableComponent />);
