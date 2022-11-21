import { useEffect } from 'react';

import { useJokes } from './JokesContext';
import { useJokesActions } from './useJokesActions';

export const useTodayJoke = () => {
  const { state } = useJokes();
  const { getTodayJoke, getJokeHistory } = useJokesActions();

  const todayJoke = state.jokes.entities[state.todayJokeId];

  useEffect(() => {
    getTodayJoke();
    getJokeHistory();
  }, []);

  return { ...state, todayJoke };
};
