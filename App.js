import React from 'react';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import tailwind from 'twrnc';
import StorybookUIRoot from './.ondevice/Storybook';

LogBox.ignoreAllLogs();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  return (
    <GestureHandlerRootView style={tailwind.style('flex-1')}>
      <SafeAreaView
        style={tailwind.style(
          `flex-1 android:mt-[${StatusBar.currentHeight || 0}px]`
        )}
      >
        <StorybookUIRoot />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
