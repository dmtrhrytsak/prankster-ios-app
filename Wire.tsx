import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Body } from './packages/ui/typography/Body';
import { Center } from './packages/ui/center/Center';
import { useAppDispatch } from './packages/store/hooks';
import { JokeActions } from './packages/jokes/JokeActions';

// Feels like I'm improvising here, but why not?
// It will ensure the best performance and the best user experience.
// I might be wrong, but I like to innovate :D Especially when it's just a test task.
export const Wire = ({ children }: { children: React.ReactNode }) => {
  const [fontsLoaded, loadFontsError] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(JokeActions.getJokeHistoryRequested());
    dispatch(JokeActions.getTodayJokeRequested());
  }, []);

  if (loadFontsError) {
    return (
      <Center>
        <Body>We couldn't load the fonts :(</Body>
      </Center>
    );
  }

  if (!fontsLoaded) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  return <>{children}</>;
};
