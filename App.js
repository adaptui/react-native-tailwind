import { SafeAreaView, StatusBar, LogBox } from 'react-native';
import StorybookUIRoot from './.ondevice/Storybook';
import React from 'react';
import tailwind from 'twrnc';
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
