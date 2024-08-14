
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrivateNavigator from './private/privateNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {

  return (
    <PrivateNavigator />
  );
}

export default RootNavigator;