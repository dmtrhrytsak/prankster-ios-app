import { jokesSlice } from './jokesSlice';

const {
  getJokeHistoryRequested,
  getJokeHistorySucceeded,
  getJokeHistoryFailed,
  jokeHistoryChanged,
  getTodayJokeRequested,
  getTodayJokeSucceeded,
  getTodayJokeFailed,
  likeJokeRequested,
  likeJokeSucceeded,
  likeJokeFailed,
} = jokesSlice.actions;

export const JokeActions = {
  getJokeHistoryRequested,
  getJokeHistorySucceeded,
  getJokeHistoryFailed,
  jokeHistoryChanged,
  getTodayJokeRequested,
  getTodayJokeSucceeded,
  getTodayJokeFailed,
  likeJokeRequested,
  likeJokeSucceeded,
  likeJokeFailed,
};
