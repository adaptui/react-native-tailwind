import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Box } from '../../../src/primitives/Box';
import { Text } from '../../../src/primitives/Text';
import { TouchableWithoutFeedback } from '../../../src/primitives/TouchableWithoutFeedback';

const actions = {
  onPressTouchable: () => {
    action('Touchable Pressed!');
    Alert.alert('Touchable Pressed');
  },
};

storiesOf('TouchableWithoutFeedback', module).add('Basic', () => (
  <TouchableWithoutFeedback onPress={actions.onPressTouchable}>
    <Box style={styles.touchableContainer}>
      <Text style={styles.touchableText}>
        Text wrapped inside Touchable Without Feedback{' '}
      </Text>
    </Box>
  </TouchableWithoutFeedback>
));

const styles = StyleSheet.create({
  touchableContainer: {
    backgroundColor: 'cornflowerblue',
    padding: 4,
    margin: 10,
  },
  touchableText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});