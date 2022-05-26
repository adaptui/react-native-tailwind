import { OverlayProvider } from '@react-native-aria/overlays';
import React from 'react';
import { TailwindThemeProvider } from '../src/theme/index';

export const decorators = [
  (Story) => {
    return (
      <TailwindThemeProvider>
        <OverlayProvider>
          <Story />
        </OverlayProvider>
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
