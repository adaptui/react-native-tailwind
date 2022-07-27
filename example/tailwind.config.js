/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require("../preset")],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../src/theme/defaultTheme/badge.ts"],
  theme: {},
  plugins: [],
};
