import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  AvatarGroupScreen,
  AvatarScreen,
  BadgeScreen,
  ButtonScreen,
  CheckboxScreen,
  MeterComponentScreen,
  SpinnerScreen,
} from "./modules/primitives";

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
      <Drawer.Screen
        options={{ title: "Checkbox" }}
        name="CheckboxScreen"
        component={CheckboxScreen}
      />
      <Drawer.Screen
        options={{ title: "Spinner" }}
        name="SpinnerScreen"
        component={SpinnerScreen}
      />
      <Drawer.Screen
        options={{ title: "MeterComponent" }}
        name="MeterComponentScreen"
        component={MeterComponentScreen}
      />
    </Drawer.Navigator>
  );
};

export default AppRoot;
