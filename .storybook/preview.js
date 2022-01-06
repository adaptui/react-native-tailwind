import { OverlayProvider } from '@react-native-aria/overlays';
import React from 'react';
import { TailwindThemeProvider } from '../src/theme/index';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

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
