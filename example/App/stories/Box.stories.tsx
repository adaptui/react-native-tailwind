import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Box } from '../../../src/primitives';
import { Text } from '../../../src/primitives/Text';

const BoxComponent = () => {
  const boxRef = React.createRef<View>();
  return (
    <Box ref={boxRef} style={styles.defaultBox}>
      <Text style={styles.defaultText}> This is a Box with Text Inside </Text>
    </Box>
  );
};

storiesOf('Box', module).add('Basic', () => <BoxComponent />);

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
