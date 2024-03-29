import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './routes/_rootNavigator';

function Routes() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Routes;
