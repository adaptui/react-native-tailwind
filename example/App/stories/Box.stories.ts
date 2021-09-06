import { storiesOf } from '@storybook/react-native';
import { useBoxElement } from '../core/BoxElement';
import { useTextElement } from '../core/TextElement';

storiesOf('Box', module)
  .add('Yellow Background Box', () =>
    useBoxElement(
      {
        width: '100%',
        backgroundColor: 'yellow',
        alignItems: 'center',
      },
      {},
      useTextElement({}, {}, 'Hello, Yellow World!')
    )
  )
  .add('Blue Background Box', () =>
    useBoxElement(
      {
        width: '100%',
        backgroundColor: 'blue',
        alignItems: 'center',
      },
      {},
      useTextElement({ color: 'white' }, {}, 'Hello, Blue World!')
    )
  );
