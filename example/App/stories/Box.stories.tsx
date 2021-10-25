import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { useTheme } from 'react-native-system';
import { Box } from '../../../src/primitives';
import { Text } from '../../../src/primitives/Text';

const BoxComponent = () => {
  const boxRef = React.createRef<typeof Box>();
  const tailwind = useTheme();
  return (
    <Box ref={boxRef} style={tailwind.style('bg-yellow-400 dark:bg-black')}>
      <Text style={tailwind.style('text-white text-center p-4')}>
        This is a Box with Text Inside
      </Text>
    </Box>
  );
};

const StyledBoxComponent = () => {
  const boxRef = React.createRef<typeof Box>();
  const tailwind = useTheme();
  return (
    <Box
      ref={boxRef}
      style={tailwind.style('bg-red-400 dark:bg-black rounded-md m-4')}
    >
      <Text style={tailwind.style('text-white text-center p-4')}>
        This is styled Box with Text Inside
      </Text>
    </Box>
  );
};

storiesOf('Box', module)
  .add('Basic', () => <BoxComponent />)
  .add('Styled', () => <StyledBoxComponent />);
