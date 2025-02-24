
import { useCallback, useEffect } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { Provider } from '../context/Provider'
import { useTheme } from 'tamagui'
import { connectToDatabase } from 'server/database/database'
import { createTables } from 'server/database/createTables'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    ABSTER: require('@/assets/fonts/ABSTER.otf'),

  })

  const loadData = useCallback(async () => {
    try {
      console.log("🔄 Iniciando conexão com o banco de dados...");
      const db = await connectToDatabase();
      console.log("✅ Banco de dados conectado!");

      console.log("📦 Criando tabelas...");
      await createTables(db);
      console.log("✅ Tabelas criadas!");
    } catch (error) {
      console.error("❌ Erro ao carregar banco de dados:", error);
    }
  }, []);

  useEffect(() => {
    loadData();

    if (interLoaded || interError) {
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])



  if (!interLoaded && !interError) {
    return null
  }

  return (
    <Providers>
      <RootLayoutNav />
    </Providers>
  )
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()
  const theme = useTheme()
  return (

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="index"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />
        <Stack.Screen
          name="loan/listLoan"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />
        <Stack.Screen
          name="loan/detailLoan"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />
        <Stack.Screen
          name="loan/addTransaction"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />
        <Stack.Screen
          name="loan/addLoan"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />

        <Stack.Screen
          name="loan/updateLoan"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />

        <Stack.Screen
          name="revenueSpend/listRevenueSpend"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />

        <Stack.Screen
          name="revenueSpend/addRevenueSpend"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />

        <Stack.Screen
          name="revenueSpend/detailRevenueSpend"
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: theme.background.val,
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}
