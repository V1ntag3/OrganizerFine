import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Registrar from '../../views/Registrar';
import Welcome from '../../views/Welcome';
import Login from '../../views/Login';
import EsqueciSenha from '../../views/EsqueciSenha';
import EsqueciSenhaOk from '../../views/EsqueciSenhaOk';
import DashBoard from '../../views/DashBoard';

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
      <Stack.Screen name="EsqueciSenhaOk" component={EsqueciSenhaOk} />
      <Stack.Screen name="DashBoard" component={DashBoard} />

    </Stack.Navigator>
  );
}

export default PublicNavigator;