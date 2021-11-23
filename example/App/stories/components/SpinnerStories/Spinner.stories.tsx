import { radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Box } from 'react-native-system';
import tailwind from 'twrnc';
import { Spinner } from '../../../../../src/components';

const spinnerStories = storiesOf('Spinner', module);

spinnerStories.add('Default Light', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Spinner
      size={'xs'}
      stroke={radios(
        'stroke',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style('my-5')}
    />
    <Spinner
      size={'sm'}
      stroke={radios(
        'stroke',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style(
        'border-red-600 border-b-red-300 border-l-red-300 my-5'
      )}
    />
    <Spinner
      size={'md'}
      stroke={radios(
        'stroke',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style('my-5')}
    />
    <Spinner
      size={'lg'}
      stroke={radios(
        'stroke',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style(
        'my-5 border-green-600 border-b-green-300 border-l-green-300'
      )}
    />
    <Spinner
      size={'xl'}
      stroke={radios(
        'stroke',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style(
        'my-5 border-blue-600 border-b-blue-300 border-l-blue-300'
      )}
    />
  </Box>
));
