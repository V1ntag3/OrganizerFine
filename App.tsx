import React, { useCallback, useEffect } from 'react';
import Routes from './routes/Routes';
import { connectToDatabase } from './server/database/database';
import { createTables } from './server/database/createTables';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Impede que a tela de splash feche antes da fonte ser carregada

function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins/Poppins-Thin.ttf'),
    'ABSTER': require('@/assets/fonts/ABSTER.otf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]); 

  const loadData = useCallback(async () => {
    try {
      const db = await connectToDatabase();
      createTables(db);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!fontsLoaded) {
    return null; 
  }

  return <Routes />;
}

export default App;
