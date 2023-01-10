import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Platform } from "react-native";
import { registerRootComponent } from "expo";

import App from "./src/App";

import "react-native-gesture-handler";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
if (Platform.OS === "web") {
  const rootTag = createRoot(
    document.getElementById("root") ?? document.getElementById("main"),
  );
  rootTag.render(createElement(App));
} else {
  registerRootComponent(App);
}
