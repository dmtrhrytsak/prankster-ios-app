import { DateUtils } from '../utils/DateUtils';
import type { Joke } from './types';

const prepare = (joke: Joke) => ({
  ...joke,
  liked: false,
  fetched_at: DateUtils.today().toISOString(),
});

const makeJokeText = (joke: Joke) =>
  isTwoPartJoke(joke) ? `${joke.setup} ${joke.delivery}` : joke.joke;

const isTwoPartJoke = (joke: Joke) =>
  joke.setup !== undefined && joke.delivery !== undefined;

const isTodayJoke = (joke: Joke) => {
  const today = DateUtils.today();
  const jokeDate = new Date(joke.fetched_at);
  return DateUtils.isSameDay(today, jokeDate);
};

export const JokesUtils = {
  prepare,
  makeJokeText,
  isTodayJoke,
};
