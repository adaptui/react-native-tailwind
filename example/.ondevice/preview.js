import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { TailwindThemeProvider } from '../../src/theme/index';
import React from 'react';

export const decorators = [
  (Story) => {
    return (
      <TailwindThemeProvider>
        <Story />
      </TailwindThemeProvider>
    );
  },
];
export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' },
  ],
};
