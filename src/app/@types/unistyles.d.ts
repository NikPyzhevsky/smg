import sharedTheme from '@/packages/shared/theme/theme';

import appTheme from '@/app/theme/theme';

type AppThemes = {
  primary: {
    app: typeof appTheme;
    shared: typeof sharedTheme;
  };
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
