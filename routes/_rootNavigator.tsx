
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Routes
// import PublicNavigator from './public/publicNavigator';
import PublicNavigator from './public/publicNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
      {/* <Stack.Screen name="PrivateNavigator" component={PublicNavigator} /> */}
    </Stack.Navigator>
  );
}

export default RootNavigator;