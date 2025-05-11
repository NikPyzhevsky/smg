import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { type MainStackParamList } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';
import { MainScreens } from '@/app/screens';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => (
  <MainStack.Navigator
    initialRouteName={MAIN_ROUTE.FIRST_SCREEN}
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Group>
      <MainStack.Screen component={MainScreens.FirstScreen} name={MAIN_ROUTE.FIRST_SCREEN} />
      <MainStack.Screen component={MainScreens.SecondScreen} name={MAIN_ROUTE.SECOND_SCREEN} />
    </MainStack.Group>
  </MainStack.Navigator>
);

export default MainNavigator;
