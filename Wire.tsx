import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Center } from './packages/ui/center/Center';
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
      <Center>
        <Body>We couldn't load the fonts :(</Body>
      </Center>
    );
  }

  if (loadJokesFailed) {
    return (
      <Center>
        <Body>Jokes take a day off! We're sorry.</Body>
      </Center>
    );
  }

  if (!fontsLoaded || !jokesLoaded) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  return <>{children}</>;
};
