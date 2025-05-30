import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { type FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Toast } from '@/packages/shared/components';
import ApplicationContextProvider from '@/packages/shared/contexts/ApplicationContext';
import { createQueryClient } from '@/packages/shared/utils/queryClient';

import { initApplicationContext } from '@/app/config/init';
import { initI18n } from '@/app/i18n/i18n';
import RootNavigator from '@/app/navigation/RootNavigator';
import { initTheme } from '@/app/theme/init';

const { repositories, services } = initApplicationContext();

initTheme();
initI18n(services.language);

const queryClient = createQueryClient(repositories.storage);

const App: FC = () => (
  <KeyboardProvider statusBarTranslucent>
    <GestureHandlerRootView>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <ApplicationContextProvider services={services}>
            <BottomSheetModalProvider>
              <RootNavigator />
              <Toast />
            </BottomSheetModalProvider>
          </ApplicationContextProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  </KeyboardProvider>
);

export default App;
