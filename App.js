import React from 'react';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'twrnc';
import StorybookUIRoot from './.ondevice/Storybook';

LogBox.ignoreAllLogs();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  return (
    <SafeAreaView
      style={tailwind.style(
        `flex-1 android:mt-[${StatusBar.currentHeight || 0}px]`
      )}
    >
      <StorybookUIRoot />
    </SafeAreaView>
  );
};

export default App;
