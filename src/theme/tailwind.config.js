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
        'paragraph-cxs': '13px',
        'paragraph-sm': '14px',
        '2base': '32px',
      },
    },
  },
  plugins: [],
};
