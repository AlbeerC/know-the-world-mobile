import Main from './src/components/Main'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  )
}
