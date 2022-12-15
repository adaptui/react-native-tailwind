import React from "react";
import { LogBox, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AdaptUIProvider } from "@adaptui/react-native-tailwind";
import { NavigationContainer } from "@react-navigation/native";
import tailwind from "twrnc";

import AppRoot from "./AppRoot";

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <GestureHandlerRootView style={tailwind.style("flex-1")}>
      <NavigationContainer>
        <SafeAreaView
          style={tailwind.style(
            `flex-1 android:mt-[${StatusBar.currentHeight || 0}px]`,
          )}
          edges={["bottom"]}
        >
          <SafeAreaProvider>
            <StatusBar
              translucent
              backgroundColor={"transparent"}
              barStyle="dark-content"
            />
            <AdaptUIProvider>
              <AppRoot />
            </AdaptUIProvider>
          </SafeAreaProvider>
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
