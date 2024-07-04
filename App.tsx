import 'react-native-gesture-handler';
import React from 'react';
import RoutesMapping from './src/Navigation/Navigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/Hooks/useAuth.tsx';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RoutesMapping />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
