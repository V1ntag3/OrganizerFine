import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from '../../views/DashBoard';
import Adicionar from '../../views/Adicionar';

const Stack = createNativeStackNavigator();

function PrivateNavigator( {route}:any ) {
  const {setUserToken} = route.params
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }} initialRouteName='DashBoard'>
      <Stack.Screen name="DashBoard" component={DashBoard} initialParams={{setUserToken}} />
      <Stack.Screen name="Adicionar" component={Adicionar} initialParams={{setUserToken}} />
    </Stack.Navigator>
  );
}

export default PrivateNavigator;