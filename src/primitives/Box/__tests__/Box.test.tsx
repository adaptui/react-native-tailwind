import { render } from '@testing-library/react-native';
import React from 'react';
import { Box } from '../Box';
import { Text } from '../../Text';

describe('basic', () => {
  it('should render correctly', () => {
    const component = render(<Box />);
    expect(component).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(
      <Box ref={ref}>
        <Text>Hello world</Text>
      </Box>
    );
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with a style prop', () => {
    const component = render(
      <Box
        style={{
          backgroundColor: 'tomato',
          padding: 4,
          margin: 10,
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const component = render(
      <Box
        style={{
          backgroundColor: 'tomato',
          padding: 4,
          margin: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
          }}
        >
          This is a Box with Text Inside
        </Text>
      </Box>
    );
    expect(component).toMatchSnapshot();
  });
});
