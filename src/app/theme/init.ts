import { UnistylesRegistry } from 'react-native-unistyles';

import sharedTheme from '@/packages/shared/theme/theme';

import appTheme from '@/app/theme/theme';

export const initTheme = () => {
  UnistylesRegistry.addThemes({
    primary: {
      app: appTheme,
      shared: sharedTheme,
    },
  }).addConfig({
    adaptiveThemes: true,
  });
};
