import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {DefaultTheme, PaperProvider, Portal} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MySnackbar from './src/components/snackbars/Snackbar';
import {MyRouteProps} from './src/constants/RouteProps';
import {MyColors} from './src/enums/Colors';
import {MyRoutes} from './src/enums/Routes';
import MyHomeScreen from './src/screens/HomeScreen';
import MyLoginScreen from './src/screens/LoginScreen';
import MySplashScreen from './src/screens/SplashScreen';
import MyTestScreen from './src/test/TestScreen';
import MyModalUtils from './src/utils/ModalUtils';

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
  return MyModalUtils.modal.getValue();
});

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Portal>
          <MySnackbar />
          <Modal_ />
        </Portal>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={MyRoutes.Test}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={MyRoutes.Splash} component={MySplashScreen} />
            <Stack.Screen name={MyRoutes.Login} component={MyLoginScreen} />
            <Stack.Screen name={MyRoutes.Home} component={MyHomeScreen} />
            <Stack.Screen name={MyRoutes.Test} component={MyTestScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
