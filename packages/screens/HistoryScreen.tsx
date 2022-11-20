import { SafeAreaView } from 'react-native';

import { useTheme } from '../theme/ThemeContext';
import { JokeHistory } from '../jokes/JokeHistory';

export const HistoryScreen = () => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <JokeHistory />
    </SafeAreaView>
  );
};
