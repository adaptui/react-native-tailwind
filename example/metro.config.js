const path = require('path');
const blacklist = require('metro-config/src/defaults/exclusionList');
const escape = require('escape-string-regexp');
const pak = require('../package.json');
const { getDefaultConfig } = require('expo/metro-config');

const root = path.resolve(__dirname, '..');

const modules = Object.keys({
  ...pak.peerDependencies,
});

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.resolverMainFields = [
  'sbmodern',
  ...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.resolver.blacklistRE = blacklist(
  modules.map(
    (m) => new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`)
  )
);

defaultConfig.resolver.extraNodeModules = modules.reduce((acc, name) => {
  acc[name] = path.join(__dirname, 'node_modules', name);
  return acc;
}, {});

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});
defaultConfig.watchFolders = [
  ...defaultConfig.watchFolders,
  path.resolve(__dirname, '..'),
  './.storybook',
];
defaultConfig.projectRoot = __dirname;
module.exports = defaultConfig;
