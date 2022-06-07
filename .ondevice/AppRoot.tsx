import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Avatar, Badge, Box, Button, Icon, useTheme } from '../src';
import { Check, Clock, Close } from '../src/assets';

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

function BadgeScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style('flex-1 justify-center items-center bg-white-900')}
    >
      <Badge style={tailwind.style('my-1')} themeColor="secondary">
        Scheduled
      </Badge>
      <Badge
        style={tailwind.style('my-1')}
        themeColor="primary"
        variant="subtle"
        prefix={<Icon icon={<Clock />} />}
      >
        On Progress
      </Badge>
      <Badge
        style={tailwind.style('my-1')}
        themeColor="danger"
        prefix={<Icon icon={<Close />} />}
      >
        Cancelled
      </Badge>
      <Badge
        style={tailwind.style('my-1')}
        themeColor="success"
        prefix={<Icon icon={<Check />} />}
      >
        Completed
      </Badge>
      <Badge
        style={tailwind.style('my-1')}
        variant="subtle"
        themeColor="secondary"
      >
        Review
      </Badge>
    </Box>
  );
}

const Drawer = createDrawerNavigator();

const AppRoot = () => {
  return (
    <Drawer.Navigator initialRouteName="AvatarScreen">
      <Drawer.Screen
        options={{ title: 'Avatar' }}
        name="AvatarScreen"
        component={AvatarScreen}
      />
      <Drawer.Screen
        options={{ title: 'Button' }}
        name="ButtonScreen"
        component={ButtonScreen}
      />
      <Drawer.Screen
        options={{ title: 'Badge ' }}
        name="BadgeScreen"
        component={BadgeScreen}
      />
    </Drawer.Navigator>
  );
};

export default AppRoot;
