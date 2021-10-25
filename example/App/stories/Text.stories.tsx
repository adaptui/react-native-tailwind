import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { useTheme } from 'react-native-system';
import { Text } from '../../../src/primitives/Text';

const TextComponent = () => {
  const tailwind = useTheme();

  return (
    <Text style={tailwind.style('text-blue-600 text-center text-lg')}>
      This is a Sample Blue Color Text{' '}
    </Text>
  );
};

storiesOf('Text', module).add('Basic', () => <TextComponent />);
