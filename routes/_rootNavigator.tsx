
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Routes
import PublicNavigator from './public/publicNavigator';
import PrivateNavigator from './private/privateNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../views/SplashScreen';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

function RootNavigator() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  React.useEffect(() => {

    AsyncStorage.getItem('token', (err, result) => {
      setUserToken(result)
      setIsLoading(false);

      if (result != null) {

      }
    })

  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >

      {userToken != null ? (<Stack.Screen name="PrivateNavigator" component={PrivateNavigator} initialParams={{ setUserToken }} />) : (<Stack.Screen name="PublicNavigator" component={PublicNavigator} initialParams={{ setUserToken }} />)}

    </Stack.Navigator>
  );
}

export default RootNavigator;