
import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Routes
import PublicNavigator from './public/publicNavigator';
import PrivateNavigator from './private/privateNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../views/SplashScreen';
import { LogBox } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import DisconnectedErrorScreen from '../views/DisconnectedErrorScreen/DisconnectedErrorScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<any>(null);
  const netInfo = useNetInfo();
  const [disconnected, setDisconnected] = useState(false)

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  useEffect(() => {
    var valor = netInfo.isConnected

    if (valor) setDisconnected(false)

    setTimeout(() => {
      if (valor) {
        setDisconnected(false)
        AsyncStorage.getItem('token', (err, result) => {
          setUserToken(result)
          setIsLoading(false);
        })
      } else {
        setDisconnected(true)
      }
    }, 1000);

  }, [netInfo]);

  if (disconnected) {
    return <DisconnectedErrorScreen />
  }

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >

      {userToken != null ? (<Stack.Screen name="PrivateNavigator" component={PrivateNavigator} initialParams={{ setUserToken }} />) : (<Stack.Screen name="PublicNavigator" component={PublicNavigator} initialParams={{ setUserToken }} />)}

    </Stack.Navigator>
  );
}

export default RootNavigator;