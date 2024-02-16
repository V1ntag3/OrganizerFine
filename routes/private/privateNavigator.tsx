import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from '../../views/DashBoard';
import AddRevenueSpending from '../../views/AddRevenueSpending/AddRevenueSpending';
import DetailRevenueSpending from '../../views/DetailRevenueSpending/DetailRevenueSpending';
import ProfileEdit from '../../views/ProfileEdit/ProfileEdit';
import Home from '../../views/Home';
import ManagerLoan from '../../views/ManagerLoan/ManagerLoan';
import DetailLoan from '../../views/DetailLoan/DetailLoan';
import AddTransaction from '../../views/AddTransaction/AddTransaction';
import AddLoan from '../../views/AddLoan/AddLoan';

const Stack = createNativeStackNavigator();

function PrivateNavigator({ route }: any) {
  const { setUserToken } = route.params
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} initialParams={{ setUserToken }} />
      <Stack.Screen name="DashBoard" component={DashBoard} initialParams={{ setUserToken }} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} initialParams={{ setUserToken }} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_left'
      }} />
      <Stack.Screen name="AddRevenueSpending" component={AddRevenueSpending} initialParams={{ setUserToken }} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }
      } />
      <Stack.Screen name="DetailRevenueSpending" component={DetailRevenueSpending} initialParams={{ setUserToken }} />
      <Stack.Screen name="ManagerLoan" component={ManagerLoan} initialParams={{ setUserToken }} />
      <Stack.Screen name="DetailLoan" component={DetailLoan} initialParams={{ setUserToken }} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} initialParams={{ setUserToken }} />

      <Stack.Screen name="AddLoan" component={AddLoan} initialParams={{ setUserToken }} />

    </Stack.Navigator>
  );
}

export default PrivateNavigator;