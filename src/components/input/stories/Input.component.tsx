import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Box } from '../../../primitives/Box';
import { Input, InputProps } from '../Input';

export type InputBasicProps = InputProps;

export const InputBasic: React.FC<Partial<InputBasicProps>> = (props) => {
  return (
    <Box style={styles.inputWrapper}>
      <Input {...props} placeholder="Search" />
    </Box>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    margin: 8,
    padding: 8,
    width: Dimensions.get('screen').width / 2,
  },
});

export default InputBasic;
