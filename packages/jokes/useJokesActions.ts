import { useCallback } from 'react';

import type { Joke } from './types';
import { useJokes } from './JokesContext';
import { JokesActions } from './JokesActions';
import { JokesStorage } from './JokesStorage';
import { JokesAPI } from './JokesAPI';
import { JokesUtils } from './JokesUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useJokesActions = () => {
  const { dispatch } = useJokes();

  const getJokeHistory = useCallback(async () => {
    dispatch(JokesActions.getJokeHistoryRequested());

    try {
      const jokeHistory = await JokesStorage.getJokeHistory();
      dispatch(JokesActions.getJokeHistorySucceeded(jokeHistory));
    } catch (err) {
      dispatch(JokesActions.getJokeHistoryFailed(err as Error));
    }
  }, [dispatch]);

  const getTodayJoke = useCallback(async () => {
    dispatch(JokesActions.getTodayJokeRequested());

    try {
      const todayJokeFromStorage = await JokesStorage.getTodayJoke();

      if (
        !todayJokeFromStorage ||
        !JokesUtils.isTodayJoke(todayJokeFromStorage)
      ) {
        const todayJokeFromServer = await JokesAPI.fetchRandomJoke();
        await JokesStorage.setTodayJoke(todayJokeFromServer);

        const jokeHistory = await JokesStorage.getJokeHistory();
        const newJokeHistory = [todayJokeFromServer, ...jokeHistory];
        await JokesStorage.setJokeHistory(newJokeHistory);
        dispatch(JokesActions.jokeHistoryChanged(newJokeHistory));

        dispatch(JokesActions.getTodayJokeSucceeded(todayJokeFromServer));
        return;
      }

      dispatch(JokesActions.getTodayJokeSucceeded(todayJokeFromStorage));
    } catch (err) {
      dispatch(JokesActions.getTodayJokeFailed(err as Error));
    }
  }, [dispatch]);

  const likeJoke = useCallback(
    async (jokeId: Joke['id']) => {
      dispatch(JokesActions.likeJokeRequested());

      try {
        const jokeHistory = await JokesStorage.getJokeHistory();
        const newJokeHistory = jokeHistory.map((joke) =>
          joke.id === jokeId ? { ...joke, liked: !joke.liked } : joke
        );
        await JokesStorage.setJokeHistory(newJokeHistory);
        dispatch(JokesActions.likeJokeSucceeded(jokeId));
      } catch (err) {
        dispatch(JokesActions.likeJokeFailed(err as Error));
      }
    },
    [dispatch]
  );

  return { getJokeHistory, getTodayJoke, likeJoke };
};
