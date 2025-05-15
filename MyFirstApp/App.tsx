import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {DefaultTheme, PaperProvider, Portal} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyProgressModal from './src/components/modals/ProgressModal';
import MySnackbar from './src/components/snackbars/Snackbar';
import MyView from './src/components/views/View';
import {MyRouteProps} from './src/constants/RouteProps';
import {MyColors} from './src/enums/Colors';
import {MyRoutes} from './src/enums/Routes';
import MyHomeScreen from './src/screens/HomeScreen';
import MyLoginScreen from './src/screens/LoginScreen';
import MySplashScreen from './src/screens/SplashScreen';
import MyModalUtils from './src/utils/ModalUtils';
import MyTestScreen from './test/TestScreen';

const App: React.FC = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: MyColors.Theme,
      accent: MyColors.Theme,
    },
  };
  const Stack = createStackNavigator<MyRouteProps>();
  const ModalStack_ = observer(() => (
    <MyView isExpanded>
      {MyModalUtils.modalModelList.value.map(item => (
        <Portal>{item.modal}</Portal>
      ))}
    </MyView>
  ));
  const ProgressModal_ = observer(() => {
    if (MyModalUtils.isProgressModalVisible.value) {
      return <MyProgressModal />;
    }
    return <MyView />;
  });
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Portal>
            <ProgressModal_ />
          </Portal>
          <Portal>
            <MySnackbar />
          </Portal>
          <Portal>
            <ModalStack_ />
          </Portal>
          <Stack.Navigator
            initialRouteName={MyRoutes.Splash}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={MyRoutes.Home} component={MyHomeScreen} />
            <Stack.Screen name={MyRoutes.Login} component={MyLoginScreen} />
            <Stack.Screen name={MyRoutes.Splash} component={MySplashScreen} />
            <Stack.Screen name={MyRoutes.Test} component={MyTestScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
