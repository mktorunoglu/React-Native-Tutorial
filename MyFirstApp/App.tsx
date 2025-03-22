import React from 'react';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyColors } from './src/enums/Colors';
import MyLoginScreen from './src/screens/LoginScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: MyColors.Theme,
    accent: MyColors.Theme,
  },
};

const App: React.FC = () => {
  return <SafeAreaProvider>
    <PaperProvider
      theme={theme}>
      <MyLoginScreen />
    </PaperProvider>
  </SafeAreaProvider>;
};

export default App;
