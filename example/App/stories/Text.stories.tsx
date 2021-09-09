import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../../../src/components/Text';

storiesOf('Text', module).add('Basic', () => (
  <Text style={styles.defaultText}> This is a Sample Blue Color Text </Text>
));

const styles = StyleSheet.create({
  defaultText: {
    color: 'cornflowerblue',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default {
  title: 'Design System/Atoms/Button',
};
