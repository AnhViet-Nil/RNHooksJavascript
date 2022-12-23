module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          'src/@components': './src/common/components',
          'src/@constants': './src/common/constants',
          'src/@features': './src/features',
          'src/@navigation': './src/navigation',
          'src/@localization': './src/resources/localization',
          'src/@theme': './src/resources/theme',
          'src/@services': './src/services',
          'src/@store': './src/store',
          'src/@utilities': './src/utilities',
        },
      },
    ],
  ],
};
