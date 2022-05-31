import { render } from '@testing-library/react-native';
import React from 'react';
import { Touchable } from '../../Touchable';
import { Text } from '../../Text';

describe('basic', () => {
  it('should render correctly', () => {
    const component = render(
      <Touchable>
        <Text>Hello, World</Text>
      </Touchable>
    );
    expect(component).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(
      <Touchable ref={ref}>
        <Text>Hello, World</Text>
      </Touchable>
    );
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with a style prop', () => {
    const component = render(
      <Touchable
        style={{
          padding: 4,
          margin: 10,
          backgroundColor: 'red',
        }}
      >
        <Text>Hello, World</Text>
      </Touchable>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render children correctly with blue background', () => {
    const component = render(
      <Touchable
        style={{
          padding: 4,
          margin: 10,
          backgroundColor: 'blue',
        }}
      >
        <Text> This is a Touchable </Text>
      </Touchable>
    );
    expect(component).toMatchSnapshot();
  });
});
