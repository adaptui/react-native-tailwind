import { radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Box } from 'react-native-system';
import tailwind from 'twrnc';
import { Spinner } from '../../../../../src/components';

const spinnerStories = storiesOf('Spinner', module);

spinnerStories.add('Default', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Spinner
      size={'xs'}
      track={radios(
        'track',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style('my-5')}
    />
    <Spinner
      size={'sm'}
      track={radios(
        'track',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style('my-5')}
    ></Spinner>
    <Spinner
      size={'md'}
      track={radios(
        'track',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style('my-5')}
    />
    <Spinner
      size={'lg'}
      track={radios(
        'track',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style('my-5')}
    />
    <Spinner
      size={'xl'}
      track={radios(
        'track',
        { visible: 'visible', transparent: 'transparent' },
        'transparent'
      )}
      style={tailwind.style('my-5')}
    />
  </Box>
));

spinnerStories.add('Customised', () => (
  <Box style={tailwind.style('flex-1 justify-center items-center')}>
    <Spinner
      size={'xs'}
      style={tailwind.style(
        'border-indigo-600 border-b-indigo-300 border-l-indigo-300 my-5'
      )}
    />
    <Spinner
      size={'sm'}
      style={tailwind.style(
        'border-red-600 border-b-red-300 border-l-red-300 my-5'
      )}
    ></Spinner>
    <Spinner
      size={'md'}
      style={tailwind.style(
        'border-yellow-600 border-b-yellow-300 border-l-yellow-300 my-5'
      )}
    />
    <Spinner
      size={'lg'}
      style={tailwind.style(
        'my-5 rounded-none border-green-600 border-b-green-300 border-l-green-300'
      )}
    />
    <Spinner
      size={'xl'}
      style={tailwind.style(
        'my-5 border-blue-600 border-b-blue-300 border-l-blue-300'
      )}
    />
  </Box>
));
