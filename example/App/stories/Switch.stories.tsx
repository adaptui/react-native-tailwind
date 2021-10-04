import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import tailwind from 'twrnc';
import { Switch } from '../../../src';

const SwitchSmall = () => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <Switch size='sm' isOn={switchState} onValueChange={(value) => setSwitchState(value)}  />
  );
};

const SwitchMedium = () => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <Switch size='md' isOn={switchState} onValueChange={(value) => setSwitchState(value)}  />
  );
};

const SwitchLarge = () => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <Switch size='lg' isOn={switchState} onValueChange={(value) => setSwitchState(value)}  />
  );
};

const SwitchExtraLarge = () => {
  const [switchState, setSwitchState] = useState(false);
  return (
    <Switch size='xl' onTrackColor={tailwind.color('bg-green-500')} isOn={switchState} onValueChange={(value) => setSwitchState(value)} />
  );
};

storiesOf('Switch', module)
  .addDecorator((getStory) => <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>{getStory()}</View>)
  .add('Small', () => <SwitchSmall />)
  .add('Medium', () => <SwitchMedium />)
  .add('Large', () => <SwitchLarge />)
  .add('Extra Large', () => <SwitchExtraLarge />);
