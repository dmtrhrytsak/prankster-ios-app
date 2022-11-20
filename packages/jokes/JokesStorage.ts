import { AsyncStorage } from '../async-storage/AsyncStorage';
import type { Joke } from './types';

const jokeHistoryKey = 'jokeHistory';
const todayJokeKey = 'todayJoke';

const getJokeHistory = async (): Promise<Joke[]> => {
  const jokeHistory = await AsyncStorage.getItem<Joke[]>(jokeHistoryKey);
  return jokeHistory ?? [];
};

const setJokeHistory = async (jokeHistory: Joke[]): Promise<void> =>
  AsyncStorage.setItem(jokeHistoryKey, jokeHistory);

const getTodayJoke = async (): Promise<Joke | null> =>
  AsyncStorage.getItem<Joke>(todayJokeKey);

const setTodayJoke = async (joke: Joke): Promise<void> =>
  AsyncStorage.setItem(todayJokeKey, joke);

export const JokesStorage = {
  getJokeHistory,
  setJokeHistory,
  getTodayJoke,
  setTodayJoke,
};
