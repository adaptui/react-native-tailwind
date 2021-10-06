import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import tailwind from 'twrnc';
import { Switch } from '../../../src';

const ControllableExample = () => {
  const [switchState, setSwitchState] = useState(false);
  return <Switch state={switchState} onStateChange={setSwitchState} />;
};

const SwitchSmall = () => {
  return <Switch size="md" />;
};

const SwitchMedium = () => {
  return <Switch size="md" />;
};

const SwitchLarge = () => {
  return <Switch size="lg" />;
};

const SwitchExtraLarge = () => {
  return <Switch size="xl" />;
};

const SwitchDisabled = () => {
  return (
    <Switch disabled size="xl" offStateColor={tailwind.color('bg-green-500')} />
  );
};

const Customised = () => {
  return (
    <Switch
      onStateColor={tailwind.color('bg-green-500')}
      offStateColor={tailwind.color('bg-green-100')}
    />
  );
};

storiesOf('Switch', module)
  .addDecorator((getStory) => (
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
  ))
  .add('Small', () => <SwitchSmall />)
  .add('Medium', () => <SwitchMedium />)
  .add('Large', () => <SwitchLarge />)
  .add('Extra Large', () => <SwitchExtraLarge />)
  .add('ControllableExample', () => <ControllableExample />)
  .add('Disabled', () => <SwitchDisabled />)
  .add('Customised', () => <Customised />);
