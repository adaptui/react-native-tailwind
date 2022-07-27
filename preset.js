const colors = require("./colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        xs: ["12px", "115%"],
        cxs: ["13px", "115%"],
        sm: ["14px", "115%"],
        base: ["16px", "115%"],
        lg: ["18px", "115%"],
        xl: ["20px", "115%"],
        cxl: ["22px", "115%"],
        "2xl": ["24px", "115%"],
        "3xl": ["30px", "115%"],
        "4xl": ["36px", "115%"],
        "5xl": ["48px", "115%"],
        "6xl": ["60px", "115%"],
        "7xl": ["72px", "115%"],
        "8xl": ["96px", "115%"],
        "9xl": ["128px", "115%"],
        "paragraph-xs": ["12px", "150%"],
        "paragraph-cxs": ["13px", "150%"],
        "paragraph-sm": ["14px", "150%"],
        "paragraph-base": ["16px", "150%"],
        "paragraph-lg": ["18px", "150%"],
        "paragraph-xl": ["20px", "150%"],
      },
    },
  },
};
