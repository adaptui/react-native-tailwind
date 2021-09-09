import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Text } from '../../../src/components/Text';
import { Touchable } from '../../../src/components/Touchable';
import { action } from '@storybook/addon-actions';

const actions = {
  onPressTouchable: () => {
    action('Touchable Pressed!');
    Alert.alert('Touchable Pressed');
  },
};

storiesOf('Touchable', module).add('Basic', () => (
  <Touchable
    onPress={actions.onPressTouchable}
    style={({ pressed }) => [
      pressed ? styles.pressedTouchableContainer : styles.touchableContainer,
    ]}
  >
    <Text style={styles.touchableText}>Text wrapped inside Touchable </Text>
  </Touchable>
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
