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
        <SafeAreaProvider>
          <SafeAreaView
            style={tailwind.style(
              `flex-1 android:mt-[${StatusBar.currentHeight || 0}px]`,
            )}
            edges={["bottom"]}
          >
            <StatusBar
              translucent
              backgroundColor={"transparent"}
              barStyle="dark-content"
            />
            <AdaptUIProvider>
              <AppRoot />
            </AdaptUIProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
