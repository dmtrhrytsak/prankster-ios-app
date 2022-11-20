import { get } from '../request/methods';
import type { Joke } from './types';
import { JokesUtils } from './JokesUtils';

const baseUrl = 'https://v2.jokeapi.dev';

const fetchRandomJoke = async (): Promise<Joke> => {
  const joke = await get<Joke>(`${baseUrl}/joke/Any`);
  return JokesUtils.prepare(joke);
};

export const JokesAPI = {
  fetchRandomJoke,
};
