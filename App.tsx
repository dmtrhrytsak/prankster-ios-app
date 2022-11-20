import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { JokesProvider } from './packages/jokes/JokesContext';
import { ThemeProvider } from './packages/theme/ThemeContext';
import { theme } from './packages/theme/theme';
import { RootNavigator } from './packages/navigation/RootNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <JokesProvider>
      <ThemeProvider value={{ theme }}>
        <RootNavigator />
      </ThemeProvider>
    </JokesProvider>
  );
}
