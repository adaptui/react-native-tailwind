import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Box, Text, useTheme } from '../src';

function HomeScreen() {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style('flex-1 justify-center items-center')}>
      <Text>Hello,World from Home Screen</Text>
    </Box>
  );
}

const Drawer = createDrawerNavigator();

const AppRoot = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AppRoot;
