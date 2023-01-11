import React, { ReactNode } from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { Button, Divider, Icon } from "../../src/components";
import { FastBackward } from "../../src/icons";
import { Box, Text } from "../../src/primitives";
import { useTheme } from "../../src/theme";

import AboutScreen from "./pages/AboutScreen";
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
  SwitchComponentScreen,
  TagScreen,
  TextAreaScreen,
  TooltipScreen,
} from "./modules";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const CustomDrawerSection = (props: DrawerContentComponentProps) => {
  const { state, descriptors, navigation } = props;
  let lastGroupName = "";
  let newGroup = true;
  const tailwind = useTheme();
  return (
    <DrawerContentScrollView {...props}>
      {state.routes.map(route => {
        const {
          title,
          // @ts-ignore
          groupName,
          drawerActiveTintColor,
          drawerInactiveTintColor,
        } = descriptors[route.key].options;
        if (lastGroupName !== groupName) {
          newGroup = true;
          lastGroupName = groupName;
        } else {
          newGroup = false;
        }
        return (
          <Box key={title}>
            {newGroup ? (
              <Box>
                <Divider
                  labelPosition="center"
                  label={groupName}
                  dividerStyle={tailwind.style(
                    "my-4 border-blue-700 bg-blue-700",
                  )}
                />
              </Box>
            ) : null}
            <DrawerItem
              key={route.key}
              label={({ color }) =>
                (
                  <Text style={[{ color }, tailwind.style("font-medium")]}>
                    {title}
                  </Text>
                ) as ReactNode
              }
              focused={
                state.index ===
                state.routes.findIndex(e => e.name === route.name)
              }
              activeTintColor={drawerActiveTintColor}
              inactiveTintColor={drawerInactiveTintColor}
              onPress={() => navigation.navigate(route.name)}
            />
          </Box>
        );
      })}
      <Box style={tailwind.style("h-8 w-full")} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({ navigation }) => {
  const tailwind = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerSection}
      initialRouteName="AvatarScreen"
      screenOptions={{
        headerRight: () => (
          <Box style={tailwind.style("mr-2")}>
            <Button
              variant="ghost"
              size="md"
              onPress={() => navigation.navigate("About")}
            >
              <Icon size={18} icon={<FastBackward />} />
            </Button>
          </Box>
        ),
      }}
    >
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Avatar", groupName: "PRIMITIVES" }}
        name="AvatarScreen"
        component={AvatarScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Avatar Group", groupName: "PRIMITIVES" }}
        name="AvatarGroupScreen"
        component={AvatarGroupScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Badge", groupName: "PRIMITIVES" }}
        name="BadgeScreen"
        component={BadgeScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Button", groupName: "PRIMITIVES" }}
        name="ButtonScreen"
        component={ButtonScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Tag ", groupName: "PRIMITIVES" }}
        name="TagScreen"
        component={TagScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Divider", groupName: "PRIMITIVES" }}
        name="DividerScreen"
        component={DividerScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Checkbox", groupName: "FORMS" }}
        name="CheckboxScreen"
        component={CheckboxScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Checkbox Group", groupName: "FORMS" }}
        name="CheckboxGroupScreen"
        component={CheckboxGroupScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Input", groupName: "FORMS" }}
        name="InputScreen"
        component={InputScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Radio", groupName: "FORMS" }}
        name="RadioComponentScreen"
        component={RadioScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Slider", groupName: "FORMS" }}
        name="SliderComponentScreen"
        component={SliderComponentScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Switch", groupName: "FORMS" }}
        name="SwitchComponentScreen"
        component={SwitchComponentScreen}
      />

      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Text Area", groupName: "FORMS" }}
        name="TextAreaScreen"
        component={TextAreaScreen}
      />

      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Circular Progress", groupName: "FEEDBACK" }}
        name="CircularProgressScreen"
        component={CircularProgressScreen}
      />

      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Meter", groupName: "FEEDBACK" }}
        name="MeterComponentScreen"
        component={MeterComponentScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Select", groupName: "FEEDBACK" }}
        name="SelectScreen"
        component={SelectScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Spinner", groupName: "FEEDBACK" }}
        name="SpinnerScreen"
        component={SpinnerScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Progress ", groupName: "FEEDBACK" }}
        name="ProgressScreen"
        component={ProgressScreen}
      />
      <Drawer.Screen
        // @ts-ignore
        options={{ title: "Tooltip", groupName: "POPUPS" }}
        name="TooltipScreen"
        component={TooltipScreen}
      />
    </Drawer.Navigator>
  );
};

const AppRoot = () => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Components"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppRoot;
