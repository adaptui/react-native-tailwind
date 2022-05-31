import React from 'react';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import tailwind from 'twrnc';
import AppRoot from './.ondevice/AppRoot';
import { TailwindThemeProvider } from './src';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  return (
    <GestureHandlerRootView style={tailwind.style('flex-1')}>
      <NavigationContainer>
        <SafeAreaView
          style={tailwind.style(
            `flex-1 android:mt-[${StatusBar.currentHeight || 0}px]`
          )}
        >
          <TailwindThemeProvider>
            <AppRoot />
          </TailwindThemeProvider>
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
