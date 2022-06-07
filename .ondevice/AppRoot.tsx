import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Avatar, Badge, Box, Button, Icon, useTheme } from '../src';
import { CaretRight, Check, Clock, Close, DefaultUser } from '../src/assets';

function ButtonScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style('flex-1 justify-center items-center bg-white-900')}
    >
      <Button
        style={tailwind.style('my-1')}
        suffix={<Icon icon={<CaretRight />} />}
      >
        Continue
      </Button>
      <Button style={tailwind.style('my-1')} variant="outline">
        Get Free Resource
      </Button>
      <Button
        style={({ pressed }) => [
          tailwind.style(
            `my-1 bg-violet-600 ${pressed ? 'bg-violet-800' : ''}`
          ),
        ]}
      >
        Reply
      </Button>
      <Button
        prefix={<Icon icon={<DefaultUser />} />}
        style={({ pressed }) => [
          tailwind.style(`my-1 bg-green-600 ${pressed ? 'bg-green-800' : ''}`),
        ]}
      >
        Sign In
      </Button>
      <Button
        variant="subtle"
        icon={<Icon icon={<CaretRight />} />}
        style={tailwind.style('my-1')}
      ></Button>
    </Box>
  );
}

function AvatarScreen() {
  const tailwind = useTheme();
  return (
    <Box
      style={tailwind.style('flex-1 justify-center items-center bg-white-900')}
    >
      <Avatar style={tailwind.style('my-1')} />
      <Avatar style={tailwind.style('my-1')} squared />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=9' }}
      />
      <Avatar name="Sandeep Prabhakaran" style={tailwind.style('my-1')} />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=9' }}
        status="active"
      />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=9' }}
        status="away"
      />
      <Avatar
        style={tailwind.style('my-1')}
        src={{ uri: 'https://i.pravatar.cc/300??img=9' }}
        status="sleep"
      />
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
