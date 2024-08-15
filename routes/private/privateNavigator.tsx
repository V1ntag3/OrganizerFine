import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from '../../views/RevenueSpending/DashBoard';
import AddRevenueSpending from '../../views/AddRevenueSpending/AddRevenueSpending';
import DetailRevenueSpending from '../../views/DetailRevenueSpending/DetailRevenueSpending';
import ProfileEdit from '../../views/ProfileEdit/ProfileEdit';
import Home from '../../views/Home';
import ManagerLoan from '../../views/Loan/ManagerLoan';
import DetailLoan from '../../views/Loan/DetailLoan/DetailLoan';
import AddTransaction from '../../views/Loan/AddTransaction';
import AddLoan from '../../views/Loan/AddLoan';

const Stack = createNativeStackNavigator();

function PrivateNavigator({ route }: any) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="DashBoard" component={DashBoard} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_left'
      }} />
      <Stack.Screen name="AddRevenueSpending" component={AddRevenueSpending} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="DetailRevenueSpending" component={DetailRevenueSpending} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="ManagerLoan" component={ManagerLoan} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="DetailLoan" component={DetailLoan} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <Stack.Screen name="AddLoan" component={AddLoan} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />

    </Stack.Navigator>
  );
}

export default PrivateNavigator;