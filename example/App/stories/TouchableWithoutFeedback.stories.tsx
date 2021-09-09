import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Text } from '../../../src/components/Text';
import { TouchableWithoutFeedback } from '../../../src/components/TouchableWithoutFeedback';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Box } from '../../../src/components/Box';

const actions = {
  onPressTouchable: () => {
    action('Touchable Pressed!');
    Alert.alert('Touchable Pressed');
  },
};

storiesOf('TouchableWithoutFeedback', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
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
  pressedTouchableContainer: {
    backgroundColor: '#739fef',
    padding: 4,
  },
  touchableText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
