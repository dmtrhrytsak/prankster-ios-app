import { JokesProvider } from './packages/jokes/JokesContext';
import { ThemeProvider } from './packages/theme/ThemeContext';
import { theme } from './packages/theme/theme';
import { RootNavigator } from './packages/navigation/RootNavigator';
import { Wire } from './Wire';

export default function App() {
  return (
    <JokesProvider>
      <ThemeProvider value={{ theme }}>
        <Wire>
          <RootNavigator />
        </Wire>
      </ThemeProvider>
    </JokesProvider>
  );
}
