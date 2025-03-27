import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import { DefaultTheme, PaperProvider, Portal } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MySafeAreaView from './src/components/views/SafeAreaView';
import { MyRouteProps } from './src/constants/RouteProps';
import { MyColors } from './src/enums/Colors';
import { MyRoutes } from './src/enums/Routes';
import MyLoginScreen from './src/screens/LoginScreen';
import MySplashScreen from './src/screens/SplashScreen';
import MyDialogUtils from './src/utils/ModalUtils';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: MyColors.Theme,
    accent: MyColors.Theme,
  },
};

const Stack = createStackNavigator<MyRouteProps>();

const Modal_ = observer(() => {
  return MyDialogUtils.modal.value;
});

const App: React.FC = () => {
  return <SafeAreaProvider>
    <PaperProvider
      theme={theme}>
      <MySafeAreaView>
        <Portal>
          <Modal_ />
        </Portal>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={MyRoutes.Splash}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name={MyRoutes.Splash}
              component={MySplashScreen} />
            <Stack.Screen
              name={MyRoutes.Login}
              component={MyLoginScreen} />
            <Stack.Screen
              name={MyRoutes.Home}
              component={MyLoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MySafeAreaView>
    </PaperProvider>
  </SafeAreaProvider>;
};

export default App;
