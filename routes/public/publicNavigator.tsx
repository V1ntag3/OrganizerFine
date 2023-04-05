import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Registrar from '../../views/Registrar';
import Welcome from '../../views/Welcome';
import Login from '../../views/Login';
import EsqueciSenha from '../../views/EsqueciSenha';

const Stack = createNativeStackNavigator();

function PublicNavigator() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }} initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Registrar" component={Registrar} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />

    </Stack.Navigator>
  );
}

export default PublicNavigator;