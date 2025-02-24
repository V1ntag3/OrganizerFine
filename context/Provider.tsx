import { useColorScheme } from 'react-native'
import { TamaguiProvider, Theme, type TamaguiProviderProps } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { CurrentToast } from '../components/UI/CurrentToast'
import { config } from '../tamagui.config'
import { UserProvider } from './UserProvider'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS={false} // 🔥 Garante que o Tamagui aplique os estilos
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'} // 🔥 Define corretamente o tema
      key={colorScheme} // 🔥 Força a re-renderização ao mudar o tema
      {...rest}
    >
      <Theme name="purple">
      <ToastProvider
        swipeDirection="horizontal"
        duration={6000}
        native={['mobile']} 
      >
        <UserProvider>
          {children}
        </UserProvider>
        <CurrentToast />
        <ToastViewport top="$8" left={0} right={0} />
      </ToastProvider>
      </Theme>
    </TamaguiProvider>
  )
}
