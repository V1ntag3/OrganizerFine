import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from '../../views/DashBoard';

const Stack = createNativeStackNavigator();

function PrivateNavigator() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }} initialRouteName='DashBoard'>
    </Stack.Navigator>
  );
}

export default PrivateNavigator;