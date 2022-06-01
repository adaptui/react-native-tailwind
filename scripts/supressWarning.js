const fs = require('fs');

const codeToObscure =
  /console.warn\([\s\S].*Require cycle:[\s\S].*\+[\s\S].*\+[\s\S].*"[\s\S].*/;
const problemFilePath = './node_modules/metro-runtime/src/polyfills/require.js';
const problemFileContent = fs.readFileSync(problemFilePath, 'utf8');
fs.writeFileSync(
  problemFilePath,
  problemFileContent.replace(codeToObscure, 'const noConsoleWarn = ("");'),
  'utf8'
);
