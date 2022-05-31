import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from '../../Text';

describe('basic', () => {
  it('should render correctly', () => {
    const component = render(<Text>Hello, World</Text>);
    expect(component).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(<Text ref={ref}>Hello world</Text>);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with a style prop', () => {
    const component = render(
      <Text
        style={{
          color: 'tomato',
          padding: 4,
          margin: 10,
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const component = render(
      <Text
        style={{
          color: 'tomato',
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
          This is a Text with Text Inside
        </Text>
        This is outside Text
      </Text>
    );
    expect(component).toMatchSnapshot();
  });
});
