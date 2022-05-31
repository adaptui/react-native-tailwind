const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    ...defaultTheme,
    extend: {
      colors: {
        orange: colors.orange,
        gray: colors.gray,
        emarald: colors.emerald,
        violet: colors.violet,
      },
      fontSize: {
        xs: "12px",
        cxs: "13px",
        sm: "14px",
        base: "16px",
        "paragraph-cxs": "13px",
        "paragraph-sm": "14px",
        "2base": "32px",
      },
    }
  },
  plugins: [],
};
