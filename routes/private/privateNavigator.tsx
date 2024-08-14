import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from '../../views/DashBoard';
import AddRevenueSpending from '../../views/AddRevenueSpending/AddRevenueSpending';
import DetailRevenueSpending from '../../views/DetailRevenueSpending/DetailRevenueSpending';
import ProfileEdit from '../../views/ProfileEdit/ProfileEdit';
import Home from '../../views/Home';
import ManagerLoan from '../../views/ManagerLoan/ManagerLoan';
import DetailLoan from '../../views/DetailLoan/DetailLoan';
import AddTransaction from '../../views/AddTransaction';
import AddLoan from '../../views/AddLoan';

const Stack = createNativeStackNavigator();

function PrivateNavigator({ route }: any) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_left'
      }} />
      <Stack.Screen name="AddRevenueSpending" component={AddRevenueSpending} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="DetailRevenueSpending" component={DetailRevenueSpending} />
      <Stack.Screen name="ManagerLoan" component={ManagerLoan} />
      <Stack.Screen name="DetailLoan" component={DetailLoan} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
      <Stack.Screen name="AddLoan" component={AddLoan} />

    </Stack.Navigator>
  );
}

export default PrivateNavigator;