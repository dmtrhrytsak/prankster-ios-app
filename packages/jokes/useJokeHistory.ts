import { useEffect } from 'react';

import { useJokes } from './JokesContext';
import { useJokesActions } from './useJokesActions';

export const useJokeHistory = () => {
  const { state } = useJokes();
  const { getJokeHistory } = useJokesActions();

  useEffect(() => {
    getJokeHistory();
  }, []);

  return { ...state };
};
