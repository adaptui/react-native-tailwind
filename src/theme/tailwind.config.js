const defaultTheme = require('tailwindcss/defaultTheme');
import { adaptUIColors } from './colors';

module.exports = {
  theme: {
    ...defaultTheme,
    colors: {
      ...adaptUIColors,
    },
    extend: {
      fontSize: {
        'xs': '12px',
        'cxs': '13px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        'cxl': '22px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
        '9xl': '128px',

        'paragram-xs': '12px',
        'paragraph-cxs': '13px',
        'paragraph-sm': '14px',
        'paragraph-base': '16px',
        'paragraph-lg': '18px',
        'paragraph-xl': '20px',
      },
    },
  },
  plugins: [],
};
