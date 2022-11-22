import { Provider } from 'react-redux';

import { ThemeProvider } from './packages/theme/ThemeContext';
import { theme } from './packages/theme/theme';
import { RootStack } from './packages/navigation/RootStack';
import { Wire } from './Wire';
import { store } from './packages/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider value={{ theme }}>
        <Wire>
          <RootStack />
        </Wire>
      </ThemeProvider>
    </Provider>
  );
}
