import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from '../../../src/components/Box';
import { Text } from '../../../src/components/Text';

storiesOf('Box', module).add('Basic', () => (
  <Box style={styles.defaultBox}>
    <Text style={styles.defaultText}> This is a Box with Text Inside </Text>
  </Box>
));

const styles = StyleSheet.create({
  defaultBox: {
    backgroundColor: 'tomato',
    padding: 4,
    margin: 10,
  },
  defaultText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
