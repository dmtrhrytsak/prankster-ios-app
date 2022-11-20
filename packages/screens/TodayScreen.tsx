import { useEffect } from 'react';
import { View } from 'react-native';

import { Container } from '../ui/container/Container';
import { TodayJoke } from '../jokes/TodayJoke';
import { useTheme } from '../theme/ThemeContext';
import { useJokesActions } from '../jokes/useJokesActions';

export const TodayScreen = () => {
  const {
    theme: {
      colors: { background },
    },
  } = useTheme();

  const { getJokeHistory, getTodayJoke } = useJokesActions();

  useEffect(() => {
    getJokeHistory();
    getTodayJoke();
  }, []);

  return (
    <View style={{ height: '100%', backgroundColor: background }}>
      <Container full center>
        <TodayJoke />
      </Container>
    </View>
  );
};
