import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../../../src/primitives/Text';

const TextComponent = () => {
  return (
    <Text style={styles.defaultText}> This is a Sample Blue Color Text </Text>
  );
};

storiesOf('Text', module).add('Basic', () => <TextComponent />);

const styles = StyleSheet.create({
  defaultText: {
    color: 'cornflowerblue',
    textAlign: 'center',
    fontSize: 18,
  },
});
