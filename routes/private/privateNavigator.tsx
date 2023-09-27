import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from '../../views/DashBoard';
import Adicionar from '../../views/Adicionar';
import DetalharRevenueSpending from '../../views/DetalharRevenueSpending';
import Configuracao from '../../views/Configuracao';
import Home from '../../views/Home';

const Stack = createNativeStackNavigator();

function PrivateNavigator( {route}:any ) {
  const {setUserToken} = route.params
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} initialParams={{setUserToken}}/>
      <Stack.Screen name="DashBoard" component={DashBoard} initialParams={{setUserToken}} />
      <Stack.Screen name="Configuracao" component={Configuracao} initialParams={{setUserToken}} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_left'
      }}/>

      <Stack.Screen name="Adicionar" component={Adicionar} initialParams={{setUserToken}} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }
      } />
    <Stack.Screen name="DetalharRevenueSpending" component={DetalharRevenueSpending} initialParams={{setUserToken}} />

    </Stack.Navigator>
  );
}

export default PrivateNavigator;