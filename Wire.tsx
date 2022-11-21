import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Body } from './packages/ui/typography/Body';
import { useJokesActions } from './packages/jokes/useJokesActions';

// Feels like I'm improvising here, but why not?
// It will ensure the best performance and the best user experience.
// I might be wrong, but I like to innovate :D Especially when it's just a test task.
export const Wire = ({ children }: { children: React.ReactNode }) => {
  const [jokesLoaded, setJokesLoaded] = useState(false);
  const [loadJokesFailed, setLoadJokesFailed] = useState(false);
  const { getTodayJoke, getJokeHistory } = useJokesActions();

  const [fontsLoaded, loadFontsError] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        await getTodayJoke();
        await getJokeHistory();
        setJokesLoaded(true);
      } catch (err) {
        setLoadJokesFailed(true);
      }
    };

    fetchJokes();
  }, []);

  if (loadFontsError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Body>We couldn't load the fonts :(</Body>
      </View>
    );
  }

  if (loadJokesFailed) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Body>Jokes take a day off! We're sorry.</Body>
      </View>
    );
  }

  if (!fontsLoaded || !jokesLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <>{children}</>;
};
