import { JokesProvider } from './packages/jokes/JokesContext';
import { ThemeProvider } from './packages/theme/ThemeContext';
import { theme } from './packages/theme/theme';
import { RootStack } from './packages/navigation/RootStack';
import { Wire } from './Wire';

export default function App() {
  return (
    <JokesProvider>
      <ThemeProvider value={{ theme }}>
        <Wire>
          <RootStack />
        </Wire>
      </ThemeProvider>
    </JokesProvider>
  );
}
