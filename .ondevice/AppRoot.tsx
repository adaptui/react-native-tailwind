import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Avatar, Box, Button, useTheme } from '../src';

function ButtonScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style('flex-1 justify-center items-center bg-white-900')}
    >
      <Button>Continue</Button>
    </Box>
  );
}

function AvatarScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style('flex-1 justify-center items-center bg-white-900')}
    >
      <Avatar src={{ uri: 'https://i.pravatar.cc/300??img=9' }} />
    </Box>
  );
}

const Drawer = createDrawerNavigator();

const AppRoot = () => {
  return (
    <Drawer.Navigator initialRouteName="AvatarScreen">
      <Drawer.Screen
        options={{ title: 'Avatar ' }}
        name="AvatarScreen"
        component={AvatarScreen}
      />
      <Drawer.Screen
        options={{ title: 'Button ' }}
        name="ButtonScreen"
        component={ButtonScreen}
      />
    </Drawer.Navigator>
  );
};

export default AppRoot;
