import { boolean, color, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from '../../../src';

const ControllableExample = () => {
  const [switchState, setSwitchState] = useState(false);
  return <Switch state={switchState} onStateChange={setSwitchState} />;
};

const switchStories = storiesOf('Switch', module);

switchStories.addDecorator((getStory) => (
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
));

switchStories.add('BasicSwitch', () => (
  <Switch
    disabled={boolean('disabled', false)}
    onStateColor={color('onStateColor', '')}
    offStateColor={color('offStateColor', '')}
    onStatePressedColor={color('onStatePressedColor', '')}
    offStatePressedColor={color('offStatePressedColor', '')}
    thumbTintColor={color('thumbTintColor', 'white')}
    size={radios('size', { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }, 'xl')}
  />
));

switchStories.add('ControllableExample', () => <ControllableExample />);
