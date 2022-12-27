import React from "react";
import { LogBox, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AdaptUIProvider, Box } from "@adaptui/react-native-tailwind";
import { NavigationContainer } from "@react-navigation/native";
import tailwind from "twrnc";

import AppRoot from "./AppRoot";

LogBox.ignoreAllLogs();

const AdaptUIApp = () => {
  return (
    <Box style={tailwind.style("flex-1")}>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />
      <AdaptUIProvider>
        <AppRoot />
      </AdaptUIProvider>
    </Box>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={tailwind.style("flex-1")}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AdaptUIApp />
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
