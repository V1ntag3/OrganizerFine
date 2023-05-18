import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Registrar from '../../views/Registrar';
import Welcome from '../../views/Welcome';
import Login from '../../views/Login';
import EsqueciSenha from '../../views/EsqueciSenha';
import EsqueciSenhaOk from '../../views/EsqueciSenhaOk';
import { Easing, LogBox } from 'react-native';


const Stack = createNativeStackNavigator();

function PublicNavigator({ route }: any) {

  const { setUserToken } = route.params

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName='Welcome'>

      <Stack.Screen name="Welcome" component={Welcome} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }
      } />
      <Stack.Screen name="Registrar" component={Registrar} initialParams={{ setUserToken }} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }
      } />
      <Stack.Screen name="Login" component={Login} initialParams={{ setUserToken }} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }
      } />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      <Stack.Screen name="EsqueciSenhaOk" component={EsqueciSenhaOk} />

    </Stack.Navigator>
  );
}

export default PublicNavigator;