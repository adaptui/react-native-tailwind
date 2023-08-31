import React, { useCallback } from "react";
import { LogBox, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AdaptUIProvider, Box, useTheme } from "@adaptui/react-native-tailwind";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import * as SplashScreen from "expo-splash-screen";

import AppRoot from "./AppRoot";

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
LogBox.ignoreAllLogs();

const AdaptUIApp = () => {
  const tailwind = useTheme();

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
      <AppRoot />
    </Box>
  );
};

const AppContainer = () => {
  const tailwind = useTheme();

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

const App = () => {
  return (
    <AdaptUIProvider>
      <AppContainer />
    </AdaptUIProvider>
  );
};

export default App;
