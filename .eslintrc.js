module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'eslint-plugin-react-compiler',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
    'typescript-sort-keys',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  root: true,
  settings: {
    'import/resolver': {
      alias: {
        map: [['^@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    node: {
      paths: ['src'],
      extensions: ['.ts', '.tsx'],
    },
  },
  rules: {
    'react-compiler/react-compiler': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'no-restricted-exports': ['off', { restrictedNamedExports: ['default'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-empty-function': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/packages/shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/packages/example/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: false,
        locale: 'auto',
        multiline: 'last',
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: false,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      {
        caseSensitive: true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    'typescript-sort-keys/interface': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        natural: true,
        requiredFirst: true,
      },
    ],
    'typescript-sort-keys/string-enum': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
  },
};
