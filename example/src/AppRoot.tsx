import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AvatarGroupScreen from "./modules/primitives/AvatarGroupScreen";
import AvatarScreen from "./modules/primitives/AvatarScreen";
import BadgeScreen from "./modules/primitives/BadgeScreen";
import ButtonScreen from "./modules/primitives/ButtonScreen";

const Drawer = createDrawerNavigator();

const AppRoot = () => {
  return (
    <Drawer.Navigator initialRouteName="AvatarScreen">
      <Drawer.Screen
        options={{ title: "Avatar" }}
        name="AvatarScreen"
        component={AvatarScreen}
      />
      <Drawer.Screen
        options={{ title: "Avatar Group" }}
        name="AvatarGroupScreen"
        component={AvatarGroupScreen}
      />
      <Drawer.Screen
        options={{ title: "Button" }}
        name="ButtonScreen"
        component={ButtonScreen}
      />
      <Drawer.Screen
        options={{ title: "Badge" }}
        name="BadgeScreen"
        component={BadgeScreen}
      />
    </Drawer.Navigator>
  );
};

export default AppRoot;
