import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';

const App: React.FC = () => {
  return <SafeAreaProvider>
    <LoginScreen />
  </SafeAreaProvider>;
};

export default App;
