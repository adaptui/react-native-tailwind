import React from 'react';
import { Box, Text, useTheme } from '../src';

const AppRoot = () => {
  const tailwind = useTheme();
  return (
    <Box style={tailwind.style('flex-1 justify-center items-center')}>
      <Text>Hello, World</Text>
    </Box>
  );
};

export default AppRoot;
