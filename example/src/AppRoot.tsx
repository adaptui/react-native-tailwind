import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  AvatarGroupScreen,
  AvatarScreen,
  BadgeScreen,
  ButtonScreen,
  CheckboxGroupScreen,
  CheckboxScreen,
  CircularProgressScreen,
  DividerScreen,
  InputScreen,
  MeterComponentScreen,
  ProgressScreen,
  RadioScreen,
  SelectScreen,
  SliderComponentScreen,
  SpinnerScreen,
  StackScreen,
  SwitchComponentScreen,
  TagScreen,
  TooltipScreen,
} from "./modules";

const Drawer = createDrawerNavigator();

const AppRoot = () => {
  return (
    <Drawer.Navigator initialRouteName="StackScreen">
      <Drawer.Screen
        options={{ title: "Stack" }}
        name="StackScreen"
        component={StackScreen}
      />
      <Drawer.Screen
        options={{ title: "Select" }}
        name="SelectScreen"
        component={SelectScreen}
      />
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
        options={{ title: "Divider" }}
        name="DividerScreen"
        component={DividerScreen}
      />
      <Drawer.Screen
        options={{ title: "Spinner" }}
        name="SpinnerScreen"
        component={SpinnerScreen}
      />
      <Drawer.Screen
        options={{ title: "Meter" }}
        name="MeterComponentScreen"
        component={MeterComponentScreen}
      />
      <Drawer.Screen
        options={{ title: "Tooltip" }}
        name="TooltipScreen"
        component={TooltipScreen}
      />
      <Drawer.Screen
        options={{ title: "Tag " }}
        name="TagScreen"
        component={TagScreen}
      />
      <Drawer.Screen
        options={{ title: "Progress " }}
        name="ProgressScreen"
        component={ProgressScreen}
      />
      <Drawer.Screen
        options={{ title: "Switch" }}
        name="SwitchComponentScreen"
        component={SwitchComponentScreen}
      />
      <Drawer.Screen
        options={{ title: "Radio" }}
        name="RadioComponentScreen"
        component={RadioScreen}
      />
      <Drawer.Screen
        options={{ title: "Slider" }}
        name="SliderComponentScreen"
        component={SliderComponentScreen}
      />
      <Drawer.Screen
        options={{ title: "Circular Progress" }}
        name="CircularProgressScreen"
        component={CircularProgressScreen}
      />
      <Drawer.Screen
        options={{ title: "Input" }}
        name="InputScreen"
        component={InputScreen}
      />
      <Drawer.Screen
        options={{ title: "Checkbox Group" }}
        name="CheckboxGroupScreen"
        component={CheckboxGroupScreen}
      />
    </Drawer.Navigator>
  );
};

export default AppRoot;
