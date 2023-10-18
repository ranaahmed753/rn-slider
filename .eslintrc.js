
module.exports = {
  extends: '@react-native',
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react-native/all'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
};
