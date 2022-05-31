import { render } from '@testing-library/react-native';
import React from 'react';
import { TouchableWithoutFeedback } from '../../TouchableWithoutFeedback';
import { Text } from '../../Text';

describe('basic', () => {
  it('should render correctly', () => {
    const component = render(
      <TouchableWithoutFeedback>
        <Text>Hello, World</Text>
      </TouchableWithoutFeedback>
    );
    expect(component).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(
      <TouchableWithoutFeedback ref={ref}>
        <Text>Hello, World</Text>
      </TouchableWithoutFeedback>
    );
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with a style prop', () => {
    const component = render(
      <TouchableWithoutFeedback
        style={{
          padding: 4,
          margin: 10,
          backgroundColor: 'red',
        }}
      >
        <Text>Hello, World</Text>
      </TouchableWithoutFeedback>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render children correctly with blue background', () => {
    const component = render(
      <TouchableWithoutFeedback
        style={{
          padding: 4,
          margin: 10,
          backgroundColor: 'blue',
        }}
      >
        <Text> This is a TouchableWithoutFeedback </Text>
      </TouchableWithoutFeedback>
    );
    expect(component).toMatchSnapshot();
  });
});
