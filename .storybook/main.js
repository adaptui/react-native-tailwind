module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-reanimated'],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  babel: async (options) => ({
    ...options,
    presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'],
  }),
  framework: '@storybook/react',
};
