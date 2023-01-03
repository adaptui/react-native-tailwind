import React, { useCallback } from "react";
import { LogBox, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AdaptUIProvider, Box } from "@adaptui/react-native-tailwind";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import tailwind from "twrnc";

import AppRoot from "./AppRoot";

LogBox.ignoreAllLogs();

const AdaptUIApp = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Box onLayout={onLayoutRootView} style={tailwind.style("flex-1")}>
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
